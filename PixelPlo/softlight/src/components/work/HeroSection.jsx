import workPattern from "../../assets/workPattern.svg";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto px-[2.7rem] mt-[5.83rem]">
      <h1 className=" text-jaguar flex flex-col items-center font-syne text-[6.25rem] font-bold">
        Our Work
      </h1>
      <p className="max-w-[41.41rem] text-center mx-auto text-boulder font-nunito text-[1.5625rem] my-[1rem]">
        Whereby is the super simple way to connect over video. No downloads or
        long having into meeting links.
      </p>
      <img src={workPattern} alt="" className="w-full mt-[10.25rem]" />
    </div>
  );
};

export default HeroSection;
