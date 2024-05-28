import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavs } from "../navigation";
import { BiLogInCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { role } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNavs(role);
    setAllNav(navs);
  }, [role]);
  return (
    <div>
      <div
        className={`fixed duration-200 ${
          !showSidebar ? " invisible" : " visible"
        } w-screen h-screen bg-charleston_green top-0 left-0 z-10`}
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        className={`w-[260px] fixed bg-ebony_clay z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
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
                      : " text-iron font-normal duration-300"
                  } px-3 py-[9px] rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-4 text-xl`}
                  to={nav.path}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="px-3 py-[9px] rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-4 text-xl text-iron font-normal duration-300">
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
