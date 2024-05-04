import Photo1 from "../../assets/Photo1.png";
import Photo2 from "../../assets/Photo2.png";
import Photo3 from "../../assets/Photo3.png";
import Photo4 from "../../assets/Photo4.png";
import Photo5 from "../../assets/Photo5.png";
import Photo6 from "../../assets/Photo6.png";
import upperPattern from "../../assets/upperpattern.svg";
import downPattern from "../../assets/downpattern.svg";

const Carousel = () => {
  return (
    <div className="w-full relative mt-[0.38rem] overflow-y-hidden">
      <div className=" absolute -top-1">
        <img src={upperPattern} alt="" />
      </div>
      <div className="grid grid-cols-6 items-center gap-5">
        <img src={Photo1} alt="" />
        <img src={Photo2} alt="" />
        <img src={Photo3} alt="" />
        <img src={Photo4} alt="" />
        <img src={Photo5} alt="" />
        <img src={Photo6} alt="" />
      </div>
      <div className=" absolute -bottom-1">
        <img src={downPattern} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
