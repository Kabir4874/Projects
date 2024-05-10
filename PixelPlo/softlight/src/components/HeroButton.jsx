import right from "../assets/Pattern.svg";

const HeroButton = ({ text }) => {
  return (
    <div className=" w-fit mx-auto">
      <button className=" capitalize py-[0.625rem] px-3 flex items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-jaguar text-white font-nunito text-[0.875rem] font-bold">
        {text} <img src={right} alt="" />
      </button>
    </div>
  );
};

export default HeroButton;
