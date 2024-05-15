import { Link } from "react-router-dom";
import blog from "../../assets/blog.png";
import blog3Photo from "../../assets/blog3Photo.png";
import blog4Photo from "../../assets/blog4Photo.png";
import rightArrow from "../../assets/rightArrow.svg";
const Blogs = () => {
  return (
    <div className="w-[75rem] mx-auto mt-36">
      <div>
        <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          Latest News &{" "}
          <span className=" bg-jaguar text-white px-[0.38rem]">Blogs</span>
        </h2>
      </div>
      <div className="w-[49.625rem] mx-auto  flex flex-col gap-[4.0625rem] mt-[8.51rem]">
        <Link to={"/blog/1"}>
          <div className="relative group">
            <div className=" absolute w-[27.239rem] h-[33.382rem] -right-[12rem] -top-[8rem] invisible group-hover:visible z-50">
              <img src={blog} alt="" />
            </div>
            <div className="flex items-center gap-[1.75rem] mb-8">
              <p className=" text-black font-nunito text-xl">
                Posted on December 31, 2021 Business
              </p>
              <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
            </div>
            <h3 className=" text-boulder group-hover:text-jaguar transition-all duration-200 font-syne text-[1.875rem] font-medium w-[34.661rem]">
              How To Keep The Motivation Up When There Is No Client Work
            </h3>
          </div>
        </Link>

        <Link to={"/blog/1"}>
          <div className="relative group">
            <div className=" absolute w-[27.239rem] h-[33.382rem] -right-[12rem] -top-[7rem] invisible group-hover:visible z-50">
              <img
                src={blog3Photo}
                alt=""
                className="w-[22.22rem] h-[22.51rem] rotate-[-10.91deg]"
              />
            </div>
            <div className="flex items-center gap-[1.75rem] mb-8">
              <p className=" text-black font-nunito text-xl">
                Posted on December 31, 2021 Business
              </p>
              <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
            </div>
            <h3 className=" text-boulder group-hover:text-jaguar transition-all duration-200 font-syne text-[1.875rem] font-medium w-[34.661rem]">
              JavaScript Algorithms And Data Structures Management
            </h3>
          </div>
        </Link>

        <Link to={"/blog/1"}>
          <div className="relative group">
            <div className=" absolute w-[27.239rem] h-[33.382rem] -right-[14.5rem] -top-[8rem] invisible  group-hover:visible z-50">
              <img
                src={blog4Photo}
                alt=""
                className="w-[22.22rem] h-[22.51rem] rotate-[-10.91deg]"
              />
            </div>
            <div className="flex items-center gap-[1.75rem] mb-8">
              <p className=" text-black font-nunito text-xl">
                Posted on December 31, 2021 Business
              </p>
              <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
            </div>
            <h3 className=" text-boulder group-hover:text-jaguar transition-all duration-200 font-syne text-[1.875rem] font-medium w-[34.661rem]">
              Winning Desing Tips And Strategies For App UI/UX Developers
            </h3>
          </div>
        </Link>
      </div>
      <Link to={"/news"}>
        <button className="flex items-center gap-[0.38rem] text-jaguar text-lg font-bold mx-auto mt-[5.62rem]">
          See All News
          <span className="mt-[2px]">
            <img src={rightArrow} alt="" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Blogs;
