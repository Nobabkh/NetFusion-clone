import React from "react";
import exciteAILogo from "/exciteai.png";
import { FaArrowRight } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import './style.css';

const Nav = ({selector, animate}) => {
  console.log(animate)
  const menuCSS =
    "block  py-9 text-white uppercase transition-all duration-500 ease-out relative font-inter font-semibold text-base hover:text-[#02C173] bg-black";

  return (
    // fixed left-0 right-0 top-0
    // p-[2rem] md:p-[2rem]
    <div className="md:p-[2rem]">
      <div className={`left-0 right-0 top-0 z-50 bg-black ${animate?`sticky`:`nonsticky`}`}>
      <div className="container max-w-screen-xl mx-auto ">
        <div className="navbar bg-none">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {/* <li>
                  <a>Home</a>
                  <ul className="p-2">
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </li> */}
                <li onClick={()=>{selector(1)}}><a>Home</a></li>
                <li onClick={()=>{selector(2)}}><a>About Us</a></li>
                <li>
                  <a onClick={()=>{selector(3)}}>Services</a>
                  {/* <ul className="p-2">
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Services Details</a>
                    </li>
                  </ul> */}
                </li>
                {/* <li>
                  <a>Projects</a>
                  <ul className="p-2">
                    <li>
                      <a>Projects</a>
                    </li>
                    <li>
                      <a>Project Details</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <a onClick={()=>{selector(4)}}>Products</a>
                </li>
                <li>
                  <a onClick={()=>{selector(5)}}>Contact</a>
                </li>
                <li></li>
              </ul>
            </div>
            <img className="w-52" src={exciteAILogo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* <li className={menuCSS}>
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
              </li> */}
              <li className={menuCSS}>
                <a className="" onClick={()=>{selector(1)}}>Home</a>
              </li>
              <li className={menuCSS}>
                <a className="" onClick={()=>{selector(2)}} >About us</a>
              </li>
              <li className={menuCSS}>
                  <summary onClick={()=>{selector(3)}}>Services</summary>
                  {/* <ul className="p-2">
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Service Details</a>
                    </li>
                  </ul> */}
                
              </li>
              {/* <li className={menuCSS}>
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
              </li> */}
              {/* <li className={menuCSS}>
                <a className="">Projects</a>
              </li> */}
              {/* <li className={menuCSS}>
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
              </li> */}
              <li className={menuCSS}>
                <a className="" onClick={()=>{selector(4)}}>Products</a>
              </li>
              <li className={menuCSS}>
                <a onClick={()=>{selector(5)}}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden md:flex">
            <a className="inline-flex self-stretch items-center bg-[#02C173] px-7 py-6 text-gray-900 text-base font-semibold gap-2 rounded-l-3xl hover:cursor-pointer" onClick={()=>{selector(5)}}>
              <a onClick={()=>{selector(5)}} className="flex items-center gap-3 hover:text-[#FFFFFF] hover:cursor-pointer transition-all duration-500 ease-out text-base font-semibold">
                Get A Quote
                <FaArrowRight />
              </a>
            </a>
            <a href="">
              <div className="px-7 py-6 bg-[#121212] flex items-center justify-center text-white text-2xl font-normal transition-all duration-500 ease-out rounded-r-3xl hover:bg-[#02C173] hover:text-gray-900">
                <BiMenuAltLeft />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;






// 