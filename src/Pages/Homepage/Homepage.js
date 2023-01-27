import React from "react";
import Services from "./Services/Services";
import TopBlogs from "./TopBlogs/TopBlogs";

const Homepage = () => {
  return (
    <div className="w-full max-w-[90rem] mx-auto">
      {/* banner */}
      {/* services */}
      <Services />
      {/* top blogs */}
      <TopBlogs />
    </div>
  );
};

export default Homepage;
