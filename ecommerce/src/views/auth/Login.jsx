import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineGooglePlus } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className=" w-screen h-screen bg-dark flex justify-center items-center">
      <div className=" w-[350px] text-light p-2">
        <div className=" bg-blue-base p-4 rounded-md">
          <h2 className=" text-xl mb-3">Welcome to E-commerce</h2>
          <p className=" text-sm mb-3">
            Please Sign-in to your account and start your business
          </p>
          <form action="" onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
                onChange={inputHandle}
                value={state.email}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
                onChange={inputHandle}
                value={state.password}
              />
            </div>

            <button className=" bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 mb-3 transition-all duration-300">
              Sign In
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Have no account? <Link to={"/register"}>Sign Up here</Link>
              </p>
            </div>
            <div className=" w-full flex justify-center items-center mb-3 gap-2">
              <div className=" w-[45%] bg-slate-700 h-[1px]"></div>
              <div>
                <span className=" pb-1">Or</span>
              </div>
              <div className=" w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className=" flex justify-center items-center gap-3">
              <div className=" w-[35px] h-[35px] flex items-center justify-center rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex items-center justify-center rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 cursor-pointer overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex items-center justify-center rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 cursor-pointer overflow-hidden">
                <span>
                  <SlSocialTwitter />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex items-center justify-center rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 cursor-pointer overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
