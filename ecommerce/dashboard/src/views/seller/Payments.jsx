import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Payments = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">$6566</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark3 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-Green font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">20</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark4 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#cd00e8] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">50</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-[#7367801f] flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#7367f0] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">12</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark4 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#cd00e8] font-bold shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
