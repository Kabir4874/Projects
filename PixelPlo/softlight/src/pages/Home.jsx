import Blogs from "../components/Home/Blogs";
import CTA from "../components/Home/Team";
import Carousel from "../components/Home/Carousel";
import FeedbackCount from "../components/Home/FeedbackCount";
import HeroSection from "../components/Home/HeroSection";
import HighlightText from "../components/Home/HighlightText";
import Partner from "../components/Home/Partner";
import Projects from "../components/Home/Projects";
import Revenue from "../components/Home/Revenue";
import ScrollDown from "../components/Home/ScrollDown";
import Testimonial from "../components/Home/Testimonial";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <Carousel />
      <ScrollDown />
      <WhatWeDo />
      <Partner />
      <div className="w-full bg-black mt-20">
        <Revenue />
        <HighlightText />
        <Projects />
      </div>
      <Testimonial />
      <FeedbackCount />
      <Blogs />
      <CTA />
    </div>
  );
};

export default Home;
