import React from "react";

const SellerDetails = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5">
        <div className=" w-full p-4 bg-Blue rounded-md">
          <div className="w-full flex flex-wrap text-light">
            <div className="w-3/12 flex justify-center items-center py-3">
              <div>
                <img
                  src="http://localhost:3000/images/admin.jpg"
                  alt="admin"
                  className="w-full h-[230px]"
                />
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Basic Info</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                  <div className="flex gap-2">
                    <span>Name: </span>
                    <span>Kabir Khan</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Email: </span>
                    <span>kabir@gmail.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Role: </span>
                    <span>seller</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Status: </span>
                    <span>active</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Payment Account: </span>
                    <span>active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Address</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                  <div className="flex gap-2">
                    <span>Shop Name: </span>
                    <span>Kabir Fashion</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division: </span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District: </span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-District: </span>
                    <span>Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form action="">
              <div className="flex gap-4 py-3 items-center">
                <select
                  name=""
                  id=""
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                >
                  <option value="">--select status--</option>
                  <option value=""> active</option>
                  <option value="">inactive</option>
                </select>
                <div>
                  <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
