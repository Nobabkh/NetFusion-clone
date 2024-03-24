import React, { useEffect, useState } from "react";
import user1 from "/user-1.jpg"
import user2 from "/user-2.jpg"

const HeroCard = () => {

  return (
    <div className="border border-gray-400 rounded-2xl h-max p-7 bg-[#3636364a]">
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={user1}
            />
          </div>
        </div>
        <div className="chat-bubble bg-white text-black text-xs font-semibold">What can you do for me?</div>

      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={user2}
            />
          </div>
        </div>
        <div className="chat-bubble  md:w-[50%] h-max text-left bg-black text-white text-xs font-semibold">I can answer questions provide information & any problem you have</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={user1}
            />
          </div>
        </div>
        <div className="chat-bubble bg-white text-black text-xs font-semibold">How does AI work?</div>
      </div>
    </div>
  );
};

export default HeroCard;
