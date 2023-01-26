import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Services.css";
import ServicePoints from "./ServicePoints/ServicePoints";

const Services = () => {
  // dummy
  const dummyArray = [1, 2, 3, 4];
  return (
    <div className="services__container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className=""
        >
          {dummyArray.map((testimonial) => (
            <SwiperSlide>
              <div className={`grid my-12 lg:grid-cols-2 items-center`}>
                <div className={`services__imageContainer`}>
                  {/*background image */}
                  <img
                    src="https://plus.unsplash.com/premium_photo-1663054745421-e531826cc122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                    alt=""
                  />
                </div>
                <div className={`mx-7`}>
                  {/* content */}
                  <div className=" services__infoContainer p-6 ">
                    {/* content */}
                    <h1 className="text-5xl ">
                      This is Real
                      <span className="text-secondary"> meow</span>
                    </h1>
                    <ServicePoints />
                    <ServicePoints />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </div>
  );
};

export default Services;
