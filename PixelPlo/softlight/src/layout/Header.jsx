import logo from "../assets/logo.svg";
import Hover from "../assets/Hover.svg";
import MenuIcon from "../assets/Menu Icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [nav, setNav] = useState("");
  window.addEventListener("scroll", () => {
    if (scrollY > 120) {
      setNav("bg-white px-4 pt-4 pb-4 rounded-b-md shadow-lg");
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
            className="font-nunito text-lg font-medium text-tarawera"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className="font-nunito text-lg font-medium text-tarawera"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/work"}
            className="font-nunito text-lg font-medium text-tarawera"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/news"}
            className="font-nunito text-lg font-medium text-tarawera"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="font-nunito text-lg font-medium text-tarawera"
          >
            Contact
          </NavLink>
        </li>
        <li className=" cursor-pointer">
          <img src={MenuIcon} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
