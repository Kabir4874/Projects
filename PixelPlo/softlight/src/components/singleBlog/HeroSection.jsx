import singleblog1Photo from "../../assets/singleblog1Photo.png";
import singleblog2Photo from "../../assets/singleblog2Photo.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import singleblogborderDetails from "../../assets/singleblogborderDetails.svg";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[5.83rem]">
      <div className="w-full">
        <div className="flex items-center gap-5 mt-[1.88rem]">
          <p className=" text-black font-nunito text-xl">
            Posted on December 31, 2021 Business
          </p>
          <div className="w-[50.79rem] h-[1px] bg-jaguar" />
        </div>
        <h2 className=" font-syne text-jaguar font-medium text-[3.75rem] mt-8">
          How To Keep The Motivation Up When There Is No Client Work
        </h2>
        <img src={singleblog1Photo} alt="" className="mt-[3.12rem]" />
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
        <p className="w-[49.25rem] mx-auto text-boulder font-nunito text-xl mt-[3.12rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
          ridiculus viverra nisi, eget egestas. Sed aliquet eu in risus elit
          morbi at lectus et enim aiondimentum volutpat feugiat gravida tortor,
          bibendum in. Vitae pharetra eu aliquet ut lorem.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
