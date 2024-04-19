import React from "react";
import { BsImage } from "react-icons/bs";
import { FadeLoader } from "react-spinners";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const image = true;
  const loader = false;
  const status = "active";
  const userInfo = false;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full md:w-6/12">
          <div className="w-full bg-Blue rounded-md p-4 text-light">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-[250px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {loader && (
                    <div className=" bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  htmlFor="img"
                  className="flex justify-center items-center flex-col h-[250px] w-[200px] cursor-pointer border border-dashed hover:border-indigo-500 border-light relative"
                >
                  <span>
                    <BsImage />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className=" bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                <span className="p-[6px] bg-yellow-600 rounded hover:shadow-lg hover:shadow-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                  <FaEdit />
                </span>
                <div className="flex gap-2">
                  <span>Name: </span>
                  <span>Kabir Ahmed</span>
                </div>
                <div className="flex gap-2">
                  <span>Email: </span>
                  <span>kabir@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role: </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status: </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account: </span>
                  <p>
                    {status === "active" ? (
                      <span className=" bg-green-500 text-white text-xs cursor-pointer ml-2 px-2 py-1 rounded-sm">
                        active
                      </span>
                    ) : (
                      <span className=" bg-blue-500 text-white text-xs cursor-pointer ml-2 px-2 py-1 rounded-sm">
                        click active
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {userInfo ? (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative mt-4">
                  <span className="p-[6px] bg-yellow-600 rounded hover:shadow-lg hover:shadow-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                    <FaEdit />
                  </span>
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
                    <span>Sub District: </span>
                    <span>Dhaka</span>
                  </div>
                </div>
              ) : (
                <form action="" className="mt-4">
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="shop">Shop Name</label>
                    <input
                      type="text"
                      placeholder="shop name"
                      name="shop"
                      id="shop"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="division">Division</label>
                    <input
                      type="text"
                      placeholder="Division"
                      name="division"
                      id="division"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="district">District</label>
                    <input
                      type="text"
                      placeholder="District"
                      name="district"
                      id="district"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="subDistrict">Sub District</label>
                    <input
                      type="text"
                      placeholder="Sub District"
                      name="subDistrict"
                      id="subDistrict"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                    />
                  </div>
                  <button className=" bg-blue-500 hover:shadow-blue-500/50  hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="w-full p-8 bg-Blue rounded-md text-light">
            <h2 className=" text-light text-lg font-semibold">
              Change Password
            </h2>
            <form action="" className="mt-4">
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  placeholder="old password"
                  name="oldPassword"
                  id="oldPassword"
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  placeholder="new password"
                  name="newPassword"
                  id="newPassword"
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <button className=" bg-blue-500 hover:shadow-blue-500/50  hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
