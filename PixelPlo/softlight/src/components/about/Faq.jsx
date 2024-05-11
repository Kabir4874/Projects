import { useState } from "react";
import { faq } from "../../data/aboutData";
import cross_icon from "../../assets/cross_icon.svg";
import plus_icon from "../../assets/plus_icon.svg";
import faq_border from "../../assets/faq_border.svg";

const Faq = () => {
  const [Faq, setFaq] = useState(null);
  function toggle(i) {
    if (Faq === i) {
      return setFaq(null);
    }
    setFaq(i);
  }
  return (
    <div className="w-[62.25rem] mx-auto mt-[8.43rem]">
      <h2 className=" text-jaguar text-center font-syne text-[2.5rem] font-bold w-[53.5625rem] mx-auto mb-[4.38rem]">
        Find the Answers on Frequently Asked{" "}
        <span className="text-white bg-jaguar px-2">Questions</span>
      </h2>
      <div className=" flex flex-col items-start gap-[1.88rem] self-stretch">
        {faq.map((item, i) => {
          return (
            <div
              key={item.id}
              className={`relative flex px-[2.25rem] py-[1.9rem] flex-col items-start  self-stretch rounded-[0.5rem]  gap-5 ${
                Faq !== i ? "bg-white" : " bg-jaguar"
              }`}
            >
              <img
                src={faq_border}
                alt=""
                className=" absolute top-0 left-0 -z-100 cursor-pointer"
                onClick={() => toggle(i)}
              />
              <div
                className=" flex items-center self-stretch gap-7 justify-between  cursor-pointer"
                onClick={() => toggle(i)}
              >
                <p
                  className={`${
                    Faq !== i ? " text-jaguar" : "text-white"
                  } font-syne text-3xl font-semibold`}
                >
                  {item.qus}
                </p>
                <button>
                  <img src={`${Faq !== i ? plus_icon : cross_icon}`} />
                </button>
              </div>
              <div
                className={` w-full ${
                  Faq === i ? "visible" : "hidden"
                } pt-[1.12rem]`}
              >
                <p
                  className={`${
                    Faq !== i ? " text-jaguar" : "text-white"
                  } font-nunito text-xl w-[55.25rem]`}
                >
                  {item.ans}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
