import right from "../../assets/Pattern.svg";
import DesignStrategyPhoto from "../../assets/DesignStrategyPhoto.png";
import BuildWebsitePhoto from "../../assets/BuildWebsitePhoto.png";
import project2 from "../../assets/project2.png";
const MoreProject = () => {
  return (
    <div className="w-full bg-jaguar mt-[9.35rem] py-[9.38rem]">
      <div className="w-[75rem] mx-auto flex flex-col gap-[3.06rem]">
        <div className="flex items-center justify-between mb-[3.06rem]">
          <h2 className="text-white font-syne text-[2.5rem] font-bold">
            More <span className=" text-jaguar bg-white px-2">Projects</span>
          </h2>
          <button className=" capitalize py-[0.56rem] px-[1.12rem] border border-white flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-jaguar text-white font-nunito text-[0.875rem] font-bold">
            Brows All Projects <img src={right} alt="" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-[1.19rem]">
          <div className="-mt-[40.95px]">
            <div className="mb-[1.5rem]">
              <img src={DesignStrategyPhoto} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Design Strategy
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
          <div className=" -mt-[40.95px]">
            <div className="mb-[1.5rem]">
              <img src={project2} alt="" />
            </div>
            <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              Build Website
            </h4>
            <p className=" text-white font-nunito text-lg">Web Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProject;
