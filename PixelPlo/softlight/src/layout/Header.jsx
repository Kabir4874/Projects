import logo from "../assets/logo.svg";
import Hover from "../assets/Hover.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [nav, setNav] = useState("");
  window.addEventListener("scroll", () => {
    if (scrollY > 120) {
      setNav("bg-white px-4 py-2 rounded-b-md shadow-sm");
    } else {
      setNav("");
    }
  });
  return (
    <nav
      className={`w-[75rem] mx-auto flex items-center justify-between mt-[3.11rem]  border-b border-borderColor sticky top-0 z-[1000] ${nav} ${
        !nav && "pb-[2.81rem]"
      }`}
    >
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <ul className="flex items-center gap-[2.38rem]">
        <li>
          <img src={Hover} alt="" />
        </li>
        <li>
          <NavLink
            to="/"
            className="font-nunito text-lg font-medium text-tarawera hover:text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-tarawera after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className="font-nunito text-lg font-medium text-tarawera hover:text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-tarawera after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/work"}
            className="font-nunito text-lg font-medium text-tarawera hover:text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-tarawera after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Portfolio
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to={"/news"}
            className="font-nunito text-lg font-medium text-tarawera"
          >
            News
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to={"/contact"}
            className="font-nunito text-lg font-medium text-tarawera hover:text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-tarawera after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Contact
          </NavLink>
        </li>
        <li className=" cursor-pointer group">
          <svg
            width="59"
            height="58"
            viewBox="0 0 59 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="29.4001"
              cy="29.0002"
              r="28.6081"
              stroke="#D5D5D5"
              className=" group-hover:stroke-tarawera transition-all duration-300"
              stroke-width="0.5"
            />
            <rect
              x="16.9033"
              y="28.0249"
              width="25"
              height="2"
              fill="#08364A"
            />
            <rect
              x="29.46"
              y="21.9492"
              width="12.4168"
              height="2"
              fill="#08364A"
            />
            <rect
              x="16.8965"
              y="34.0513"
              width="12.4168"
              height="2"
              fill="#08364A"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
