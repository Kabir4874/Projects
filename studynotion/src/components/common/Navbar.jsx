import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/HomePage/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/api";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data);
    } catch (err) {
      console.log("Could nt fetch the category list");
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

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
                  <div></div>
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
