import NewsLetter from "../components/about/NewsLetter";
import BlogDetails from "../components/singleBlog/BlogDetails";
import HeroSection from "../components/singleBlog/HeroSection";

const SingleBlog = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BlogDetails />
      <NewsLetter/>
    </div>
  );
};

export default SingleBlog;
