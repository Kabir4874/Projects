import Star from "../../assets/Star 4.svg";
import uiuxIcon from "../../assets/uiuxIcon.svg";
import frontendIcon from "../../assets/frontendIcon.svg";
import backendIcon from "../../assets/backendIcon.svg";
import HeroButton from "../HeroButton";

const PricingPlans = () => {
  return (
    <div className="w-[1012px] mx-auto mt-[6.48rem]">
      <div className="flex items-stretch justify-between gap-5">
        <div className="w-[24.125rem] pt-[2.70rem] px-[3.12rem] pb-[6.19rem] rounded-[0.625rem] border-2 border-jaguar">
          <div className="pb-[2.19rem] border-b border-alto">
            <p className=" text-jaguar font-syne text-3xl font-medium text-center">
              Basic
            </p>
            <p className="mt-[0.56rem] text-jaguar font-nunito text-center text-[3.125rem] font-bold">
              $09<span className=" text-3xl font-medium">/month</span>
            </p>
          </div>
          <ul className="mt-[3.19rem] flex flex-col items-start gap-[1.56rem] w-fit mx-auto">
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" />
              <p className=" text-boulder font-nunito text-xl">Visual Design</p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" />
              <p className=" text-boulder font-nunito text-xl">
                Graphic Design
              </p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" />
              <p className=" text-boulder font-nunito text-xl">Branding</p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" />
              <p className=" text-boulder font-nunito text-xl">Web Design</p>
            </li>
            <li className="flex items-center gap-[0.6rem]">
              <img src={Star} alt="" />
              <p className=" text-boulder font-nunito text-xl">
                Visual Graphics
              </p>
            </li>
          </ul>
          <div className="mt-[4.81rem]">
            <HeroButton text={"Subscribe Now"} />
          </div>
        </div>

        <div className="w-[606px] pt-[2.62rem] pl-10 pr-[3.56rem] pb-16 rounded-[0.625rem] border-2 border-jaguar flex items-start">
          <div className="w-[17.875rem]">
            <div className="pb-[2.19rem] border-b border-alto">
              <p className=" text-jaguar font-syne text-3xl font-medium text-center">
                Pro
              </p>
              <p className="mt-[0.56rem] text-jaguar font-nunito text-center text-[3.125rem] font-bold">
                $99<span className=" text-3xl font-medium">/month</span>
              </p>
            </div>
            <ul className="mt-[3.19rem] flex flex-col items-start gap-[1.56rem] w-fit mx-auto">
              <li className="flex items-center gap-[0.6rem]">
                <img src={Star} alt="" />
                <p className=" text-boulder font-nunito text-xl">
                  Visual Design
                </p>
              </li>
              <li className="flex items-center gap-[0.6rem]">
                <img src={Star} alt="" />
                <p className=" text-boulder font-nunito text-xl">
                  Graphic Design
                </p>
              </li>
              <li className="flex items-center gap-[0.6rem]">
                <img src={Star} alt="" />
                <p className=" text-boulder font-nunito text-xl">Branding</p>
              </li>
              <li className="flex items-center gap-[0.6rem]">
                <img src={Star} alt="" />
                <p className=" text-boulder font-nunito text-xl">Web Design</p>
              </li>
              <li className="flex items-center gap-[0.6rem]">
                <img src={Star} alt="" />
                <p className=" text-boulder font-nunito text-xl">
                  Visual Graphics
                </p>
              </li>
            </ul>
            <div className="mt-[4.81rem]">
              <HeroButton text={"Subscribe Now"} />
            </div>
          </div>

          <div className="flex items-start flex-col gap-[4.38rem]">
            <div>
              <div className="flex items-center gap-[0.94rem]">
                <img src={uiuxIcon} alt="" />
                <p className="text-jaguar font-syne text-xl font-bold">UI/UX</p>
              </div>
              <ul className="mt-[0.31rem] ml-16">
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    UI/UX Designer
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Graphic Design
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Branding
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-[0.94rem]">
                <img src={frontendIcon} alt="" />
                <p className="text-jaguar font-syne text-xl font-bold">
                  Frontent Dev
                </p>
              </div>
              <ul className="mt-[0.31rem] ml-16">
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    UI/UX Designer
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Graphic Design
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Branding
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-[0.94rem]">
                <img src={backendIcon} alt="" />
                <p className="text-jaguar font-syne text-xl font-bold">
                  Backend Dev
                </p>
              </div>
              <ul className="mt-[0.31rem] ml-16">
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    UI/UX Designer
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Graphic Design
                  </p>
                </li>
                <li className="flex items-center gap-[0.6rem]">
                  <img src={Star} alt="" />
                  <p className=" text-boulder font-nunito text-lg text-nowrap">
                    Branding
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
