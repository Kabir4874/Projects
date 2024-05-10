import Team1Photo from "../../assets/Team1Photo.png";
import Team2Photo from "../../assets/Team2Photo.png";
import Team3Photo from "../../assets/Team3Photo.png";
import Team4Photo from "../../assets/Team4Photo.png";
import Pattern from "../../assets/Pattern.svg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="w-full bg-jaguar pt-[150px] pb-[118.95px] mt-[88.68px]">
      <div className="w-[1483.41px] h-[676.1px] mx-auto team-bg relative flex justify-between">
        <div className=" self-end">
          <img src={Team1Photo} alt="" />
        </div>
        <div className=" self-start mt-[50px]">
          <img src={Team2Photo} alt="" />
        </div>
        <div className=" self-end -mb-[60px]">
          <img src={Team3Photo} alt="" />
        </div>
        <div className=" self-start mt-[60px]">
          <img src={Team4Photo} alt="" />
        </div>
        <h2 className=" text-center font-syne text-[23.625rem] font-bold team-text pt-[112.93px] pb-[109.18px] pl-[172.97px] pr-[112.44px] absolute z-50">
          Team
        </h2>
      </div>
      <Link to={"/team"}>
        <button className=" text-white font-nunito text-[0.875rem] font-bold flex items-center gap-[0.38rem] py-[0.5625rem] px-[1.5625rem] rounded-[2.5rem] border mx-auto mt-[163.27px]">
          Meet Our Creative Professional
          <span>
            <img src={Pattern} alt="" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Team;
