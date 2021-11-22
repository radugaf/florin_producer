import React from "react";

const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Step 1",
    subTitle: `Descriere step 1`,
  },
  {
    icon: "ils_16",
    meta: "Step 2",
    subTitle: `Descriere step 2`,
  },
  {
    icon: "ils_17",
    meta: "Step 3",
    subTitle: `Descriere step 3`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <img src={`images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
