import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import Button from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

const Home = () => {
  return (
    <div>
      {/* Section 1  */}
      <div className=" relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to="/signup">
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richBlack-800 font-bold text-richBlack-200 transition-all duration-300  hover:scale-95 w-fit">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-300 group-hover:bg-richBlack-900">
              <p>Become and Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className=" mt-10 text-richBlack-5 font-inter text-4xl font-semibold leading-[2.75rem] tracking-[-0.045rem]">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-[90%] lg:w-[55%] mt-4 text-richBlack-300 text-center font-inter font-medium leading-6">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-6 mt-8">
          <Button active={true} linkTo={"/signup"}>
            Learn More
          </Button>

          <Button active={false} linkTo={"/login"}>
            Book a Demo
          </Button>
        </div>

        <div className=" shadow-blue-200 mx-3 my-14">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            btn1={{
              btnText: "Try it Yourself",
              linkTo: "/signup",
              active: true,
            }}
            btn2={{
              btnText: "Learn More",
              linkTo: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html>\n<html>\n<head><title>Example<title><linkrel="stylesheet"href="styles.css">\n</head>\n`}
            codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      {/* Section 2  */}

      {/* Section 3  */}

      {/* Footer  */}
    </div>
  );
};

export default Home;
