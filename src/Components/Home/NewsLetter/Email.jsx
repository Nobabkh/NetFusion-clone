import React from "react";
import RoundedButton from "../../RoundedButton";

const Email = () => {
  return (
    <div className="md:grid grid-cols-1 lg:w-[35%] md:w-[100%] w-full">
      <div className=" gap-3">
        <div className="flex flex-wrap mb-5 gap-4">
          <div className="">
            <RoundedButton text="Full Name"></RoundedButton>
          </div>
          <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
            <input
              type="text"
              placeholder=""
              className="input w-full md:h-full bg-black rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-5 gap-4">
          <div className="">
            <RoundedButton text="Email Address"></RoundedButton>
          </div>
          <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
            <input
              type="text"
              placeholder=""
              className="input w-full md:h-full bg-black rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-5 gap-4">
          <div className="">
            <RoundedButton text="Your Message"></RoundedButton>
          </div>
          <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
            <input
              type="text"
              placeholder=""
              className="input w-full md:h-full bg-black rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <RoundedButton text="Submit" className="mx-auto"></RoundedButton>
      </div>
    </div>
  );
};

export default Email;
