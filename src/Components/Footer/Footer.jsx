/* eslint-disable react/prop-types */
import ClickableLink from "./ClickableLink";
import exciteAILogo from "/exciteai.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = ({ SiteData }) => {
  const description = SiteData?.footer?.description;
  const phone = SiteData?.footer?.phone;
  const email = SiteData?.footer?.email;
  const address = SiteData?.footer?.address;
  const emailSectionTitle = SiteData?.footer?.emailSectionTitle;
  return (
    <div className="mt-28 w-full bg-[#121212] pt-20">
      <div className="lg:flex justify-center md:grid md:grid-cols-2 md:gap-10 container max-w-screen-xl mx-auto pb-20">
        <div className="flex w-max gap-12">
          <div className="flex flex-col gap-8 w-72 md:ml-11 lg:ml-0 ml-11">
            <div className=""><img className="w-48" src={exciteAILogo} alt="" /></div>
            <div className=""><p className="text-white text-base font-semibold text-left  ">{description}</p></div>
          </div>
          <div className="h-[200px] w-[3px] bg-gradient-to-b from-[#0E3E2B] to-[#121212] lg:block md:hidden hidden"></div>
        </div>
        <div className="flex gap-20 ml-12">
          <div className="flex flex-col gap-4  pt-3 mt-5 md:mt-0">
            <h1 className="text-[26px] font-bold text-white w-full">Quick Links</h1>
            <div className="flex justify-start"><ClickableLink text='About Us'></ClickableLink></div>
            <div className="flex justify-start"><ClickableLink text='Projects'></ClickableLink></div>
            <div className="flex justify-start"><ClickableLink text='Services'></ClickableLink></div>
            <div className="flex justify-start"><ClickableLink text='Contact'></ClickableLink></div>
          </div>
          <div className="h-[200px] w-[3px] bg-gradient-to-b from-[#0E3E2B] to-[#121212] lg:block md:hidden hidden"></div>
        </div>
        <div className="flex gap-20 mt-5 md:mt-0">
          <div className="flex flex-col gap-4 pl-12 pt-3 ">
            <h1 className="text-[26px] font-bold text-white text-left w-full">Address</h1>
            <div className="flex justify-start items-center gap-2 text-base text-white font-semibold"><FaPhone className="text-[#02C173]"/>{phone}</div>
            <div className="flex justify-start text-base items-center gap-2 text-white font-semibold"><MdEmail className="text-[#02C173]"/>{email}</div>
            <div className="flex justify-start text-base items-center gap-2 text-white font-semibold"> <FaLocationDot className="text-[#02C173]" />{address}</div>
          </div>
          <div className="h-[200px] w-[3px] bg-gradient-to-b from-[#0E3E2B] to-[#121212] hidden"></div>
        </div>
        {/* <div className="flex gap-20">
          <div className="flex flex-col gap-4 pl-12 pt-3 ">
            <h1 className="text-[26px] font-bold text-white text-left w-full">{emailSectionTitle}</h1>
            
          </div>
        </div> */}
      </div>
      <div className="border-t border-[#121F19] py-8 px-10">
        <div className="flex flex-wrap-reverse gap-3 justify-between container max-w-screen-xl mx-auto">
          <div className="w-full md:w-max">
            <p className="text-base font-semibold w-full text-[#FFFFFFCC] ">
              Copyright ©2024 Netfusion. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-4 mx-auto">
            <FaFacebook className="text-[#02C173] text-xl"/>
            <RiInstagramFill className="text-[#02C173] text-xl"/>
            <FaTwitter className="text-[#02C173] text-xl"/>
            <FaGithub className="text-[#02C173] text-xl"/>
            <FaDribbble className="text-[#02C173] text-xl"/>
          </div>
          <div className="flex justify-center  gap-7 md:px-0  px-4">
            <ClickableLink text="Terms & Condition"></ClickableLink>
            <ClickableLink text="Privacy Policy"></ClickableLink>
            <ClickableLink text="Contact Us"></ClickableLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
