import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-Blue rounded-md">
        <Search
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-light">
            <thead className=" uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
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
                    #455fdf5sf
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $646
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-[6px] bg-green-600 rounded-sm hover:shadow-lg hover:shadow-green-600/50 flex items-center justify-center">
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

export default Orders;
