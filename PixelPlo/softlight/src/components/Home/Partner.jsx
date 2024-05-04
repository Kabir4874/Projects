import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/5.svg";

const Partner = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[9.14rem]">
      <h2 className=" text-jaguar text-center font-syne text-xl font-bold tracking-[0.70625rem]">
        WE PARTNER WITH FORWARD
      </h2>
      <div className="flex items-center mt-[3.38rem] gap-[5.5rem]">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
