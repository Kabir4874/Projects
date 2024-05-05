import WebDesignPhoto from "../../assets/WebDesignPhoto.png";
import BrandingDesignPhoto from "../../assets/BrandingDesignPhoto.png";
import DesignStrategyPhoto from "../../assets/DesignStrategyPhoto.png";
import DifferentThingsPhoto from "../../assets/DifferentThingsPhoto.png";
import BuildWebsitePhoto from "../../assets/BuildWebsitePhoto.png";
import seeall from "../../assets/seeall.svg";
const Projects = () => {
  return (
    <div className="w-[75rem] mx-auto">
      <h2 className=" text-white text-center font-syne text-[2.5rem] font-bold w-[53.5625rem] mx-auto mb-[6.25rem]">
        We Work to Craft Solid Products <br /> &{" "}
        <span className=" text-jaguar bg-white px-2">Project</span> For You
      </h2>
      <div className="flex flex-wrap justify-between items-start grid-bg pb-[8.67rem]">
        <div className="">
          <div className="mb-[1.5rem]">
            <img src={WebDesignPhoto} alt="" />
          </div>
          <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
            Website Design
          </h4>
          <p className=" text-white font-nunito text-lg">Web Design</p>
        </div>
        <div className=" pt-[116.87px]">
          <div className="mb-[1.5rem]">
            <img src={BrandingDesignPhoto} alt="" />
          </div>
          <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
            Branding Design
          </h4>
          <p className=" text-white font-nunito text-lg">Web Design</p>
        </div>
        <div className="-mt-[40.95px]">
          <div className="mb-[1.5rem]">
            <img src={DesignStrategyPhoto} alt="" />
          </div>
          <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
            Design Strategy
          </h4>
          <p className=" text-white font-nunito text-lg">Web Design</p>
        </div>
        <div className=" pt-[74.95px]">
          <div className="mb-[1.5rem]">
            <img src={DifferentThingsPhoto} alt="" />
          </div>
          <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
            Different Things
          </h4>
          <p className=" text-white font-nunito text-lg">Web Design</p>
        </div>
        <div className=" -mt-[40.95px]">
          <div className="mb-[1.5rem]">
            <img src={BuildWebsitePhoto} alt="" />
          </div>
          <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
            Build Website
          </h4>
          <p className=" text-white font-nunito text-lg">Web Design</p>
        </div>
        <div className="pt-[147px] w-[406px] cursor-pointer">
          <div>
            <img src={seeall} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
