import React from "react";

const FeatureContent = [
  {
    icon: "60",
    meta: "Ceva misto",
    subTitle: `Lorem ipsum some text here I don't know about`,
  },
  {
    icon: "61",
    meta: "Ceva misto",
    subTitle: `Lorem ipsum some text here I don't know about`,
  },
  {
    icon: "62",
    meta: "Ceva misto",
    subTitle: `Lorem ipsum some text here I don't know about`,
  },
];

const FeaturesEight = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title font-rubik">{val.meta}</div>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEight;
