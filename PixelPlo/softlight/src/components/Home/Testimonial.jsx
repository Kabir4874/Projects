import { testimonialData } from "../../data/homeData";
import Stroke from "../../assets/Stroke.svg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import quote from "../../assets/quote.svg";

const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-[75rem] mx-auto">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="relative">
          <img src={Stroke} />
          <div className=" absolute top-[50%] w-[50.875rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[1.62rem]">
            <div className="w-[2.370rem]">
              <img src={quote} alt="" className="w-full" />
            </div>
            <p className=" text-jaguar text-center font-nunito text-[1.5625rem]">
              High-end digital experiences. Created at the heart of Manhattan,
              we are a should human team. The driving force of all speeches, we
              believe that creation should be the point around which any
              strategy revolves.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={Stroke} />
          <div className=" absolute top-[50%] w-[50.875rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[1.62rem]">
            <div className="w-[2.370rem]">
              <img src={quote} alt="" className="w-full" />
            </div>
            <p className=" text-jaguar text-center font-nunito text-[1.5625rem]">
              High-end digital experiences. Created at the heart of Manhattan,
              we are a should human team. The driving force of all speeches, we
              believe that creation should be the point around which any
              strategy revolves.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={Stroke} />
          <div className=" absolute top-[50%] w-[50.875rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[1.62rem]">
            <div className="w-[2.370rem]">
              <img src={quote} alt="" className="w-full" />
            </div>
            <p className=" text-jaguar text-center font-nunito text-[1.5625rem]">
              High-end digital experiences. Created at the heart of Manhattan,
              we are a should human team. The driving force of all speeches, we
              believe that creation should be the point around which any
              strategy revolves.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div>
            <img src={test1} alt="" />
            <div className="mt-4">
              <h4 className=" text-jaguar font-syne text-[1.875rem] font-medium mb-[0.12rem]">
                Charl Gems
              </h4>
              <p className=" text-jaguar font-nunito text-lg">
                Founder of HiTechs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={test2} alt="" />
            <div>
              <h4>Aron Fernandez</h4>
              <p>Founder of WiTechs.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={test3} alt="" />
            <div>
              <h4>Gimi Babez</h4>
              <p>Founder of HelloTechs.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
