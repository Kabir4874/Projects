import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FeedbackCount = ({ border }) => {
  const [visible, setVisible] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };
  return (
    <div
      className={`w-[75rem] mx-auto mt-[3.4rem] pb-[8.38rem] ${
        border ? "border-b border-b-alto" : ""
      } px-[3.45rem]`}
    >
      <VisibilitySensor onChange={onVisibilityChange}>
        <div style={{ height: "10px" }}></div>
      </VisibilitySensor>
      <div className="flex items-center justify-between">
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.15rem]">
            <h4 className="text-stroke text-silver  text-[5rem] font-bold ">
              {visible && <CountUp start={0} end={13} duration={3} />}
            </h4>
            <span className="-mt-[10px] text-codGray text-[2.5rem] font-bold">
              +
            </span>
          </div>
          <p className=" text-jaguar font-syne text-[1.5625rem] font-medium -mt-[10px]">
            Years in Market
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center">
            <h4 className="text-stroke text-silver text-[5rem] font-bold ">
              {visible && <CountUp start={0} end={110} duration={3} />}
            </h4>
          </div>
          <p className=" text-jaguar text-[1.5625rem] font-medium -mt-[10px]">
            Project done
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.43rem]">
            <h4 className="text-stroke text-silver  text-[5rem] font-bold ">
              {visible && <CountUp start={0} end={99} duration={3} />}
            </h4>
            <span className=" text-codGray  text-[2.5rem] font-bold">%</span>
          </div>
          <p className=" text-jaguar  text-[1.5625rem] font-medium -mt-[10px]">
            Top Feedback
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.35rem]">
            <h4 className="text-stroke text-silver  text-[5rem] font-bold ">
              {visible && <CountUp start={0} end={100} duration={3} />}
            </h4>
            <span className="-mt-[10px] text-codGray  text-[2.5rem] font-bold">
              +
            </span>
          </div>
          <p className=" text-jaguar  text-[1.5625rem] font-medium -mt-[10px]">
            Cup of Coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCount;
