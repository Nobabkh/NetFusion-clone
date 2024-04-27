import React from 'react';

const IconDescription = ({icon}) => {
    const {id, description, image} = icon;
    return (
        <div className='flex items-center gap-3 '>
            <div className='w-10'><img src={image} alt="" /></div>
            <div><p className='font-bold text-[#FFFFFFCC]'>{description}</p></div>
        </div>
    );
};

export default IconDescription;