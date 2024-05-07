import singleProjectPhoto3 from "../../assets/singleProjectPhoto3.png";
import singleProjectPhoto5 from "../../assets/singleProjectPhoto5.png";
import singleProjectPhoto6 from "../../assets/singleProjectPhoto6.png";
import sinleProjectPhoto4 from "../../assets/sinleProjectPhoto4.png";

const ProjectGallery = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[9.38rem]">
      <h2 className=" text-jaguar text-center font-syne text-[2.5rem] font-bold">
        Project <span className=" text-white bg-jaguar px-2">Gallery</span>
      </h2>
      <div className="mt-[2.19rem] grid grid-cols-3 items-stretch justify-stretch gap-5">
        <div className=" row-span-2">
          <img src={singleProjectPhoto3} alt="" />
        </div>
        <div>
          <img src={sinleProjectPhoto4} alt="" />
        </div>
        <div className=" row-span-2">
          <img src={singleProjectPhoto6} alt="" />
        </div>
        <div>
          <img src={singleProjectPhoto5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
