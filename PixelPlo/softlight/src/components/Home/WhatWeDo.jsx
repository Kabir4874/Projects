import { Link } from "react-router-dom";
import icon from "../../assets/Icon.svg";
import vector from "../../assets/Vector.svg";

const WhatWeDo = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[9.22rem]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className=" text-tarawera font-syne text-[2.5rem] font-bold">
            What{" "}
            <span className=" bg-tarawera text-white px-[0.38rem]">we do</span>
          </h2>
        </div>
        <div className="max-w-[35.0625rem]">
          <p className=" text-tarawera font-nunito text-[1.5625rem] mb-[2.06rem] relative">
            High-end digital experiences. Created at the heart of Manhattan, we
            are a should human team.
            <img
              src={vector}
              alt=""
              className=" absolute right-[4.5rem] w-[20.5rem] top-[4.5rem]"
            />
          </p>
          <p className=" text-tarawera font-nunito text-[1.5625rem] mb-[2.06rem]">
            The driving force of all speeches, we believe that creation should
            be the point around which any strategy revolves.
          </p>
          <div>
            <Link to={"/work"}>
              <button className="flex items-center justify-center gap-[0.375rem] py-[0.5625rem] px-[1.125rem] border rounded-[2.5rem] border-tarawera text-tarawera font-nunito text-[0.875rem] font-bold capitalize">
                see our process <img src={icon} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
