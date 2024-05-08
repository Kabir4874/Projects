import NewsLetter from "../components/about/NewsLetter";
import BlogDetails from "../components/singleBlog/BlogDetails";
import Comments from "../components/singleBlog/Comments";
import HeroSection from "../components/singleBlog/HeroSection";

const SingleBlog = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BlogDetails />
      <Comments />
      <NewsLetter />
    </div>
  );
};

export default SingleBlog;
