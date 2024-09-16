import Photo1 from "../../assets/Photo1.png";
import Photo2 from "../../assets/Photo2.png";
import Photo3 from "../../assets/Photo3.png";
import Photo4 from "../../assets/Photo4.png";
import Photo5 from "../../assets/Photo5.png";
import Photo6 from "../../assets/Photo6.png";
import upperPattern from "../../assets/upperpattern.svg";
import downPattern from "../../assets/downpattern.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="w-full relative mt-[0.38rem] overflow-y-hidden">
      <div className=" absolute -top-1 z-50">
        <img src={upperPattern} alt="" />
      </div>
      <div className=" overflow-hidden">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          speed={1500}
          grabCursor={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Photo1} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo2} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo3} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo4} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo5} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo6} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo1} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo2} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo3} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo4} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo5} alt="" className="h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Photo6} alt="" className="h-[550px]" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" absolute -bottom-1 z-50">
        <img src={downPattern} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
