import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Json/SiteData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const services1 = data.latestService?.services;
  console.log(services1);

  return (
    <div className="grid grid-cols-1 gap-6">
        {
            services1?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
    </div>
  );
};

export default ServiceCards;
