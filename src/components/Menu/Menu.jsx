import "./menu.css";
import chevron from "./assets/chevron.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu bg-white pt-4 pl-6 pb-10 pr-8 hidden" id="menu">
      <div className="menu-item">
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25C0 11.2 11.2 0 25 0ZM10.0583 33.5407C13.7271 39.0173 19.2378 42.5 25.3993 42.5C31.5608 42.5 37.0715 39.0173 40.7402 33.5407C36.7213 29.793 31.328 27.5 25.3993 27.5C19.4705 27.5 14.0774 29.793 10.0583 33.5407ZM25 22.5C29.1423 22.5 32.5 19.1421 32.5 15C32.5 10.8579 29.1423 7.5 25 7.5C20.8577 7.5 17.5 10.8579 17.5 15C17.5 19.1421 20.8577 22.5 25 22.5Z"
              fill="#E6DE2D"
            />
          </svg>
          <span className="ml-3">Sign in</span>
        </div>
        <img src={chevron} alt="" />
      </div>

      <Link to="/">
        <div className="menu-item">
          Home <img src={chevron} alt="" />
        </div>
      </Link>
      <div className="menu-item">
        Services <img src={chevron} alt="" />
      </div>
      <div className="menu-item">
        Buy Cards <img src={chevron} alt="" />
      </div>
      <div className="menu-item">
        About Us <img src={chevron} alt="" />
      </div>
      <div className="menu-item">
        Contact <img src={chevron} alt="" />
      </div>
    </div>
  );
};

export default Menu;
