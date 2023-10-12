import cartSvg from "./assets/Cart.svg";
import menuSvg from "./assets/Menu.svg";
const Navbar = () => {
  const handelOnClick = () => {
    console.log("Menu");
  };
  return (
    <nav className="flex justify-between items-center">
      <span>LOGO</span>{" "}
      <div className="flex justify-center items-center">
        {" "}
        <div className="flex justify-center items-center">
          <img src={cartSvg} className="mr-7" alt="" />
          <img src={menuSvg} alt="" onClick={handelOnClick} />
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
