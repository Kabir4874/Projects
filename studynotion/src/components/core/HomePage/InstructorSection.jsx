import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";

const InstructorSection = () => {
  return (
    <div className=" mt-20">
      <div className="flex gap-20 items-center">
        <div className="w-[50%]">
          <img src={Instructor} alt="" className=" shadow-white" />
        </div>

        <div className="w-[50%] flex flex-col gap-10">
          <div className=" text-richBlack-5 font-inter text-4xl font-semibold leading-[2.75rem] tracking-[-0.045rem]">
            Become an <HighlightText text={"instructor"} />
          </div>
          <p className=" text-richBlack-300 font-inter font-medium leading-6">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
