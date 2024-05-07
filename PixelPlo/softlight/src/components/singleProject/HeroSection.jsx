import singleProjectPhoto from "../../assets/singleProjectPhoto.png";
import singleProjectBorder from "../../assets/singleProjectBorder.svg";
import Line from "../../assets/Line.svg";
const HeroSection = () => {
  return (
    <div className=" w-[75rem] mx-auto mt-[5.83rem]">
      <h2 className="text-stroke text-center font-syne text-[3.75rem] font-bold mb-5">
        Website Design
      </h2>
      <p className=" text-jaguar text-center font-syne text-[1.5625rem] font-medium mb-[3.12rem]">
        Web Design
      </p>
      <div>
        <div>
          <img src={singleProjectPhoto} alt="" />
        </div>
        <div className="px-[5.31rem] flex justify-between items-center relative">
          <img
            src={singleProjectBorder}
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className=" py-[3.62rem] relative">
            <img
              src={Line}
              alt=""
              className="absolute -right-[5rem] top-[50%] translate-y-[-50%]"
            />
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              Zoe Stewart
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Client
            </p>
          </div>
          <div className=" py-[3.62rem] relative">
            <img
              src={Line}
              alt=""
              className="absolute -right-[5rem] top-[50%] translate-y-[-50%]"
            />
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              Services
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Web Design
            </p>
          </div>
          <div className=" py-[3.62rem] relative">
            <img
              src={Line}
              alt=""
              className="absolute -right-[5rem] top-[50%] translate-y-[-50%]"
            />
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              16.12.2023
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Date
            </p>
          </div>
          <div className=" py-[3.62rem] relative">
            <p className=" text-jaguar text-center font-syne text-3xl font-medium underline cursor-pointer">
              Live Link
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
