import Menu from "../Menu/Menu";
import cartSvg from "./assets/Cart.svg";
import menuSvg from "./assets/Menu.svg";
const Navbar = () => {
  const handelOnClick = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };
  return (
    <>
      <nav className="flex justify-between items-center relative ">
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
