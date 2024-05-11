import { Link } from "react-router-dom";
import HeroButton from "../HeroButton";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto px-[2.7rem] mt-[5.83rem]">
      <h1 className=" text-jaguar flex flex-col items-center font-syne text-[6.25rem] font-bold">
        About Us
      </h1>
      <p className="max-w-[36.472rem] text-center mx-auto text-boulder font-nunito text-[1.5625rem] my-[1.62rem]">
        Whereby is the super simple way to connect over video. No downloads or
        long having into meeting links.
      </p>
      <Link to={"/pricing"}>
        <HeroButton text={"Join Our Team"} />
      </Link>
    </div>
  );
};

export default HeroSection;
