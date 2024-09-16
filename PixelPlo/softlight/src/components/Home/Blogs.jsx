import { Link } from "react-router-dom";
import moment from "moment";
import rightArrow from "../../assets/rightArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_blogs } from "../../store/reducers/blogReducer";
const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(get_blogs());
  }, []);
  return (
    <div className="w-[75rem] mx-auto mt-36">
      <div>
        <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          Latest News &{" "}
          <span className=" bg-tarawera text-white px-[0.38rem]">Blogs</span>
        </h2>
      </div>
      <div className="w-[49.625rem] mx-auto  flex flex-col gap-[4.0625rem] mt-[8.51rem]">
        {blogs?.map((blog, index) => (
          <Link key={index} to={`/blog/${blog._id}`}>
            <div className="relative group">
              <div className=" absolute w-[27.239rem] h-[33.382rem] -right-[12rem] -top-[8rem] invisible group-hover:visible z-50">
                <img
                  src={blog.image}
                  alt=""
                  className="w-[70%] h-[70%] -rotate-[20deg]"
                />
              </div>
              <div className="flex items-center gap-[1.75rem] mb-8">
                <p className=" text-black font-nunito text-xl">
                  Posted on December {moment(blog.createdAt).format("DD,YYYY")}{" "}
                  Business
                </p>
                <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
              </div>
              <h3 className=" text-boulder group-hover:text-jaguar transition-all duration-200 font-syne text-[1.875rem] font-medium w-[34.661rem]">
                {blog.blogTitle}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/news"}>
        <button className="flex items-center gap-[0.38rem] text-jaguar text-lg font-bold mx-auto mt-[5.62rem] group">
          See All News
          <span className="mt-[2px] group-hover:translate-x-2 transition-all duration-300">
            <img src={rightArrow} alt="" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Blogs;
