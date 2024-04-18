import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const DiscountProducts = () => {
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
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4  whitespace-nowrap">{item}</td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <img
                      src={`http://localhost:3000/images/category/${item}.jpg`}
                      alt="category"
                      className="w-[45px] h-[45px]"
                    />
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>
                      Men's Premium soft and comfortable T-shirt - Fabric's
                      Royal Blue
                    </span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>Sports</span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>Easy</span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>$23</span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>5%</span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <span>50</span>
                  </td>
                  <td className="py-3 px-4  whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-[6px] bg-yellow-600 rounded-sm hover:shadow-lg hover:shadow-yellow-600/50 flex items-center justify-center">
                        <FaEdit />
                      </Link>
                      <Link className="p-[6px] bg-green-600 rounded-sm hover:shadow-lg hover:shadow-green-600/50 flex items-center justify-center">
                        <FaEye />
                      </Link>
                      <button className="p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center">
                        <FaTrash />
                      </button>
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

export default DiscountProducts;
