import singleblog1Photo from "../../assets/singleblog1Photo.png";
import singleblog2Photo from "../../assets/singleblog2Photo.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import singleblogborderDetails from "../../assets/singleblogborderDetails.svg";
import moment from "moment";

const HeroSection = ({ blog }) => {
  return (
    <div className="w-[75rem] mx-auto mt-[5.83rem]">
      <div className="w-full">
        <div className="flex items-center gap-5 mt-[1.88rem]">
          <p className=" text-black font-nunito text-xl">
            Posted on {moment(blog.createdAt).format("MMMM DD,YYYY")} Business
          </p>
          <div className="w-[50.79rem] h-[1px] bg-jaguar" />
        </div>
        <h2 className=" font-syne text-jaguar font-medium text-[3.75rem] mt-8">
          {blog.blogTitle}
        </h2>
        <img src={blog.image} alt="" className="mt-[3.12rem]" />
        <div className="flex justify-between items-center relative py-[2.12rem] px-[6.44rem]">
          <div className="flex items-center gap-5">
            <div className="w-[112px]">
              <img
                src={singleblog2Photo}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div>
              <p className=" text-jaguar font-syne text-[1.5625rem] font-medium">
                Eddie Hirthe
              </p>
              <p className=" text-jaguar font-nunito text-sm mt-[0.31rem]">
                Client of Agency
              </p>
            </div>
          </div>
          <div>
            <p className=" text-jaguar font-syne text-[1.5625rem] font-medium">
              Client of Agency
            </p>
            <div className="flex items-center gap-10 mt-5">
              <img src={insta} alt="" className="w-[2.113rem] cursor-pointer" />
              <img src={fb} alt="" className="w-[2.113rem] cursor-pointer" />
              <img
                src={twitter}
                alt=""
                className="w-[2.113rem] cursor-pointer"
              />
              <img
                src={linkedin}
                alt=""
                className="w-[2.113rem] cursor-pointer"
              />
            </div>
          </div>
          <img
            src={singleblogborderDetails}
            alt=""
            className=" left-0 absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
