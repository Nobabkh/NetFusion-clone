import React, { useEffect, useState } from "react";
import DescriptionCard from "./DescriptionCard";

const DescriptionCards = ({SiteData}) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Json/SiteData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //     console.log(data)});
  // }, []);

  // console.log(SiteData);

  const cards = SiteData?.customPrompts?.cards;



  return (
    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3  md:flex-row md:grid md:grid-cols-2 md:gap-10 lg:gap-10">
      {
        cards?.map(card => <DescriptionCard key={card?.id} card={card}></DescriptionCard>)
      }
    </div>
  );
};

export default DescriptionCards;
