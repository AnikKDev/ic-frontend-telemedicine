import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Services.css";

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
              <div className={``}>
                <div className={``}>
                  {/*background image */}
                  <div className={`my-auto`}>
                    <h5>Name of the company</h5>
                    <p>Doamain</p>
                  </div>
                </div>
                <div className={``}>
                  {/* content */}
                  <FaQuoteLeft className={``} />
                  <h5>“ I am the content about the customer success story</h5>
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
