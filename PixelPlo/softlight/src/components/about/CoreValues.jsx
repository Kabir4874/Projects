import value1 from "../../assets/value1.svg";
import value2 from "../../assets/value2.svg";
import value3 from "../../assets/value3.svg";
import value4 from "../../assets/value4.svg";
import value5 from "../../assets/value5.svg";
import value6 from "../../assets/value6.svg";
const CoreValues = () => {
  return (
    <div className="w-full bg-jaguar">
      <div className="w-[75rem] mx-auto py-[8.06rem]">
        <h2 className=" mb-[5.88rem] text-white text-center text-[2.5rem] font-bold w-[573px] mx-auto">
          The Core Values that drive{" "}
          <span className=" bg-white text-jaguar px-2">Everything</span> we do
        </h2>
        <div className="grid grid-cols-3 items-center gap-[3.44rem]">
          <div className="w-[22.6875rem]">
            <img src={value1} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Creativity
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
          <div className="w-[22.6875rem]">
            <img src={value2} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Teamwork
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
          <div className="w-[22.6875rem]">
            <img src={value3} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Innovation
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
          <div className="w-[22.6875rem]">
            <img src={value4} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Quality
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
          <div className="w-[22.6875rem]">
            <img src={value5} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Simplicity
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
          <div className="w-[22.6875rem]">
            <img src={value6} alt="" className="mb-[2.5rem]" />
            <h6 className=" text-white font-syne text-3xl font-bold mb-5">
              Integrity
            </h6>
            <p className="text-white font-nunito text-xl">
              High-end digital experiences. Created the heart Manhattan, we are
              a should human team driving force.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
