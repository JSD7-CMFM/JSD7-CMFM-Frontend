import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardPage from "../pages/Admin/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
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
        path: "productinfo",
        element: <ProductInfoPage />,
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
    ],
  },
  {
    path: "/admin",
    element: <DashboardPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
