import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./SharedPages/Navbar/Navbar";
import SubNavbar from "./SharedPages/SubNavbar/SubNavbar";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <SubNavbar />
      {/* <Navbar /> */}
      {/* content*/}
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default Main;
