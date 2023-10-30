import Menu from "../Menu/Menu";
import cartSvg from "./assets/Cart.svg";
import menuSvg from "./assets/Menu.svg";
const Navbar = () => {
  const handelOnClick = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
    const body = document.getElementsByTagName("body");
    body[0].classList.toggle("show-sidebar")
  };
  return (
    <>
      <nav className="px-6 pb-3 flex justify-between items-center">
        <span>LOGO</span>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={cartSvg} className="mr-7" alt="" />
            <img src={menuSvg} alt="" onClick={handelOnClick} />
          </div>
        </div>
      </nav>

      <Menu />
    </>
  );
};

export default Navbar;
