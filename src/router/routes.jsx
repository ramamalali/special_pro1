import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { aboutRouter } from "../modules/AboutUs/route/aboutRoute";
import { homeRouter } from "../modules/Home/route/home";
import { contactRouter } from "../modules/ContactUs/routes/Contactroute";
import { faqRoutes } from "../modules/Faq/routes/faqRoute";
import App from "../App";
import { loginRouter } from "../modules/utlis/login/routes/loginRoute";
import { signupRouter } from "../modules/utlis/signup/route/signupRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...homeRouter,
      ...aboutRouter,
      ...contactRouter,
      ...faqRoutes
    ],
  },
  ...loginRouter,
  ...signupRouter
]);

export default router;
