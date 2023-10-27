import "./navbar.css";
import Menu from "../Menu/Menu";
import cartSvg from "./assets/Cart.svg";
import menuSvg from "./assets/Menu.svg";
const Navbar = () => {
  const handelOnClick = (event) => {
    const menuIcon = document.querySelector("#menu-icon");
    menuIcon.classList.toggle("menu-active");

    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");

    const darkBackground = document.querySelector("#dark");
    darkBackground.classList.toggle("show-sidebar");
    if (event.target.classList.contain("menu-item")) {
      darkBackground.classList.toggle("show-sidebar");
      menu.classList.toggle("hidden");
    }
  };
  return (
    <>
      <nav className="project-container flex justify-between items-center relative mb-3 bg-transparent">
        <span>LOGO</span>
        <div className="flex justify-center items-center">
          <img src={cartSvg} className="mr-7" alt="" />
          <div className="menu-icon-contianer" id="menu-icon">
            <img src={menuSvg} alt="" onClick={handelOnClick} />
          </div>
        </div>
      </nav>

      <Menu handleOnClick={handelOnClick} />
    </>
  );
};

export default Navbar;
