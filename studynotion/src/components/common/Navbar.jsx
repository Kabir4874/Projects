import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/HomePage/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/api";
import { IoIosArrowDown } from "react-icons/io";

const subLinks = [
  {
    title: "python",
    link: "/catalog/python",
  },
  {
    title: "web dev",
    link: "/catalog/web-development",
  },
];

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  //   const [subLinks, setSubLinks] = useState([]);

  //   const fetchSubLinks = async () => {
  //     try {
  //       const result = await apiConnector("GET", categories.CATEGORIES_API);
  //       setSubLinks(result.data);
  //       console.log(result);
  //     } catch (err) {
  //       console.log("Could nt fetch the category list");
  //     }
  //   };

  //   useEffect(() => {
  //     fetchSubLinks();
  //   }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className=" flex h-14 items-center justify-center border-b border-b-richBlack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" width={160} height={42} loading="lazy" />
        </Link>

        <nav>
          <ul className="flex gap-x-6 text-richBlack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="flex items-center gap-2 cursor-pointer group relative">
                    <p>{link.title}</p>
                    <IoIosArrowDown />

                    <div className=" cursor-pointer invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[1.5rem] flex flex-col rounded-md bg-richBlack-5 p-4 text-richBlack-900 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 w-[300px] z-50">
                      <div className=" absolute left-[50%] translate-x-[-50%] -top-2 h-6 w-6 rotate-45 rounded-sm bg-richBlack-5 cursor-pointer"></div>

                      {subLinks.length ? (
                        subLinks.map((subLink, index) => (
                          <Link to={subLink.link} key={index}>
                            <p>{subLink.title}</p>
                          </Link>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? " text-yellow-25"
                          : "text-richBlack-25"
                      }  font-inter leading-6`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/ signup/dashboard  */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richBlack-700 bg-richBlack-800 px-3 py-2 text-richBlack-100 rounded-md">
                Login
              </button>
            </Link>
          )}

          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richBlack-700 bg-richBlack-800 px-3 py-2 text-richBlack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
