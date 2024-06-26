import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" min-w-screen min-h-screen bg-mirage flex justify-center items-center">
      <div className="w-[350px] text-iron p-2">
        <div className=" bg-ebony_clay p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to E-commerce</h2>
          <p className="text-sm mb-3">
            Please register and start your business
          </p>
          <form action="">
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-iron focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-iron focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-iron focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
            <button className=" bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 transition-all duration-200">
              Sign Up
            </button>
            <div className="flex items-center justify-center mb-3 gap-3">
              <p>
                Already have an account? <Link to={"/login"}>Login Here</Link>
              </p>
            </div>
            <div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
