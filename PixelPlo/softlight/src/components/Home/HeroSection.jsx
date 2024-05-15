import headerPhoto from "../../assets/Photo.png";
import star from "../../assets/Star 1.svg";
import right from "../../assets/Pattern.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto px-[2.7rem] mt-[5.83rem]">
      <h1 className=" text-tarawera flex flex-col items-center font-syne text-[6.25rem] font-bold">
        <span className="flex items-center">
          Take it t <img src={star} alt="" />
        </span>
        <span className="flex items-center gap-1">
          the Creative <img src={headerPhoto} alt="" className="" /> level
        </span>
      </h1>
      <p className="max-w-[36.472rem] text-center mx-auto text-boulder font-nunito text-[1.5625rem] my-[1.62rem]">
        High-end <span className=" underline">digital experiences</span>.
        Created at the heart of Manhattan, we are a human-sized team.
      </p>
      <div className=" w-fit mx-auto">
        <Link to={"/contact"}>
          <button className=" capitalize py-[0.625rem] px-3 flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-tarawera text-white font-nunito text-[0.875rem] font-bold">
            say hello <img src={right} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
