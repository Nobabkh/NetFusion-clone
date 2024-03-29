import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import DescriptionCard from './DescriptionCard';
import DescriptionCards from './DescriptionCards';

const CustomPrompts = ({SiteData}) => {
    return (
        <div className='py-32 lg:container lg:max-w-screen-xl lg:mx-auto'>
            <SectionHeader title="Revolutionizing industries with AI" sectionName="Custom Prompts"></SectionHeader>
            <DescriptionCards SiteData={SiteData}></DescriptionCards>
        </div>
    );
};

export default CustomPrompts;