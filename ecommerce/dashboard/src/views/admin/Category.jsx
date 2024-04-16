import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [perPage, setPerPage] = useState(5);
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
                        <img src={`http://localhost:3000/images/category/${item}.jpg`} alt="" />
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <span>pending</span>
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <span>pending</span>
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <Link>View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <div className="w-full p-4 bg-Blue rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
