import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const categories = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "T-Shirt",
    },
    {
      id: 3,
      name: "Jersey",
    },
    {
      id: 4,
      name: "Pant",
    },
    {
      id: 5,
      name: "Watch",
    },
  ];

  const [categoryShow, setCategoryShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const categorySearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value) {
      let search = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(search);
    } else {
      setAllCategory(categories);
    }
  };
  useEffect(() => {
    setAllCategory(categories);
  }, []);
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
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  placeholder="--select category--"
                  name="category"
                  id="category"
                  value={category}
                  onChange={inputHandler}
                  readOnly
                  onClick={() => setCategoryShow(!categoryShow)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                    categoryShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      type="text"
                      placeholder="search"
                      onChange={categorySearch}
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-light overflow-hidden"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-y-scroll">
                    {allCategory.map((item, index) => (
                      <span
                        key={item.id}
                        onClick={() => {
                          setCategoryShow(false);
                          setCategory(item.name);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                        className={`px-4 py-2 hover:bg-indigo-500 hover:text-white w-full cursor-pointer ${
                          category === item.name && "bg-indigo-500"
                        }`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  placeholder="product brand"
                  name="stock"
                  id="stock"
                  value={state.stock}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-light">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  placeholder="price"
                  name="price"
                  id="price"
                  value={state.price}
                  onChange={inputHandler}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount (%)</label>
                <input
                  type="number"
                  placeholder="%discount%"
                  name="discount"
                  id="discount"
                  value={state.discount}
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
