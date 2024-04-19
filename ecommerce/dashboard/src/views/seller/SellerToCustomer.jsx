import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SellerToCustomer = () => {
  const [show, setShow] = useState(false);
  const sellerId = 32;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-Blue px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-50 ${
              show ? "-left-4" : "-left-[336px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-dark5 md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Customers</h2>
                <span
                  className="block cursor-pointer md:hidden"
                  onClick={() => setShow(!show)}
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer bg-slate-700`}
              >
                <div className="relative">
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                    className="w-[48px] h-[48px] border-white border-2 p-1 rounded-full max-w-[48px]"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-green-500 absolute z-10 right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Kabir Ahmed</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                    className="w-[48px] h-[48px] border-white border-2 p-1 rounded-full max-w-[48px]"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-green-500 absolute z-10 right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Kabir Ahmed</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                    className="w-[48px] h-[48px] border-white border-2 p-1 rounded-full max-w-[48px]"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-green-500 absolute z-10 right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Kabir Ahmed</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                    className="w-[48px] h-[48px] border-white border-2 p-1 rounded-full max-w-[48px]"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-green-500 absolute -z-10 right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Kabir Ahmed</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                      className="w-[54px] h-[54px] border-green-500 border-2 p-1 rounded-full max-w-[54px]"
                    />
                    <div className="w-[15px] h-[15px] rounded-full bg-green-500 absolute z-10 right-0 bottom-0"></div>
                  </div>
                  <h2 className=" text-white font-semibold text-lg">
                    Rakib Khan
                  </h2>
                </div>
              )}
              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            <div className="py-4">
              <div className=" bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                        className="w-[34px] h-[34px] border-white border-2 p-1 rounded-full max-w-[34px]"
                      />
                    </div>
                    <div className="flex items-start justify-start flex-col w-full bg-orange-500  text-white rounded-sm py-2 px-3">
                      <span>How Are you?</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex items-start justify-start flex-col w-full bg-blue-500  text-white rounded-sm py-2 px-3">
                      <span>How Are you?</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                        className="w-[34px] h-[34px] border-white border-2 p-1 rounded-full max-w-[34px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3">
              <input
                type="text"
                placeholder="enter your message"
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-light"
              />
              <button className=" bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 font-semibold rounded-md text-white px-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;
