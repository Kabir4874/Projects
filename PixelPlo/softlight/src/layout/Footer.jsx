import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo Pixelplow-02 1.png";
import insta from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import right from "../assets/Pattern.svg";

const Footer = () => {
  return (
    <div className=" w-full footer-bg mt-[4.33rem] pt-[8.84rem]">
      <div className="w-[75rem] mx-auto ">
        <div>
          <p className=" mb-[1.12rem] text-jaguar text-center font-syne text-xl font-bold">
            {" "}
            Let’s start together.
          </p>
          <div className=" w-fit mx-auto">
            <Link to={"/contact"}>
              <button className=" capitalize py-[0.625rem] px-3 flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-tarawera text-white font-nunito text-[0.875rem] font-bold">
                say hello <img src={right} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" border-y pt-[1.25rem] pb-12 border-alto2 mt-[2.88rem] bg-white flex items-start">
          <div className="mr-[13.19rem]">
            <img src={logo} alt="" />
          </div>
          <div className="mr-[6.25rem]">
            <p className=" text-jaguar font-syne text-[1.5625rem] font-bold mb-[1.56rem]">
              Pages
            </p>
            <ul className=" text-jaguar font-syne text-xl font-medium leading-[2.056rem]">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/work"}>Work</NavLink>
              </li>
              <li>
                <NavLink to={"/pricing"}>Pricing</NavLink>
              </li>
            </ul>
          </div>
          <div className="mr-[6.25rem]">
            <p className=" text-jaguar font-syne text-[1.5625rem] font-bold mb-[1.56rem]">
              Contact
            </p>
            <p className=" text-jaguar font-syne text-xl font-medium leading-[2.056rem] w-[14.899rem]">
              741 New South Head Rd, Triple Bay SWFW 3148, New York
            </p>
          </div>
          <div>
            <p className=" text-jaguar font-syne text-[1.5625rem] font-bold mb-[1.94rem]">
              Newsletter
            </p>
            <div className="mb-[1.94rem] flex items-center gap-[0.44rem]">
              <input
                type="email"
                placeholder="enter your mail..."
                className="py-4 px-4 rounded-[2.5rem] border border-alto3 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-[0.875rem]"
              />
              <button className="py-4 px-[1.25rem] rounded-[2.5rem] bg-jaguar text-white font-nunito text-[0.875rem] font-bold">
                Submit
              </button>
            </div>
            <div className="flex items-center gap-[1.38rem]">
              <img src={insta} alt="" className=" cursor-pointer" />
              <img src={fb} alt="" className=" cursor-pointer" />
              <img src={twitter} alt="" className=" cursor-pointer" />
              <img src={linkedin} alt="" className=" cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="mt-[1.25rem] text-jaguar font-syne text-xl font-medium leading-[2.056rem] text-center">
          Copyright © Portlight | Designed by{" "}
          <span className=" leading-[164.5%] underline">VictorFlow</span> -
          Powered by{" "}
          <span className=" leading-[164.5%] underline">Webflow</span>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
