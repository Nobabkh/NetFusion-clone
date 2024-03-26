import React from "react";
import SectionHeaderLeftAligned from "../../SectionHeader/SectionHeaderLeftAligned";
import IconDescription from "./IconDescription";

const TitleDescriptionIcon = ({sectionName, title, description, icons}) => {
  return (
    <div className="flex flex-col">
      <div className="md:w-[90%]">
        <SectionHeaderLeftAligned sectionName={sectionName} title={title}></SectionHeaderLeftAligned>
      </div>
      <div>
        <p className="font-bold text-left lg:w-[80%]   text-[#FFFFFFCC] mb-6">
          {description}
        </p>
      </div>
      <div className="">
        <div className="flex items-center text-sm md:text-base gap-12">
          {
            icons?.map(icon => <IconDescription key={icon.id} icon={icon}></IconDescription>)
          }
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TitleDescriptionIcon;
