import React, { useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({service}) => {

  const {id, title, description, image} = service;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos-duration="1000"  data-aos="fade-up" className="flex flex-col md:flex-row  items-center border border-[#e7edf433] rounded-3xl gap-10 overflow-hidden">
      <div className=" flex flex-col justify-center items-center md:items-start md:justify-start lg:flex-row lg:items-center gap-5 lg:gap-20 py-8 px-5 md:pl-10 md:py-10">
        <div className="flex justify-start">
          <div className="bg-gradient-to-r from-black to-[#02C173] rounded-full p-[0.5px]">
            <div className="flex justify-center items-center p-7 bg-black  border-[#02C173] rounded-full ">
              <img
                className="md:w-12 md:min-w-10 "
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" lg:py-10 ">
          <p className="text-2xl font-bold text-white text-left w-max md:w-60">
            {title}
          </p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-base font-bold text-center md:text-left text-[#FFFFFFCC]">
            {description}
          </h1>
        </div>
      </div>
      <div className="flex w-full items-center md:w-1/2  justify-center py-10 md:py-12 bg-[#1f1f1f] flex-grow text-[#02C173] text-5xl lg:w-[20%] md:h-full">
        <CgArrowLongRight />
      </div>
    </div>
  );
};

export default ServiceCard;
