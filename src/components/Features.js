import React from "react";
// import { index } from "../pages";

const Features = () => {
  const commonImageSrc = "systemImg.jpg";

  const featuresData = [
    {
      id: 1,
      svgSrc: "cupIcon.svg",
      svgAlt: "Best Choice",
      imageP: "Builder 1",
      data: `<strong>WixPro 72-Inch Responsive Website Builder-<strong /> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)`,
      h1: "Main highlights",
      data2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    },
    {
        id: 2,
        svgSrc: "cupIcon.svg",
        svgAlt: "Best Choice",
        imageP: "Builder 1",
        data: `<strong>WixPro 72-Inch Responsive Website Builder-<strong /> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)`,
        h1: "Main highlights",
        data2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
  
    },
    {
        id: 3,
        svgSrc: "cupIcon.svg",
        svgAlt: "Best Choice",
        imageP: "Builder 1",
        data: `<strong>WixPro 72-Inch Responsive Website Builder-<strong /> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)`,
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
        />
      ))}
    </div>
  );
};

const FeatureComponent = ({ commonImageSrc, svgSrc, svgAlt }) => (
  <div>
    <img src={commonImageSrc} alt="Common Image Alt Text" />
    <img src={svgSrc} alt={svgAlt} />
  </div>
);

export default Features;
