import { Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import blog1Photo from "../../assets/blog1Photo.png";
import BlogLine from "../../assets/BlogLine.svg";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[5.83rem]">
      <h1 className=" text-jaguar flex flex-col items-center font-syne text-[6.25rem] font-bold">
        Our Blog
      </h1>
      <div className="mt-[9.38rem] flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-7">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[7.5625rem] h-[1px] bg-jaguar" />
          </div>
          <h4 className=" mt-8 text-jaguar font-syne text-3xl font-medium w-[31.75rem]">
            How To Keep The Motivation Up When There Is No Client Work
          </h4>
          <p className=" mt-5 text-boulder font-nunito text-xl w-[31.75rem]">
            Whereby is the super simple way to connect over video, No downloads
            or long having into meeting links.
          </p>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[4.81rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>
        <div>
          <img src={blog1Photo} alt="" />
        </div>
      </div>
      <img src={BlogLine} alt="" className="mt-[6.27rem]" />
    </div>
  );
};

export default HeroSection;
