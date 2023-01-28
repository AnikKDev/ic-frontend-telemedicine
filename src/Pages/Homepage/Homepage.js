import React from "react";
import Appointment from "../Appointment/Appointment";
import Services from "./Services/Services";
import TopBlogs from "./TopBlogs/TopBlogs";

const Homepage = () => {
  return (
    <div className="w-[95%] mx-auto">
      {/* banner */}
      {/* services */}
      <Services />
      {/* top blogs */}
      <TopBlogs />

      {/* for testing */}
      <Appointment />
    </div>
  );
};

export default Homepage;
