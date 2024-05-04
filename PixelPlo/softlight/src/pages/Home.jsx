import Carousel from "../components/Home/Carousel";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <Carousel />
    </div>
  );
};

export default Home;
