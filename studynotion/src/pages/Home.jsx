import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import Button from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

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

        {/* Code Section 2  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
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

        <ExploreMore />
      </div>

      {/* Section 2  */}
      <div className=" bg-pureGreys-5 text-richBlack-700">
        <div className="homepage_bg h-[310px]">
          <div className=" w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex gap-7 text-white">
              <Button active={true} linkTo={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </Button>

              <Button active={false} linkTo={"/signup"}>
                <div>Learn More</div>
              </Button>
            </div>
          </div>
        </div>

        <div className=" mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex gap-5 items-start mt-20">
            <div className=" text-richBlack-900 font-inter text-4xl font-semibold leading-[2.75rem] tracking-[-0.045rem]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>

            <div className="flex flex-col gap-10 items-start">
              <p className=" text-richBlack-700 font-inter font-medium leading-6">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <Button active={false} linkTo={"/signup"}>
                Learn More
              </Button>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richBlack-900">
        <InstructorSection />
        <h2 className="text-richBlack-5 text-center text-4xl font-semibold mt-10">
          Reviews from other learners
        </h2>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
