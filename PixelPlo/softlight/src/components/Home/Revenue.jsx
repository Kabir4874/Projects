import BoxPattern from "../../assets/BoxPattern.svg";
import TransButton from "../../assets/TransButton.svg";
import Pattern from "../../assets/Pattern.svg";
import img from "../../assets/image 24.png";

const Revenue = () => {
  return (
    <div className="w-[75rem] mx-auto pt-[8.63rem]">
      <h2 className=" text-white text-center font-syne text-[2.5rem] font-bold w-[46.875rem] mx-auto mb-[5.56rem]">
        Unlock Revenue Growth for{" "}
        <span className=" bg-white text-jaguar px-2">Your</span>{" "}
        <span className=" bg-white text-jaguar px-2">Business</span>
      </h2>
      <div className="grid grid-cols-3 items-center gap-7">
        <div>
          <h3 className=" text-white font-syne text-[1.875rem] font-medium mb-[1.88rem]">
            Strategy
          </h3>
          <div className="mb-[2.38rem]">
            <img src={BoxPattern} alt="" />
          </div>
          <p className=" text-white font-nunito text-xl mb-[2.06rem]">
            High-end digital experiences. Created the heart Manhattan, we are a
            should human team driving force.
          </p>
          <button>
            <img src={TransButton} alt="" />
          </button>
        </div>

        <div>
          <h3 className=" text-white font-syne text-[1.875rem] font-medium mb-[1.88rem]">
            Strategy
          </h3>
          <div className="mb-[2.38rem]">
            <img src={img} alt="" />
          </div>
          <p className=" text-white font-nunito text-xl mb-[2.06rem]">
            High-end digital experiences. Created the heart Manhattan, we are a
            should human team driving force.
          </p>
          <button>
            <img src={Pattern} alt="" className="w-[3.5388rem]"/>
          </button>
        </div>

        <div>
          <h3 className=" text-white font-syne text-[1.875rem] font-medium mb-[1.88rem]">
            Strategy
          </h3>
          <div className="mb-[2.38rem]">
            <img src={BoxPattern} alt="" />
          </div>
          <p className=" text-white font-nunito text-xl mb-[2.06rem]">
            High-end digital experiences. Created the heart Manhattan, we are a
            should human team driving force.
          </p>
          <button>
            <img src={TransButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
