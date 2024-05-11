import NewsLetter from "../components/about/NewsLetter";
import BlogDetails from "../components/singleBlog/BlogDetails";
import Comments from "../components/Comments";
import HeroSection from "../components/singleBlog/HeroSection";

const SingleBlog = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BlogDetails />
      <Comments heading={"Leave A Comments"} tik={true} />
      <NewsLetter />
    </div>
  );
};

export default SingleBlog;
