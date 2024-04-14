import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavs } from "../navigation";
import { BiLogInCircle } from "react-icons/bi";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNavs("admin");
    setAllNav(navs);
  }, []);
  return (
    <div>
      <div></div>
      <div
        className={`w-[260px] fixed bg-Blue z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link className="w-[180px] h-[50px]" to={"/"}>
            <img
              src="http://localhost:3000/images/logo.png"
              alt="logo"
              className=" w-full h-full"
            />
          </Link>
        </div>
        <div className="px-4 mt-4">
          <ul>
            {allNav.map((nav, index) => (
              <li key={index}>
                <Link
                  className={`${
                    pathname === nav.path
                      ? " bg-slate-600 shadow-indigo-500/30 text-white duration-500"
                      : " text-light font-normal duration-200"
                  } px-3 py-[9px] rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-4 text-xl`}
                  to={nav.path}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="px-3 py-[9px] rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-4 text-xl text-light font-normal duration-200">
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
