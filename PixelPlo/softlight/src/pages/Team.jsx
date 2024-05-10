import NewsLetter from "../components/about/NewsLetter";
import HeroSection from "../components/team/HeroSection";
import TeamDetails from "../components/team/TeamDetails";

const Team = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <TeamDetails />
      <NewsLetter/>
    </div>
  );
};

export default Team;
