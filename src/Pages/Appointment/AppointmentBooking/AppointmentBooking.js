import React, { useState } from "react";
import PickDate from "./TimeAndDate/PickDate";
import PickTime from "./TimeAndDate/PickTime";

const AppointmentBooking = () => {
  return (
    <div className="flex justify-center border-2 border-black">
      <div className="w-2/4 border-2 mx-4 border-red-600">
        <PickDate />
      </div>
      <div className="w-1/3 border-2 mx-4 border-red-600">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <PickTime />
        </div>
        <div className="w-full my-10">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            placeholder="Bio"
            className="textarea h-60 textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
