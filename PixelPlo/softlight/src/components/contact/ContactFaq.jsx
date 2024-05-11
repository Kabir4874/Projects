import { useState } from "react";
import { faq } from "../../data/aboutData";
import cross_icon from "../../assets/cross_icon.svg";
import plus_icon from "../../assets/plus_icon.svg";
import faq_border from "../../assets/faq_border.svg";

const ContactFaq = () => {
  const [Faq, setFaq] = useState(null);
  function toggle(i) {
    if (Faq === i) {
      return setFaq(null);
    }
    setFaq(i);
  }
  return (
    <div className="w-full bg-jaguar py-[9.31rem] mt-[9.38rem]">
      <div className="w-[61.5rem] mx-auto">
        <h2 className=" text-white text-center font-syne text-[2.5rem] font-bold w-[53.5625rem] mx-auto mb-[4.38rem]">
          Find the Answers on Frequently Asked{" "}
          <span className="text-jaguar bg-white px-2">Questions</span>
        </h2>
        <div className=" flex flex-col items-start gap-[1.88rem] self-stretch">
          {faq.map((item, i) => {
            return (
              <div
                key={item.id}
                className={`relative flex px-[2.25rem] py-[1.9rem] flex-col items-start  self-stretch rounded-[0.5rem]  gap-5 ${
                  Faq !== i ? "bg-jaguar" : " faq-linear"
                }`}
              >
                <img
                  src={faq_border}
                  alt=""
                  className={`absolute top-0 left-0 -z-100 cursor-pointer svg ${
                    Faq !== i ? "visible" : "hidden"
                  }`}
                  onClick={() => toggle(i)}
                />
                <div
                  className=" flex items-center self-stretch gap-7 justify-between  cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <p
                    className={`${
                      Faq !== i ? " text-white" : "text-jaguar"
                    } font-syne text-3xl font-semibold`}
                  >
                    {item.qus}
                  </p>
                  <button>
                    <img
                      src={`${Faq !== i ? plus_icon : cross_icon}`}
                      className="svg"
                    />
                  </button>
                </div>
                <div
                  className={` w-full ${
                    Faq === i ? "visible" : "hidden"
                  } pt-[1.12rem]`}
                >
                  <p
                    className={`${
                      Faq !== i ? " text-white" : "text-jaguar"
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
    </div>
  );
};

export default ContactFaq;
