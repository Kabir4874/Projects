import React, { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-Blue rounded-md">
        <div className="flex justify-between items-center mb-4">
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
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Shop Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Division
                </th>
                <th scope="col" className="py-3 px-4">
                  District
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4   whitespace-nowrap">{item}</td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <img
                      src={`http://localhost:3000/images/category/${item}.jpg`}
                      alt="category"
                      className="w-[45px] h-[45px]"
                    />
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>Adnan Ahmed</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>adnan@gmail.com</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>Adnan Fashion</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>Dhaka</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <span>Dhaka</span>
                  </td>
                  <td className="py-3 px-4   whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to="/admin/dashboard/seller/details/:1"
                        className="p-[6px] bg-green-600 rounded-sm hover:shadow-lg hover:shadow-green-600/50 flex items-center justify-center"
                      >
                        <FaEye />
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
  );
};

export default Sellers;
