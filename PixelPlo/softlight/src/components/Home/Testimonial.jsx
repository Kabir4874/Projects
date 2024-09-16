import Stroke from "../../assets/Stroke.svg";
import quote from "../../assets/quote.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_reviews } from '../../store/reducers/homeReducer'
const Testimonial = () => {
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(2);
  const { reviews } = useSelector((state) => state.home);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    dispatch(get_reviews());
  }, []);

  return (
    <div className="w-[58.9375rem] mx-auto mt-[3.26rem]">
      <div className=" w-full relative">
        <img src={Stroke} className="w-full" />
        <div className=" absolute top-[50%] w-[50.875rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[1.62rem]">
          <div className="w-[2.370rem]">
            <img src={quote} alt="" className="w-full" />
          </div>
          <p className=" text-jaguar text-center font-nunito text-[1.5625rem]">
            {reviews[toggleState - 1]?.review}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-[45px] mt-5">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => (toggleState === 1 ? toggleTab(2) : toggleTab(1))}
        >
          <img
            src={toggleState === 1 ? reviews[1]?.image : reviews[0]?.image}
            alt=""
            className="w-[112px] h-[112px] mt-9 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={reviews[toggleState - 1]?.image}
            alt=""
            className="w-[174.67px] h-[174.67px] rounded-full"
          />
          <div className="mt-4 flex flex-col items-center justify-center">
            <h4 className=" text-jaguar font-syne text-[1.875rem] font-medium mb-[0.12rem]">
              {reviews[toggleState - 1]?.clientName}
            </h4>
            <p className=" text-jaguar font-nunito text-lg">
              {reviews[toggleState - 1]?.clientDesignation}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => (toggleState === 3 ? toggleTab(2) : toggleTab(3))}
        >
          <img
            src={toggleState === 3 ? reviews[1]?.image : reviews[2]?.image}
            alt=""
            className="w-[112px] h-[112px] mt-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
