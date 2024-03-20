import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Sri Venkateshwaraa Medical College Hospital & Research Centre is
            promoted by Ramachandra Educational Trust, Chennai. The Chairman
            Shri. B. Ramachandran is a successful educationalist and a
            visionary.Our holistic approach to healthcare begins with primary
            care and extends to specialized treatments. We ensure multi
            disciplinary approach and patient centric care, which are essential
            for compassionate care. At SVMC every patient is guaranteed the best
            medical, diagnostic and surgical services. Our services reach over
            5,00,000 outpatients and 40,000 inpatients a year.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
