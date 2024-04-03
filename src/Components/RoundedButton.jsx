import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const RoundedButton = ({text}) => {
    return (
        <div>
            <button className='bg-[#02C173] text-[#060606] rounded-full py-4 px-10 flex items-center gap-2 text-base font-semibold'>{text}<FaArrowRight/></button>
            
        </div>
    );
};

export default RoundedButton;