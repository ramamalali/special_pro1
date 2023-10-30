import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home/Home";
import Login from "../modules/utlis/login/Login";
import Layout from "./Layout";
import Aboutus from "../modules/AboutUs/pages/Aboutus";
import Contactus from "../modules/ContactUs/pages/Contactus";
import BuyCard from "../modules/BuyCard/BuyCard";

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
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "contact-us",
        element: <Contactus/>
      },
      {
        path: "buy-card",
        element: <BuyCard/>
      }
    ],
  },
]);

export default router;
