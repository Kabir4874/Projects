import blog2Photo from "../../assets/blog2Photo.png";
import blog3Photo from "../../assets/blog3Photo.png";
import blog4Photo from "../../assets/blog4Photo.png";
import blog5Photo from "../../assets/blog5Photo.png";
import blog6Photo from "../../assets/blog6Photo.png";
import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";
const LatestBlogs = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[6.29rem]">
      <div className="flex items-center justify-between">
        <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          Latest News &{" "}
          <span className=" text-white bg-jaguar px-2">Blogs</span>
        </h2>
        <div className="flex items-center gap-5">
          <button className="px-8 bg-jaguar py-[1.30rem] rounded-[14.78rem] border-[1.5px] text-white font-nunito text-sm font-bold border-jaguar">
            All
          </button>
          <button className="px-8 py-[1.30rem] rounded-[14.78rem] border-[1.5px] text-jaguar border-jaguar font-nunito text-sm font-bold">
            UI Design
          </button>
          <button className="px-8 py-[1.30rem] rounded-[14.78rem] border-[1.5px] text-jaguar border-jaguar font-nunito text-sm font-bold">
            Website
          </button>
          <button className="px-8 py-[1.30rem] rounded-[14.78rem] border-[1.5px] text-jaguar border-jaguar font-nunito text-sm font-bold">
            Marketing
          </button>
        </div>
      </div>

      <div className="mt-[5rem] w-[62.25rem] mx-auto grid grid-cols-2 items-center gap-x-24 gap-y-20">
        <div>
          <img src={blog2Photo} alt="" />
          <div className="flex items-center gap-5 mt-[1.88rem]">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[4.375rem] h-[1px] bg-jaguar" />
          </div>
          <h6 className=" text-jaguar font-syne text-3xl font-medium w-[28.125rem] mt-[1.88rem]">
            We speak to Aimer & Tatin Creative Fund Board Members
          </h6>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[1.88rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>

        <div>
          <img src={blog3Photo} alt="" />
          <div className="flex items-center gap-5 mt-[1.88rem]">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[4.375rem] h-[1px] bg-jaguar" />
          </div>
          <h6 className=" text-jaguar font-syne text-3xl font-medium w-[28.125rem] mt-[1.88rem]">
            Social media is changing – how can you stay on the right side.
          </h6>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[1.88rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>

        <div>
          <img src={blog4Photo} alt="" />
          <div className="flex items-center gap-5 mt-[1.88rem]">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[4.375rem] h-[1px] bg-jaguar" />
          </div>
          <h6 className=" text-jaguar font-syne text-3xl font-medium w-[28.125rem] mt-[1.88rem]">
            Seven ways that Progressive Web Apps are killing regular.
          </h6>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[1.88rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>

        <div>
          <img src={blog5Photo} alt="" />
          <div className="flex items-center gap-5 mt-[1.88rem]">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[4.375rem] h-[1px] bg-jaguar" />
          </div>
          <h6 className=" text-jaguar font-syne text-3xl font-medium w-[28.125rem] mt-[1.88rem]">
            The UX : Improving communication to enlarge the digital output
          </h6>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[1.88rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>

        <div>
          <img src={blog6Photo} alt="" />
          <div className="flex items-center gap-5 mt-[1.88rem]">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[4.375rem] h-[1px] bg-jaguar" />
          </div>
          <h6 className=" text-jaguar font-syne text-3xl font-medium w-[28.125rem] mt-[1.88rem]">
            Branding sustainability: three lessons from IKEA’s Live Lago
          </h6>
          <Link
            to={"/blog/1"}
            className="flex items-center gap-[0.38rem] text-jaguar font-nunito text-lg font-bold mt-[1.88rem]"
          >
            Read More <img src={rightArrow} alt="" className="mt-[2px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
