import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { BsImage } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { useSelector } from "react-redux";
const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    image: "",
  });
  const [image, setImage] = useState("");
  const imageHandler = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-Blue rounded-md">
        <h1 className=" text-light font-semibold text-lg">Categories</h1>
        <button
          className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-sm"
          onClick={() => setShow(true)}
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
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
                        <span>Sports</span>
                      </td>
                      <td className="py-3 px-4  whitespace-nowrap">
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
          } z-50 top-0 transition-all duration-500 `}
        >
          <div className="w-full pl-5 ">
            <div className=" bg-Blue h-screen lg:h-auto px-3 py-2 lg:rounded-md text-light ">
              <div className="flex justify-between items-center  mb-4 mt-8 lg:mt-0">
                <h1 className=" text-light font-semibold text-xl lg:w-full lg:text-center">
                  Add Category
                </h1>
                <div
                  className="block lg:hidden text-light cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <form action="">
                <div className="flex flex-col w-full gap-2 mb-3">
                  <label htmlFor="name">Category name</label>
                  <input
                    type="text"
                    placeholder="category name"
                    id="name"
                    name="category_name"
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[330px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-light"
                  >
                    {image ? (
                      <img src={image} alt="" className="w-full h-full" />
                    ) : (
                      <>
                        <span>
                          <BsImage />
                        </span>
                        <span>select Image</span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={imageHandler}
                    className="hidden"
                  />
                </div>
                <div>
                  <button
                    className=" bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 transition-all duration-200"
                    disabled={loader ? true : false}
                  >
                    {loader ? (
                      <PropagateLoader
                        cssOverride={overrideStyle}
                        color="#fff"
                      />
                    ) : (
                      "Add Category"
                    )}
                  </button>
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
