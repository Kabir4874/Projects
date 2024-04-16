import React, { useState } from "react";

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
