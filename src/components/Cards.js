import React from "react";
import Card from "./Card";


function Cards() {
  const content1 = {
    heading: "Brand Recognition",
    content:
      "Become a brand recognised everywhere. ",
    image: "images/IconBrandRecognition.svg",
  };
  const content2 = {
    heading: "Detailed Records",
    content:
      "A detailed analysis is done by the industry experts.",
    image: "images/IconDetailedRecords.svg",
  };
  const content3 = {
    heading: "Fully Customizable",
    content:
      "Make your work noticed by making it customizable.",
    image:"images/icon-fully-customizable.svg",
  };


  return (
    <div>
      <div className="card-line"></div>
      <div className="cards">
        <Card heading={content1.heading} content={content1.content} image={content1.image}  />
        <Card heading={content2.heading} content={content2.content} image={content2.image} />
        <Card heading={content3.heading} content={content3.content} image={content3.image} />
      </div>
    </div>
  );
}

export default Cards;
