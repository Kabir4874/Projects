import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div
        className={`text-center font-inter leading-6 px-6 py-3 rounded-md ${
          active ? " bg-yellow-50 text-black" : " bg-richBlack-800 text-white"
        } hover:scale-95 transition-all duration-300`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
