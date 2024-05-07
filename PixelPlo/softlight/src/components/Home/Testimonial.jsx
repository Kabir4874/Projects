import Stroke from "../../assets/Stroke.svg";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import quote from "../../assets/quote.svg";
import { useState } from "react";
import { testimonialData } from "../../data/homeData";

const Testimonial = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="w-[58.9375rem] mx-auto mt-[3.26rem]">
      <div className=" w-full relative">
        <img src={Stroke} className="w-full" />
        <div className=" absolute top-[50%] w-[50.875rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[1.62rem]">
          <div className="w-[2.370rem]">
            <img src={quote} alt="" className="w-full" />
          </div>
          <p className=" text-jaguar text-center font-nunito text-[1.5625rem]">
            {testimonialData[toggleState - 1].text}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-[45px] mt-5">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => (toggleState === 1 ? toggleTab(2) : toggleTab(1))}
        >
          <img
            src={toggleState === 1 ? test2 : test1}
            alt=""
            className="w-[112px] mt-9"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={testimonialData[toggleState - 1].image}
            alt=""
            className="w-[174.67px]"
          />
          <div className="mt-4 flex flex-col items-center justify-center">
            <h4 className=" text-jaguar font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              {testimonialData[toggleState - 1].name}
            </h4>
            <p className=" text-jaguar font-nunito text-lg">
              {testimonialData[toggleState - 1].designation}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => (toggleState === 3 ? toggleTab(2) : toggleTab(3))}
        >
          <img
            src={toggleState === 3 ? test2 : test3}
            alt=""
            className="w-[112px] mt-9"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
