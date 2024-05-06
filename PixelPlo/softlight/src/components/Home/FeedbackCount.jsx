const FeedbackCount = ({ border }) => {
  return (
    <div
      className={`w-[75rem] mx-auto mt-[3.4rem] pb-[8.38rem] ${
        border ? "border-b border-b-alto" : ""
      } px-[3.45rem]`}
    >
      <div className="flex items-center justify-between">
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.15rem]">
            <h4 className="text-stroke text-silver font-syne text-[5rem] font-bold ">
              13
            </h4>
            <span className="-mt-[10px] text-codGray font-syne text-[2.5rem] font-bold">
              +
            </span>
          </div>
          <p className=" text-jaguar font-syne text-[1.5625rem] font-medium -mt-[10px]">
            Years in Market
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center">
            <h4 className="text-stroke text-silver font-syne text-[5rem] font-bold ">
              110
            </h4>
          </div>
          <p className=" text-jaguar font-syne text-[1.5625rem] font-medium -mt-[10px]">
            Project done
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.43rem]">
            <h4 className="text-stroke text-silver font-syne text-[5rem] font-bold ">
              99
            </h4>
            <span className=" text-codGray font-syne text-[2.5rem] font-bold">
              %
            </span>
          </div>
          <p className=" text-jaguar font-syne text-[1.5625rem] font-medium -mt-[10px]">
            Top Feedback
          </p>
        </div>
        <div className=" text-center">
          <div className="flex items-center justify-center gap-[0.35rem]">
            <h4 className="text-stroke text-silver font-syne text-[5rem] font-bold ">
              100
            </h4>
            <span className="-mt-[10px] text-codGray font-syne text-[2.5rem] font-bold">
              +
            </span>
          </div>
          <p className=" text-jaguar font-syne text-[1.5625rem] font-medium -mt-[10px]">
            Cup of Coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCount;
