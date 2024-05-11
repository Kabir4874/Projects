import Comments from "../components/Comments";
import NewsLetter from "../components/about/NewsLetter";
import HeroSection from "../components/teamSingle/HeroSection";

const TeamSingle = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <Comments heading={"Contact Me"} tik={false} />
      <NewsLetter/>
    </div>
  );
};

export default TeamSingle;
