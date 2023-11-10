import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitel from "../../../components/SectionTitel";


const Category = () => {
  return (
    <section>
        <SectionTitel
            subHeading={"From 11.00"}
            heading ={"Order Online"}
        ></SectionTitel>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="py-4">
            <img className=" rounded-md" src={slider1} alt="" />
            <p className="md:text-2xl font-bold text-white drop-shadow-lg text-center -mt-12 md:-ml-8 ">Salads</p>
        </SwiperSlide>
        <SwiperSlide className="py-4">
            <img className=" rounded-md" src={slider2} alt="" />
            <p className="md:text-2xl font-bold text-white drop-shadow-lg text-center -mt-12 md:-ml-8 ">SOUPS</p>
        </SwiperSlide>
        <SwiperSlide className="py-4">
            <img className=" rounded-md" src={slider3} alt="" />
            <p className="md:text-2xl font-bold text-white drop-shadow-lg text-center -mt-12 md:-ml-8 ">PIZZAS </p>
        </SwiperSlide>
        <SwiperSlide className="py-4">
            <img className=" rounded-md" src={slider4} alt="" />
            <p className="md:text-2xl font-bold text-white drop-shadow-lg text-center -mt-12 md:-ml-8 ">DESSERTS</p>
        </SwiperSlide>
        <SwiperSlide className="py-4">
            <img className=" rounded-md" src={slider5} alt="" />
            <p className="md:text-2xl font-bold text-white drop-shadow-lg text-center -mt-12 md:-ml-8 ">Salads</p>
        </SwiperSlide>
    
      
      </Swiper>
    </section>
  );
};

export default Category;
