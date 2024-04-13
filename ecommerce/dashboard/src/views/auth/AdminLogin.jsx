import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
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
    dispatch(admin_login(state));
  };

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
  return (
    <div className=" w-screen h-screen bg-dark flex justify-center items-center">
      <div className=" w-[350px] text-light p-2">
        <div className=" bg-blue-base p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                src="http://localhost:3000/images/logo.png"
                alt="logo"
                className=" w-full h-full"
              />
            </div>
          </div>
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

            <button
              disabled={loader ? true : false}
              className=" bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 mb-3 transition-all duration-300"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
