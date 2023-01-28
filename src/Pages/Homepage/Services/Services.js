import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { TfiWrite } from "react-icons/tfi";
import { BsSmartwatch } from "react-icons/bs";
import { GiHealthDecrease } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Services.css";
import ServicePoints from "./ServicePoints/ServicePoints";
import Benefits from "../Benefits/Benefits";

const Services = () => {
  // dummy
  const dummyArray = [1, 2, 3, 4];
  const servicesData = [
    {
      title: "Medicine Selection To Prescribe From Around The Globe",
      description: [
        "Electronic medical records: With the use of electronic medical records, doctors can easily access a patient's medical history and current medications, making it easier to prescribe the appropriate medicine.",
        "Prescription reminders",
      ],
      icon: <TfiWrite size={40} />,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80",
      subTitle: "Medicine Selection",
    },
    {
      title: "Convenient Schedule",
      description: [
        "Virtual consultations: Doctors now offer virtual consultations, which allow patients to consult with a doctor remotely via video or text chat. This can save patients time and eliminate the need to wait for an appointment.",
        "Doctors can now offer online appointment scheduling, which allows patients to easily schedule appointments at their convenience. This eliminates the need to wait for an available appointment time.",
      ],
      icon: <BsSmartwatch size={40} />,
      image:
        "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subTitle: "Convenient Schedule",
    },
    {
      title: "Connect With Doctors Across The Globe",
      description: ["Remote monitoring", "International medical referrals"],
      icon: <GiHealthDecrease size={40} />,
      subTitle: "Doctors Around Globe",
    },
    {
      title: "Find The Right Doctor For You",
      description: [
        "Doctor matching service that matches patients with doctors based on their medical needs, preferences, and location. This can help users to find a doctor who is the best fit for them.",
        "International medical referrals",
        "Doctor profiles that include information about a doctor's qualifications, experience, education, certifications, and patient reviews. This can help users to get a better sense of a doctor's qualifications and reputation.",
      ],
      icon: <MdOutlineHealthAndSafety size={40} />,
      subTitle: "Options To Decide",
    },
  ];
  return (
    <>
      <h1 className="text-5xl font-[Libre-Baskerville]">
        What{" "}
        <span className="text-secondary font-[Libre-Baskerville]">
          You Will Get <AiOutlineSwapRight size={60} />
        </span>
      </h1>
      <Benefits servicesData={servicesData} />
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
            {servicesData.map((data) => (
              <SwiperSlide key={Math.random().toString()}>
                <div className={`grid my-12 lg:grid-cols-2 items-center`}>
                  <div className={`services__imageContainer`}>
                    {/*background image */}
                    <img
                      className="rounded-lg shadow-xl"
                      src={
                        data.image
                          ? data.image
                          : "https://plus.unsplash.com/premium_photo-1663054745421-e531826cc122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                      }
                      alt=""
                    />
                  </div>
                  <div className={`mx-7`}>
                    {/* content */}
                    <div className=" services__infoContainer p-6 ">
                      {/* content */}
                      <h1 className="text-5xl leading-relaxed">{data.title}</h1>
                      {data.description.map((des) => (
                        <ServicePoints
                          key={Math.random().toString()}
                          des={des}
                        />
                      ))}
                      {/* <ServicePoints /> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Swiper>
      </div>
    </>
  );
};

export default Services;
