import WebDesignPhoto from "../../assets/WebDesignPhoto.png";
import BrandingDesignPhoto from "../../assets/BrandingDesignPhoto.png";
import DesignStrategyPhoto from "../../assets/DesignStrategyPhoto.png";
import DifferentThingsPhoto from "../../assets/DifferentThingsPhoto.png";
import BuildWebsitePhoto from "../../assets/BuildWebsitePhoto.png";
import project from "../../assets/project.png";
import project2 from "../../assets/project2.png";
import ViewProjectButton from "../../assets/ViewProjectButton.svg";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="w-full bg-jaguar mt-[9.35rem] pt-[11.81rem]">
      <div className="w-[62.2661rem] mx-auto">
        <div className=" w-fit mx-auto mb-[5.62rem] flex items-center gap-[1.88rem]">
          <button className=" px-[2.19rem] py-[1.30rem] rounded-[14.783rem] text-jaguar project-active font-nunito text-[0.875rem] font-bold">
            All Work
          </button>
          <button className=" px-[2.19rem] py-[1.30rem] rounded-[14.783rem] border border-white text-white font-nunito text-[0.875rem] font-bold">
            Web Design
          </button>
          <button className=" px-[2.19rem] py-[1.30rem] rounded-[14.783rem] border border-white text-white font-nunito text-[0.875rem] font-bold">
            App Design
          </button>
          <button className=" px-[2.19rem] py-[1.30rem] rounded-[14.783rem] border border-white text-white font-nunito text-[0.875rem] font-bold">
            Web App
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-start project-bg pb-[8.67rem]">
          <div className="relative group">
            <div className="mb-[1.5rem]">
              <img src={WebDesignPhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Website Design
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className="relative group pt-[116.87px]">
            <div className="mb-[1.5rem]">
              <img src={BrandingDesignPhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Branding Design
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[280px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className="-mt-[40.95px] relative group">
            <div className="mb-[1.5rem]">
              <img src={DesignStrategyPhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Design Strategy
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className=" pt-[74.95px] relative group">
            <div className="mb-[1.5rem]">
              <img src={DifferentThingsPhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Different Things
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[230px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className=" -mt-[40.95px] relative group">
            <div className="mb-[1.5rem]">
              <img src={BuildWebsitePhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Build Website
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className=" pt-[74.95px] relative group">
            <div className="mb-[1.5rem]">
              <img src={project} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Different Things
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[230px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
          <div className=" -mt-[40.95px] relative group">
            <div className="mb-[1.5rem]">
              <img src={project2} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Build Website
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
            <Link
              to={"/project/:1"}
              className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
            >
              <img src={ViewProjectButton} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
