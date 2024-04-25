import React, { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { get_category } from "../../store/reducers/categoryReducer";
import { add_product } from "../../store/reducers/productReducer";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        perPage: "",
        page: "",
      })
    );
  }, []);

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
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const imageHandler = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };
  const [state, setState] = useState({
    name: "",
    description: "",
    category: "",
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

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImages = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages([...filterImages]);
    setImageShow([...filterImageUrl]);
  };

  useEffect(() => {
    setAllCategory(categories);
  }, [categories]);
  const add = (e) => {
    console.log(state);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("price", state.price);
    formData.append("stock", state.stock);
    formData.append("discount", state.discount);
    formData.append("shopName", "Kabir Fashion");
    formData.append("category", state.category);
    formData.append("brand", state.brand);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    dispatch(add_product(formData));
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
          <form action="" onSubmit={add}>
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
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all z-50 ${
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
                        key={index}
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
                  placeholder="stock"
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
            <div className="flex flex-col w-full gap-1 relative text-light mb-4">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="description"
                name="description"
                id="description"
                value={state.description}
                onChange={inputHandler}
                rows={6}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
              ></textarea>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4  gap-3 w-full text-light mb-4">
              {imageShow.map((img, index) => (
                <div key={index} className="h-[180px] relative">
                  <label htmlFor={index}>
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
                  </label>
                  <input
                    onChange={(e) => changeImage(e.target.files[0], index)}
                    type="file"
                    id={index}
                    className="hidden"
                  />
                  <span
                    onClick={() => removeImage(index)}
                    className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-light"
              >
                <span>
                  <BsImages />
                </span>
                <span>select image</span>
              </label>
              <input
                type="file"
                id="image"
                className="hidden"
                multiple
                onChange={imageHandler}
              />
            </div>
            <div>
              <button className=" bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
