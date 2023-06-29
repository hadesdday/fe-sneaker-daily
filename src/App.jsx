import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./parts/Header";
import ProductList from "./pages/ProductList";
import "./App.css";

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkUserSession());
  // }, []);

  // const currentUser = useSelector(selectCurrentUser);
  // console.log("user", currentUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
