import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { seller_register } from "../../store/reducers/authReducer";

const Register = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(seller_register(state));
  };

  return (
    <div className=" w-screen h-screen bg-dark flex justify-center items-center">
      <div className="w-[350px] text-light p-2">
        <div className="bg-Blue p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to E-commerce</h2>
          <p className="text-sm mb-3">
            Please Register and start your business
          </p>
          <form action="" onSubmit={submitHandler}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
                value={state.name}
                onChange={inputHandler}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
                value={state.email}
                onChange={inputHandler}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                value={state.password}
                onChange={inputHandler}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
              />
            </div>
            <div className="flex items-center gap-2 w-full mb-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
                className=" w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus-within:ring-blue-500"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
            <button
              className=" bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 transition-all duration-200"
              disabled={loader ? true : false}
            >
              {loader ? (
                <PropagateLoader cssOverride={overrideStyle} color="#fff" />
              ) : (
                "Register"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account? <Link to={"/login"}>Login Here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3 gap-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div>
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiTwitter />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
