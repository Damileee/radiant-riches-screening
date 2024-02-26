import React from "react";
import styles from "../styles/Features.module.scss"


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
        feature.data && (
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
        )
      ))}
    </div>
  );
};

const FeatureComponent = ({ commonImageSrc, svgSrc, svgAlt, id, imageP, data, data2, h1, strongText }) => {
  const hasSvg = svgSrc && svgAlt;

  return (
    <div className={`${styles.feature__container} ${!hasSvg && styles.feature__noSvg}`}>
      <div className={styles.feature__id}>{id}</div>
      
      {hasSvg && (
        <div className={styles.feature__tag}>
          <img src={svgSrc} alt="icon" />
          <span>{svgAlt}</span>
        </div>
      )}

      <div className={styles.feature_commonImg}>
        <img src={commonImageSrc} alt="Common Image system" />
        <span>{imageP}</span>
      </div>
      
      <div className={styles.feature__data}>
        <strong>{strongText}</strong>
        <span>{data}</span>
        <h1>{h1}</h1>
        <p>{data2}</p>
        <span>Show more</span>
        <img src="arrowDownIcon.svg" alt="arrow down icon" />
      </div>
    </div>
  );
};


export default Features;
