import NewsLetter from "../components/about/NewsLetter";
import BlogDetails from "../components/singleBlog/BlogDetails";
import Comments from "../components/Comments";
import HeroSection from "../components/singleBlog/HeroSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_blog } from "../store/reducers/blogReducer";
const SingleBlog = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(get_blog(blogId));
  }, [blogId]);
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection blog={blog} />
      {blog?.content && <BlogDetails content={blog.content} />}

      <Comments heading={"Leave A Comments"} tik={true} />
      <NewsLetter />
    </div>
  );
};

export default SingleBlog;
