import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const inputHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-Blue rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className=" text-light text-xl font-semibold">Add Product</h1>
          <div>
            <Link
              to={"/seller/dashboard/products"}
              className=" bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2"
            >
              Products
            </Link>
          </div>
        </div>
        <div>
          <form action="">
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-light">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  placeholder="product name"
                  name="name"
                  id="name"
                  value={state.name}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  type="text"
                  placeholder="product brand"
                  name="brand"
                  id="brand"
                  value={state.brand}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-light">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  placeholder="product name"
                  name="name"
                  id="name"
                  value={state.name}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  type="text"
                  placeholder="product brand"
                  name="brand"
                  id="brand"
                  value={state.brand}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
