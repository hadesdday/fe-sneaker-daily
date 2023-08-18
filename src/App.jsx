import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { ROUTE_LIST } from "./constants/routes";
import AppContainer from "./layouts/Container";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./store/user/user.selector";
import { inject } from '@vercel/analytics';

function App() {

  const currentUser = useSelector(selectCurrentUser);

  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes("/product-list"))
      window.scrollTo(0, 0);
  }, [pathname])

  inject();

  return (
    <>
      <AppContainer>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {
              ROUTE_LIST.map((route) => {
                const Page = route.component;
                if (route.path)
                  return (
                    <Route path={route.path} key={route.path} element={
                      <Box component={"section"}>
                        {(route.redirectIfLoggedIn && currentUser) ? <Navigate to="/" replace /> :
                          (route.requireLogin && !currentUser) ? <Navigate to="/signin" replace /> :
                            <Page />
                        }
                      </Box>
                    }
                    />
                  )
              }
              )
            }
          </Route>
        </Routes>
      </AppContainer>
    </>
  )
}

export default App
