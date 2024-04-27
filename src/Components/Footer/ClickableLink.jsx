import React from "react";

const ClickableLink = ({ text }) => {
  return (
    <div>
      <p>
        <a
          className="text-base font-semibold text-[#FFFFFFCC] hover:text-[#02c173] transition-all duration-500 ease-out"
          href=""
        >
          {text}
        </a>
      </p>
    </div>
  );
};

export default ClickableLink;
