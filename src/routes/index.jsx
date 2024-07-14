import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardPage from "../pages/Admin/DashboardPage";
import ForgetPassword from "../features/signinsignup/components/ForgetPW";
import AccountPageContainer from "../pages/AccountProfile";
import ProductListPage from "../pages/ProductListPage";
import Container from "../layouts/Container";
import UsersContextProvider from "../features/Adminfeatures/contexts/UsersContext";
import ProductContextProvider from "../features/Adminfeatures/contexts/ProductsContext";
import OrderContextProvider from "../features/Adminfeatures/contexts/OrdersContext";
import AuthenticateAdmin from "../features/AuthAdmin/AuthAdmin";
import AboutUs from "../pages/AboutUs.jsx";
import ScrollToTop from "../utils/scrollToTop.js";
import RandomPage from "../pages/RandomPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Container />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "forget",
        element: <ForgetPassword />,
      },
      {
        path: "productinfo/:id",
        element: <ProductInfoPage />,
      },
      {
        path: "productList",
        element: <ProductListPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "Account",
        element: <AccountPageContainer />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "random",
        element: <RandomPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AuthenticateAdmin>
        <ScrollToTop />
        <DashboardPage />
      </AuthenticateAdmin>
    ),
  },
]);

export default function Router() {
  return (
    <OrderContextProvider>
      <ProductContextProvider>
        <UsersContextProvider>
          <RouterProvider router={router} />
        </UsersContextProvider>
      </ProductContextProvider>
    </OrderContextProvider>
  );
}
