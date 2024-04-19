import React from "react";
import { BsImage } from "react-icons/bs";
import { FadeLoader } from "react-spinners";

const Profile = () => {
  const image = true;
  const loader = false;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
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
          </div>
        </div>
        <div className="w-full md:w-6/12"></div>
      </div>
    </div>
  );
};

export default Profile;
