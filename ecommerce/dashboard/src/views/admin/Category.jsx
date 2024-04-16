import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { BsImage } from "react-icons/bs";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-Blue rounded-md">
            <div className="flex justify-between items-center">
              <select
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                onChange={(e) => setPerPage(parseInt(e.target.value))}
              >
                <option value="5">5</option>
                <option value="5">15</option>
                <option value="5">25</option>
              </select>
              <input
                type="text"
                placeholder="search"
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
              />
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-light">
                <thead className=" uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      No
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {item}
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <img
                          src={`http://localhost:3000/images/category/${item}.jpg`}
                          alt="category"
                          className="w-[45px] h-[45px]"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <span>Sports</span>
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px] bg-yellow-600 rounded-sm hover:shadow-lg hover:shadow-yellow-600/50 flex items-center justify-center">
                            <FaEdit />
                          </Link>
                          <Link className="p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* pagination  */}
            <div className="w-full flex justify-end mt-4 mb-2">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                perPage={perPage}
                showItem={3}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : " -right-[340px]"
          } z-20 top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className=" bg-Blue h-screen lg:h-auto px-3 py-2 lg:rounded-md text-light">
              <h1 className=" text-light font-semibold text-xl mb-4 w-full text-center">
                Add Category
              </h1>
              <form action="">
                <div className="flex flex-col w-full gap-2 mb-3">
                  <label htmlFor="name">Category name</label>
                  <input
                    type="text"
                    placeholder="category name"
                    id="name"
                    name="category_name"
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                  />
                </div>
                <div>
                    <label htmlFor="image">
                        <span><BsImage/></span>
                        <span>select Image</span>
                    </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
