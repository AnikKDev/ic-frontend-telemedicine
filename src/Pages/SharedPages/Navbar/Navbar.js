import React from "react";
import styles from "./Navbar.module.css";
import { CgLogIn } from "react-icons/cg";
const Navbar = () => {
  const menuOptions = (
    <>
      <li className="mx-1">
        <a>Home</a>
      </li>
      <li className="mx-1" tabIndex={0}>
        <a>
          Services
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        {/* nested nav */}
        <ul className={`${styles.navbar__nestedNav} bg-white`}>
          <li>service 1</li>
          <li>service 2</li>
          <li>service 3</li>
          <li>service 4</li>
          <li>service 5</li>
        </ul>
      </li>
      <li className="mx-1">
        <a>Blogs</a>
      </li>
      <li className="mx-1">
        <a>About</a>
      </li>
      <li className="mx-1">
        <a className="btn btn-secondary">
          Let me in{" "}
          <span>
            <CgLogIn size={20} />
          </span>{" "}
        </a>
      </li>
    </>
  );
  return (
    <div
      className={`navbar justify-between bg-base-100 ${styles.navContent__parent}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Product Name</a>
      </div>
      <div className="rounded-lg hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 ${styles.navContent__container}`}
        >
          {menuOptions}
        </ul>
      </div>
      {/* <div className="sm:navbar-end"></div> */}
    </div>
  );
};

export default Navbar;
