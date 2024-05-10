import CoreValues from "../components/about/CoreValues";
import Faq from "../components/about/Faq";
import HeroSection from "../components/about/HeroSection";
import NewsLetter from "../components/about/NewsLetter";
import WhyPortLight from "../components/about/WhyPortLight";
import FeedbackCount from "../components/home/FeedbackCount";
import Partner from "../components/home/Partner";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <HeroSection />
      <Partner />
      <WhyPortLight />
      <FeedbackCount border={false} />
      <CoreValues />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default About;
