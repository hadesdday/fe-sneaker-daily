import TestComponent from "../compositions/test-component";
import { ForgotPasswordPage } from "../pages/Authentication";
import SigninPage from "../pages/Authentication/Signin";
import SigninOtpPage from "../pages/Authentication/SigninOTP";
import SignupPage from "../pages/Authentication/Signup";
import CartPage from "../pages/Cart";
import ProductDetailPage from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import SaleOffPage from "../pages/SaleOff";
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
    path: "/signin-otp",
    component: SigninOtpPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordPage,
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
    path: "/tracking-order",
    component: TrackingOrder,
  },
  {
    path: "/promotion/clearance-sale/",
    component: SaleOffPage,
  },
  {
    path: "/product-detail/:id",
    component: ProductDetailPage,
  },
  {
    path: "/test",
    component: TestComponent,
  },
];
