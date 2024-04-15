import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-8 pt-5">
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
        <div className="relative mt-6 overflow-x-auto">
          <div className="w-full text-sm text-left text-light">
            <div className="text-sm text-light uppercase border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Order ID</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap">
                  234234jlkj243
                </div>
                <div className="py-4 w-[13%]">$56</div>
                <div className="py-4 w-[18%]">Pending</div>
                <div className="py-4 w-[18%]">Pending</div>
                <div className="py-4 w-[18%]">
                  <Link>view</Link>
                </div>
                <div
                  className="py-4 w-[8%] cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <BsArrowBarDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-4">
                    234234jlkj243
                  </div>
                  <div className="py-4 w-[13%]">$56</div>
                  <div className="py-4 w-[18%]">Pending</div>
                  <div className="py-4 w-[18%]">Pending</div>
                  <div className="py-4 w-[18%]">
                    <Link>view</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
