import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../modules/AboutUs/components/Modal/Modal";

const Layout = () => {
  return (
    <>
      <Modal />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
