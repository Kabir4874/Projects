import HeroButton from "../HeroButton";
import Star from "../../assets/Star 4.svg";

const Enterprise = () => {
  return (
    <div className="w-[1012px] mx-auto mt-[1.88rem]">
      <div className="w-full py-[1.94rem] pl-[3.75rem] pr-[4.75rem] flex items-center bg-jaguar rounded-[0.625rem] border-2 border-jaguar">
        <div className="py-[1.56rem] text-white pr-[5.06rem] relative">
          <h4 className=" font-syne text-3xl font-semibold text-nowrap">
            For your enterprise
          </h4>
          <ul className=" mt-5 flex flex-col items-start gap-[1.58rem]">
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" className="svg" />
              <p className=" font-nunito text-xl">Visual Design</p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" className="svg" />
              <p className=" font-nunito text-xl">Graphic Design</p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" className="svg" />
              <p className=" font-nunito text-xl">Branding</p>
            </li>
          </ul>
          <div className="w-[1px] h-[14.856rem] pricing-line absolute top-0 bottom-0 right-0"></div>
        </div>
        <div className="py-[0.56rem] pl-[5.06rem]">
          <div className="pricing-bg py-[1.19rem] px-[6.19rem] text-center">
            <p className=" font-nunito text-[3.125rem] text-jaguar font-bold">
              $199<span className=" text-3xl font-medium">/Month</span>
            </p>
            <p className="mt-[0.62rem] text-jaguar font-syne text-xl font-medium text-nowrap">Space editor web design</p>
            <div className="mt-[1.88rem]">
            <HeroButton text={"Subscribe Now"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
