import React from "react";
import netFusionLogo from "/white-logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";

const Nav = () => {
  const menuCSS =
    "block  py-9 text-white uppercase transition-all duration-500 ease-out relative font-inter font-semibold text-base hover:text-[#02C173] bg-black";

  return (
    <div className="">
      <div className="navbar bg-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>Home</li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>Item 3</li>
            </ul>
          </div>
          <img src={netFusionLogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className={menuCSS}>
              <details>
                <summary>Home</summary>
                <ul className="p-2">
                  <li>
                    <a>Home 1</a>
                  </li>
                  <li>
                    <a>Home 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className={menuCSS}>
              <a className="">About us</a>
            </li>
            <li className={menuCSS}>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <a>Home 1</a>
                  </li>
                  <li>
                    <a>Home 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className={menuCSS}>
              <details>
                <summary>Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>Home 1</a>
                  </li>
                  <li>
                    <a>Home 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className={menuCSS}>
              <details>
                <summary>Blogs</summary>
                <ul className="p-2">
                  <li>
                    <a>Home 1</a>
                  </li>
                  <li>
                    <a>Home 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className={menuCSS}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <a className="inline-flex self-stretch items-center bg-[#02C173] px-7 py-6 text-gray-900 text-base font-semibold gap-2 rounded-l-3xl">
            <div className="flex items-center gap-3 hover:text-[#FFFFFF] transition-all duration-500 ease-out text-base font-semibold">
              <a href="">Get A Quote</a>
              <FaArrowRight />
            </div>
          </a>
          <a href="">
            <div className="px-7 py-6 bg-[#121212] flex items-center justify-center text-white text-2xl font-normal transition-all duration-500 ease-out rounded-r-3xl hover:bg-[#02C173] hover:text-gray-900">
              <BiMenuAltLeft />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
