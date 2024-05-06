import CoreValues from "../components/about/CoreValues";
import HeroSection from "../components/about/HeroSection";
import WhyPortLight from "../components/about/WhyPortLight";
import FeedbackCount from "../components/Home/FeedbackCount";
import Partner from "../components/Home/Partner";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <Partner />
      <WhyPortLight />
      <FeedbackCount border={false}/>
      <CoreValues/>
    </div>
  );
};

export default About;
