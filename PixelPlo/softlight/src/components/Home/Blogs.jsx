const Blogs = () => {
  return (
    <div className="w-[75rem] mx-auto mt-36">
      <div>
        <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          Latest News &{" "}
          <span className=" bg-jaguar text-white px-[0.38rem]">Blogs</span>
        </h2>
      </div>
      <div className="w-[49.625rem] mx-auto relative flex flex-col gap-[4.0625rem] mt-[8.51rem]">
        <div>
          <div className="flex items-center gap-[1.75rem] mb-8">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
          </div>
          <h3 className=" text-jaguar font-syne text-[1.875rem] font-medium w-[34.661rem]">
            How To Keep The Motivation Up When There Is No Client Work
          </h3>
        </div>
        <div>
          <div className="flex items-center gap-[1.75rem] mb-8">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
          </div>
          <h3 className=" text-boulder font-syne text-[1.875rem] font-medium w-[34.661rem]">
            JavaScript Algorithms And Data Structures Management
          </h3>
        </div>
        <div>
          <div className="flex items-center gap-[1.75rem] mb-8">
            <p className=" text-black font-nunito text-xl">
              Posted on December 31, 2021 Business
            </p>
            <div className="w-[25.4375rem] h-[1px] bg-jaguar mt-[3px]"></div>
          </div>
          <h3 className=" text-boulder font-syne text-[1.875rem] font-medium w-[34.661rem]">
            Winning Desing Tips And Strategies For App UI/UX Developers
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
