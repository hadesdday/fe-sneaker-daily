import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./parts/Header";
import ProductList from "./pages/ProductList";
import "./App.css";
import Footer from "./parts/Footer";
import AppContainer from "./layouts/Container";

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
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
          </Route>
        </Routes>
      </AppContainer>
    </>
  )
}

export default App
