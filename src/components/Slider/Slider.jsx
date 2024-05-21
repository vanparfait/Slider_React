import React from "react";
import "../Slider/Slider.css";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

const Slider = () => {
  return (
    <>
      <p className="index-info">3 / 5</p>
      <div className="slider">
        <p className="image-info">Bedroom</p>
        <img src="./images/img-3.jpg" alt="gggggg" className="slider-img" />
        <button className="navigation-button prev-button">
          <img src={leftChevron} alt="previous-image" />
        </button>
        <button className="navigation-button next-button">
          <img src={rightChevron} alt="next-image" />
        </button>
      </div>
    </>
  );
};

export default Slider;
