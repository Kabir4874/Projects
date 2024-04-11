import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex gap-16 items-center">
        <div className="flex flex-col gap-5">
          {timeline.map((element, index) => (
            <div key={index} className="flex gap-6">
              <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-md">
                <img src={element.Logo} alt="" />
              </div>
              <div>
                <h2 className=" text-richBlack-800 font-inter text-lg font-semibold leading-[1.625rem]">
                  {element.Heading}
                </h2>
                <p className=" text-richBlack-700 font-inter text-[0.875rem] leading-[1.375rem]">
                  {element.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative shadow-blue-200">
          <img
            src={timelineImage}
            alt="timelineImage"
            className=" object-cover h-fit"
          />
          <div className=" absolute bg-caribbeanGreen-700 flex flex-row text-white uppercase p-10 left-[50%] translate-x-[-50%] -bottom-[13%]">
            <div className="flex items-center gap-6 pr-14 border-r-2 border-caribbeanGreen-600">
              <p className=" font-inter text-4xl font-bold leading-[2.75rem] tracking-[-0.045rem]">
                10
              </p>
              <p className=" text-caribbeanGreen-300 font-inter text-sm font-medium leading-[1.375rem]">
                Years Experience
              </p>
            </div>
            <div className="flex items-center gap-6 pl-14">
              <p className=" font-inter text-4xl font-bold leading-[2.75rem] tracking-[-0.045rem]">
                250
              </p>
              <p className=" text-caribbeanGreen-300 font-inter text-sm font-medium leading-[1.375rem]">
                types of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLineSection;
