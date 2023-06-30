import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTE_LIST } from "./constants/routes";
import AppContainer from "./layouts/Container";
import Home from "./pages/Home";
import { Box } from "@mui/material";

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkUserSession());
  // }, []);

  // const currentUser = useSelector(selectCurrentUser);
  // console.log("user", currentUser)

  return (
    <>
      <AppContainer>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {
              ROUTE_LIST.map((route) => {
                const Page = route.component;
                return (
                  <Route path={route.path} key={route.path} element={
                    <Box component={"section"}>
                      <Page />
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
