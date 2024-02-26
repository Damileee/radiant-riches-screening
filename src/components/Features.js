import React from "react";

const Features = () => {
  const commonImageSrc = "systemImg.jpg";

  const featuresData = [
    {
      id: 1,
      svgSrc: "cupIcon.svg",
      svgAlt: "Best Choice",
      imageP: "Builder 1",
      strongText: "WixPro 72-Inch Responsive Website Builder- ",
      data: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      h1: "Main highlights",
      data2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    },
    {
        id: 2,
        svgSrc: "diamondIcon.svg",
        svgAlt: "Best Value",
        imageP: "Builder",
        strongText: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
        data: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        h1: "Main highlights",
        data2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
  
    },
    {
        id: 3,
        svgSrc: "cupIcon.svg",
        svgAlt: "Best Choice",
        imageP: "Builder 1",
        strongText: "WixPro 72-Inch Responsive Website Builder- ",
        data: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        h1: "Main highlights",
        data2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
  
      },
  ];

  return (
    <div>
      {featuresData.map((feature) => (
        <FeatureComponent
          key={feature.id}
          commonImageSrc={commonImageSrc}
          svgSrc={feature.svgSrc}
          svgAlt={feature.svgAlt}
          id={feature.id}
          imageP={feature.imageP}
          data={feature.data}
          data2={feature.data2}
          h1={feature.h1}
          strongText={feature.strongText}
        />
      ))}
    </div>
  );
};

const FeatureComponent = ({ commonImageSrc, svgSrc, svgAlt, id, imageP, data, data2, h1, strongText }) => (
  <div>
    <div>{id}</div>
    <div>
      <img src={svgSrc} alt="icon"/>
      <span>{svgAlt}</span>
    </div>
    <div>
     <img src={commonImageSrc} alt="Common Image system" />
      <span>{imageP}</span>
    </div>
    <div>
      <strong>{strongText}</strong>
      <span>{data}</span>
      <h1>{h1}</h1>
      <p>{data2}</p>
    </div>
  </div>
);

export default Features;
