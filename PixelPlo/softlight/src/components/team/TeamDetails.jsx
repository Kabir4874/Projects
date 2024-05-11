import Team1Photo from "../../assets/Team1Photo.png";
import Team2Photo from "../../assets/Team2Photo.png";
import Team3Photo from "../../assets/Team3Photo.png";
import Team4Photo from "../../assets/Team4Photo.png";
import team5Photo from "../../assets/team5Photo.png";
import team6 from "../../assets/team6.png";
import HeroButton from "../HeroButton";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

const TeamDetails = () => {
  return (
    <div className="mt-[6.41rem] w-[62.2593rem] mx-auto">
      <div className="grid grid-cols-3 gap-x-[3.19rem] gap-y-[3.75rem] items-stretch">
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={Team1Photo} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              David James
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={Team2Photo} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              Jake Gibson
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={Team4Photo} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              Maria Wilson
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={team5Photo} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              Emma Buckland
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={Team3Photo} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              Steven Hill
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
        <Link to={"/team/1"}>
          <div className="relative group cursor-pointer">
            <img src={team6} alt="" className="w-full" />
            <div className="flex items-center justify-between py-4 px-[2.375rem] bg-jaguar absolute bottom-[5.4rem] left-0 right-0 transition-all duration-300 ease-in-out  invisible group-hover:visible opacity-0 group-hover:opacity-100">
              <img src={insta} alt="" className="svg cursor-pointer" />
              <img src={fb} alt="" className="svg cursor-pointer" />
              <img src={twitter} alt="" className="svg cursor-pointer" />
              <img src={linkedin} alt="" className="svg cursor-pointer" />
            </div>
            <p className="mt-[1.29rem] font-syne text-jaguar text-[1.375rem] font-medium text-center">
              Max Oliver
            </p>
            <p className="mt-[0.31rem] text-boulder text-center font-nunito text-lg">
              Web App
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-[3.74rem]">
        <HeroButton text={"Join Our Team"} />
      </div>
    </div>
  );
};

export default TeamDetails;
