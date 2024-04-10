import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

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

          <Button active={btn2.active} linkTo={btn2.linkTo}>
            {btn2.btnText}
          </Button>
        </div>
      </div>

      {/* Section 2  */}
      <div className="flex items-start h-fit w-[50%]">
        <div className="text-center flex flex-col w-[10%] text-richBlack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeBlock, 5000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
