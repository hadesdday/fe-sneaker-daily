import SigninPage from "../pages/Authentication/Signin";
import SignupPage from "../pages/Authentication/Signup";
import CartPage from "../pages/Cart";
import ProductList from "../pages/ProductList";
import TrackingOrder from "../pages/TrackingOrder";
import Wishlist from "../pages/Wishlist";

export const ROUTE_LIST = [
  {
    path: "/cart",
    component: CartPage,
    requireLogin: true,
  },
  {
    path: "/signin",
    component: SigninPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/wishlist",
    component: Wishlist,
    requireLogin: true,
  },
  {
    path: "/product-list",
    component: ProductList,
  },
  {
    path: "/tracking-order/:id",
    component: TrackingOrder,
  },
];
