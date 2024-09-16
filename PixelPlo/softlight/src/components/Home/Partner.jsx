import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
const Partner = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[9.14rem]">
      <h2 className=" text-jaguar text-center font-syne text-xl font-bold tracking-[0.70625rem]">
        WE PARTNER WITH FORWARD
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={88}
        grabCursor={true}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={1500}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper mt-[3.38rem]"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;
