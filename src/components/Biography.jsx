import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We at Sri Venkateshwaraa Medical College Hospital & Research Centre
            on the Puducherry-Villupuram National Highway are committed to
            creating a healthier society. Towards this end, we provide one of
            the best tertiary care services in the state. Our holistic approach
            to healthcare begins with primary care and extends to specialized
            treatments. We ensure multi disciplinary approach and patient
            centric care, which are essential for compassionate care. At SVMC
            every patient is guaranteed the best medical, diagnostic and
            surgical services. Our services reach over 5,00,000 outpatients and
            40,000 inpatients a year.
          </p>
          <p>We are all in 2024!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
