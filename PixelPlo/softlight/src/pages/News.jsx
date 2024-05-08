import NewsLetter from "../components/about/NewsLetter";
import HeroSection from "../components/blogs/HeroSection";
import LatestBlogs from "../components/blogs/LatestBlogs";

const News = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <LatestBlogs />
      <NewsLetter/>
    </div>
  );
};

export default News;
