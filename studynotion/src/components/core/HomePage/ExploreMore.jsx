import React from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import { useState } from "react";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    console.log(result);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      <div className=" text-richBlack-5 font-inter text-4xl font-semibold leading-[2.75rem] tracking-[-0.045rem] text-center">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richBlack-300 font-inter font-medium leading-6 mt-3">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="flex gap-4 mb-6 border-richBlack-100 mt-5 px-2 py-4">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`${
              currentTab === element
                ? " bg-richBlack-800 text-richBlack-5 font-medium"
                : " text-richBlack-200"
            } cursor-pointer rounded-full transition-all duration-300 hover:bg-richBlack-800 hover:text-richBlack-5 px-7 py-2`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="h-[150px]"></div>

      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-10 lg:px-0 px-3">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
