import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/Home/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
]);

export default router;
