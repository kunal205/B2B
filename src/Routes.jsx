import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/home";
import AboutUs from "./Components/aboutUs";
import Products from "./Components/Products";
import Manufacturing from "./Components/Manufacturing";
import WhyUs from "./Components/WhyUs";
import ContactUs from "./Components/ContactUs";
import App from "./App";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/products", element: <Products /> },
        { path: "/manufacturing", element: <Manufacturing /> },
        { path: "/why-us", element: <WhyUs /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
