import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import Button from "./Button";

const LearningLanguageSection = () => {
  return (
    <div className=" mt-24">
      <div className="flex flex-col gap-6 items-center">
        <div className=" text-richBlack-900 font-inter text-4xl font-semibold leading-[2.75rem] tracking-[-0.045rem]">
          Your swiss knife for <HighlightText text={"learning any language"} />
        </div>
        <p className=" text-richBlack-700 font-inter font-medium leading-6 text-center max-w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>

        <div className="flex items-center justify-center mt-8">
          <img
            src={know_your_progress}
            alt="know_your_progress"
            className=" object-contain"
          />
          <img
            src={compare_with_others}
            alt="compare_with_others"
            className=" object-contain"
          />
          <img
            src={plan_your_lesson}
            alt="plan_your_lesson"
            className=" object-contain"
          />
        </div>
        <div>
          <Button active={true} linkTo={"/signup"}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
