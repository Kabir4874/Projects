import WhyportlightPhoto from "../../assets/WhyportlightPhoto.png";
import border from "../../assets/border.svg";

const WhyPortLight = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[7.31rem] mb-[3.8rem]">
      <div className="flex items-stretch justify-between">
        <div className="w-[30.5rem]">
          <div className="mb-[3.12rem]">
            <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold mb-[0.94rem]">
              Why <span className=" text-white bg-jaguar px-2">Portlight</span>
            </h2>
            <p className="text-black font-nunito text-[1.5625rem]">
              Lorem ipsum dolor sit amet ut sem adipiscing elit. Suspendisse
              varius enim in tristique.
            </p>
          </div>
          <div>
            <img src={WhyportlightPhoto} alt="" />
          </div>
        </div>
        <div className="w-[30.5rem] flex flex-col gap-[1.88rem]">
          <div className="py-[1.6875rem] px-[1.875rem] rounded-lg bg-jaguar text-white">
            <h4 className=" text-3xl font-syne font-medium mb-[0.94rem]">
              Who We Are
            </h4>
            <p className=" font-nunito text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla.
            </p>
          </div>

          <div className="relative py-[1.6875rem] px-[1.875rem] rounded-lg">
            <img src={border} alt="" className="absolute bottom-0 left-0" />
            <h4 className=" text-3xl font-syne font-medium mb-[0.94rem]">
              What We Do
            </h4>
            <p className=" font-nunito text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla.
            </p>
          </div>

          <div className="relative py-[1.6875rem] px-[1.875rem] rounded-lg">
            <img src={border} alt="" className="absolute bottom-0 left-0" />
            <h4 className=" text-3xl font-syne font-medium mb-[0.94rem]">
              Making Amazing Stuff
            </h4>
            <p className=" font-nunito text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPortLight;
