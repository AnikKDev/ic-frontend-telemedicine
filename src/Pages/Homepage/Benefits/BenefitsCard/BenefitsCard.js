import React from "react";
import styles from "./BenefitsCard.module.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
const BenefitsCard = () => {
  return (
    <div className="">
      <div
        className={`h-24 px-3 rounded-lg flex items-center justify-around m-2 ${styles.benefitsCard__container}`}
      >
        <div
          className={`rounded-full  p-1 ${styles.benefitsCard__iconContainer}`}
        >
          {/* icon */}
          <FaCanadianMapleLeaf size={40} />
        </div>
        <div className="ml-2">
          {/* text */}
          <h3 className="text-xl">Heading</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
