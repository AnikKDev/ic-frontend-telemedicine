import React from "react";
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import styles from "./Benefits.module.css";
const Benefits = ({ servicesData }) => {
  const { icon } = servicesData;
  const dummyArr = [1, 2, 3, 4];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      style={{ boxShadow: "0px 16px 21px -9px grey" }}
      className="grid p-4  rounded-md sm:gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-4"
    >
      {servicesData.map((data) => (
        <BenefitsCard key={Math.random().toString()} data={data} />
      ))}
    </div>
  );
};

export default Benefits;
