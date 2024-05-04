import logo from "../assets/logo.svg";
import Hover from "../assets/Hover.svg";
import MenuIcon from "../assets/Menu Icon.svg";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="w-[75rem] mx-auto flex items-center justify-between mt-[3.11rem] pb-[2.81rem]">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <ul className="flex items-center gap-[2.38rem]">
        <li>
          <img src={Hover} alt="" />
        </li>
        <li>
          <NavLink to="/" className='font-nunito'>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/work"}>Work</NavLink>
        </li>
        <li>
          <NavLink to={"/news"}>News</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className=" cursor-pointer">
          <img src={MenuIcon} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
