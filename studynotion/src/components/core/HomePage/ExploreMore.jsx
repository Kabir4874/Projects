import React from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import { useState } from "react";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New To Coding",
  "Most Popular",
  "Skill Paths",
  "Career Paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentCard(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
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
    </div>
  );
};

export default ExploreMore;
