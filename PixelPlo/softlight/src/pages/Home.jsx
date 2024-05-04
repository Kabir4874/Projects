import Carousel from "../components/Home/Carousel";
import HeroSection from "../components/Home/HeroSection";
import Partner from "../components/Home/Partner";
import Revenue from "../components/Home/Revenue";
import ScrollDown from "../components/Home/ScrollDown";
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
      </div>
    </div>
  );
};

export default Home;
