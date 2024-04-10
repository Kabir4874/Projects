import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  btn1,
  btn2,
  codeBlock,
  bgGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} my-20 justify-between items-center gap-10`}
    >
      {/* Section 1  */}
      <div className="w-[50%] flex flex-col gap-8">
        {heading}
        <div className=" text-richBlack-300 font-bold">{subHeading}</div>
        <div className="flex gap-7 mt-7">
          <Button active={btn1.active} linkTo={btn1.linkTo}>
            <div className="flex gap-2 items-center">
              {btn1.btnText}
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
