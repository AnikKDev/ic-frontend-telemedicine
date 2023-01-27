import React from "react";
import styles from "./BenefitsCard.module.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
const BenefitsCard = ({ data }) => {
  return (
    <div className="">
      <div
        className={`h-24 px-3 py-2 rounded-lg flex items-center justify-around m-2 ${styles.benefitsCard__container}`}
      >
        <div
          className={`rounded-full  p-3 ${styles.benefitsCard__iconContainer}`}
        >
          {/* icon */}
          {data.icon}
          {/* <FaCanadianMapleLeaf size={40} /> */}
        </div>
        <div className="ml-2">
          {/* text */}
          <h3 className="text-xl font-semibold font-sans">{data.subTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
