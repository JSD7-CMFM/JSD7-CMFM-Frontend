import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
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
import ProductDetails from "../features/ProductInfo/ProductDetails.jsx";

//Try connect class with higher hierachy
const Router = () => {
  const [cartItems, setCartItems] = useState([]);

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
          path: "/forget",
          element: <ForgetPassword />,
        },
        {
          path: "/productinfo/:id",
          element: (
            <ProductInfoPage
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          ),
        },
        {
          path: "/productList",
          element: <ProductListPage />,
        },
        {
          path: "/cart",
          element: (
            <CartPage setCartItems={setCartItems} cartItems={cartItems} />
          ),
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/Account",
          element: <AccountPageContainer />,
        },
      ],
    },
    {
      path: "/admin",
      element: <DashboardPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/register",
//         element: <RegisterPage />,
//       },
//       {
//         path: "forget",
//         element: <ForgetPassword />,
//       },
//       {
//         path: "productinfo/:id",
//         element: <ProductInfoPage />,
//       },
//       {
//         path: "productList",
//         element: <ProductListPage />,
//       },
//       {
//         path: "cart",
//         element: <CartPage />,
//       },
//       {
//         path: "checkout",
//         element: <CheckoutPage />,
//       },
//       {
//         path: "Account",
//         element: <AccountPageContainer />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <DashboardPage />,
//   },
// ]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }
