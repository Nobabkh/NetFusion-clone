import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DescriptionCard = ({ card }) => {

  const {id, image, title, description} = card;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`pl-3 flex md:gap-20  ${(id===2 || id===3) ? 'lg:ml-20' : 'ml-0'}  lg:w-full`}>
      <div className="flex flex-col md:items-start items-center gap-4">
        <div className="bg-gradient-to-l from-black to-[#02C173] p-[1px] w-max rounded-bl-[5px]">
          <div className="flex justify-center items-center p-3  bg-black border-[#02C173]">
            <img
              className="md:w-8 md:min-w-5 "
              data-aos="flip-left"
              data-aos-duration="1000"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        <div>
          <p className={`text-center md:text-left text-base font-medium text-[#FFFFFFCC] ${id===3 ? 'md:w-[80%]' : 'lg:w-full' } `}>
            {description}
            {/* ${id===3 ? 'md:w-[50%]' : 'w-full' } */}
          </p>
        </div>
      </div>
      <div className={`h-full w-[1px] bg-[#02C173] ${id===3 ? 'hidden' : 'block'} flex-grow`} ></div>
    </div>
  );
};

export default DescriptionCard;
