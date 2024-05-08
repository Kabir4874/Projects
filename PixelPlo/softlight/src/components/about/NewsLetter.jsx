import right from "../../assets/Pattern.svg";
const NewsLetter = () => {
  return (
    <div className=" w-full bg-jaguar py-[9.69rem] mt-[8.45rem]">
      <div className="w-[49.375rem] mx-auto">
        <h2 className=" text-white text-center font-syne text-[2.5rem] font-bold">
          Never Miss a Single{" "}
          <span className=" bg-white text-jaguar px-2">News</span>
        </h2>
        <p className=" text-white text-center font-nunito text-[1.375rem] mb-[3.12rem] mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et uis nostrud exercitation ullamco
          laboris nisi.
        </p>
        <div className="flex items-center gap-[1.88rem] w-[32.4rem] mx-auto">
          <input
            type="email"
            placeholder="enter your e-mail address..."
            className="w-[21.875rem] py-4 px-4 rounded-[2.5rem] border border-alto3 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-[0.875rem]"
          />
          <button className=" capitalize py-[0.56rem] px-[1.12rem] border border-white flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-jaguar text-white font-nunito text-[0.875rem] font-bold">
            Subscribe <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
