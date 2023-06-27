import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkUserSession } from "@/store/user/user.action";
import { selectCurrentUser } from "@/store/user/user.selector";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const currentUser = useSelector(selectCurrentUser);
  console.log("user", currentUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Typography variant="h1">nav</Typography>}>
          <Route index element={<Typography variant="h2">home</Typography>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
