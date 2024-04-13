import React from "react";

const Register = () => {
  return (
    <div className=" w-screen h-screen bg-dark flex justify-center items-center">
      <div className=" w-[350px] text-light p-2">
        <div className=" bg-blue-base p-4 rounded-md">
          <h2 className=" text-xl mb-3">Welcome to E-commerce</h2>
          <p className=" text-sm mb-3">
            Please register to your account and start your business
          </p>
          <form action="">
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                id="email"
                required
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
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-light focus:border-indigo-500 overflow-hidden"
              />
            </div>
            <div className="flex items-center w-full gap-1 mb-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
                className=" w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
