import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import HomePage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProductInfoPage from "../pages/ProductInfoPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"



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
      }
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />
}