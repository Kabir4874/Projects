import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ChatSeller = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-Blue px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-4" : "-left-[336px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-dark5 md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  className="block cursor-pointer md:hidden"
                  onClick={() => setShow(true)}
                >
                  <IoMdClose />
                </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSeller;
