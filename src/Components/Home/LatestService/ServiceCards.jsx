import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceCards = ({ SiteData }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const services = SiteData.latestService?.services;
  // console.log(services1);

  return (
    <div className="grid grid-cols-1 gap-6">
      {services?.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default ServiceCards;
