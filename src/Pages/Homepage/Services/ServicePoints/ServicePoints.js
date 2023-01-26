import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./ServicePoints.css";
const ServicePoints = () => {
  return (
    <>
      <div className=" mt-8 my-2 text-left">
        <div className="flex items-start">
          {/* sign icon */}
          <div className="border-2 servicesPoints__iconContainer mr-3 rounded-full p-1">
            <AiOutlineCheck color="#55E0A3" size={20} />
          </div>
          <p className=" text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia unde iure dolores laborum veritatis.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicePoints;
