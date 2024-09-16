import singleProjectBorder from "../../assets/singleProjectBorder.svg";
import Line from "../../assets/Line.svg";
const HeroSection = ({ project }) => {
  return (
    <div className=" w-[75rem] mx-auto mt-[5.83rem]">
      <h2 className="text-stroke text-center font-syne text-[3.75rem] font-bold mb-5 capitalize">
        {project?.projectName}
      </h2>
      <p className=" text-jaguar text-center font-syne text-[1.5625rem] font-medium mb-[3.12rem] capitalize">
        {project?.service}
      </p>
      <div>
        <div>
          <img src={project?.images?.[0]} alt="" className="w-full" />
        </div>
        <div className="px-[5.31rem] flex justify-between items-center relative">
          <img
            src={singleProjectBorder}
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className=" py-[3.62rem] relative">
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              {project?.clientName}
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Client
            </p>
          </div>
          <img src={Line} alt="" />
          <div className=" py-[3.62rem] relative">
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              {project?.service}
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Service
            </p>
          </div>
          <img src={Line} alt="" className="" />
          <div className=" py-[3.62rem] relative">
            <p className=" text-jaguar text-center font-syne text-3xl font-medium">
              {project?.date}
            </p>
            <p className=" text-boulder text-center font-nunito text-lg">
              Date
            </p>
          </div>
          <img src={Line} alt="" />
          <div className=" py-[3.62rem] relative">
            <a
              href={project?.link}
              target="_blank"
              className=" text-jaguar text-center font-syne text-3xl font-medium underline cursor-pointer"
            >
              Live Link
            </a>
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
