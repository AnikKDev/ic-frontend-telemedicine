import React from "react";
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import styles from "./Benefits.module.css";
const Benefits = () => {
  const dummyArr = [1, 2, 3, 4];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      style={{ boxShadow: "0px 16px 21px -9px grey" }}
      className="grid w-[95%] p-4  mx-auto rounded-md sm:gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-4"
    >
      {dummyArr.map((data) => (
        <BenefitsCard />
      ))}
    </div>
  );
};

export default Benefits;
