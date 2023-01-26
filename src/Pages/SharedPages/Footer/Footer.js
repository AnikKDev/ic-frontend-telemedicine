import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-20 p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title text-xl">Company</span>
          <a className="link link-hover text-[1.09em]">About us</a>
          <a className="link link-hover text-[1.09em]">Contact</a>
          <a className="link link-hover text-[1.09em]">Jobs</a>
          <a className="link link-hover text-[1.09em]">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-xl">Legal</span>
          <a className="link link-hover text-[1.09em]">Terms of use</a>
          <a className="link link-hover text-[1.09em]">Privacy policy</a>
          <a className="link link-hover text-[1.09em]">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title text-xl">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-[1.09em]">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ==================== */}
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Meow
        </p>
      </div>
    </>
  );
};

export default Footer;
