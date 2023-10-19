import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home/Home";
import Login from "../modules/utlis/login/Login";
import Layout from "./Layout";
import Aboutus from "../modules/AboutUs/pages/Aboutus";

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
    ],
  },
]);

export default router;
