
import right from "../../assets/Pattern.svg";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto px-[2.7rem] mt-[5.83rem]">
    <h1 className=" text-jaguar flex flex-col items-center font-syne text-[6.25rem] font-bold">
    About Us
    </h1>
    <p className="max-w-[36.472rem] text-center mx-auto text-boulder font-nunito text-[1.5625rem] my-[1.62rem]">
    Whereby is the super simple way to connect over video. No downloads or long having into meeting links.
    </p>
    <div className=" w-fit mx-auto">
      <button className=" capitalize py-[0.625rem] px-3 flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-jaguar text-white font-nunito text-[0.875rem] font-bold">
        Join Our Team <img src={right} alt="" />
      </button>
    </div>
  </div>
  )
}

export default HeroSection