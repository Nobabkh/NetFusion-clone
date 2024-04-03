import React from "react";
import RoundedButton from "../../RoundedButton";

const Email = () => {
  return (
    <div className="lg:w-[35%] md:w-[100%] w-full ">
      <div className="flex flex-wrap gap-3">
        <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
            <input
              type="text"
              placeholder="Your Email Address"
              className="input w-full md:h-full bg-black rounded-full "
            />
        </div>
        <div className="">
            <RoundedButton text="Subscribe Now"></RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default Email;
