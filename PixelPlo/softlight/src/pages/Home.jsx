import Blogs from "../components/home/Blogs";
import CTA from "../components/home/Team";
import Carousel from "../components/home/Carousel";
import FeedbackCount from "../components/home/FeedbackCount";
import HeroSection from "../components/home/HeroSection";
import HighlightText from "../components/home/HighlightText";
import Partner from "../components/home/Partner";
import Projects from "../components/home/Projects";
import Revenue from "../components/home/Revenue";
import ScrollDown from "../components/home/ScrollDown";
import Testimonial from "../components/home/Testimonial";
import WhatWeDo from "../components/home/WhatWeDo";

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
      <FeedbackCount border={true}/>
      <Blogs />
      <CTA />
    </div>
  );
};

export default Home;
