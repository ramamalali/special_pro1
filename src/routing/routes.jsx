import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home/Home";
import Login from "../modules/utlis/login/Login";
import Layout from "./Layout";
import Aboutus from "../modules/AboutUs/pages/Aboutus";
import Contactus from "../modules/ContactUs/pages/Contactus";
import Faq from "../modules/Faq/pages/Faq";
import BuyCard from "../modules/BuyCard/BuyCard";
import Signup from "../modules/utlis/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup/>
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "contact-us",
        element: <Contactus/>
      },
      {
        path:"faq",
        element: <Faq/>
      },
      {
        path:"buy-card",
        element: <BuyCard/>
      }
    ],
  },
]);

export default router;
