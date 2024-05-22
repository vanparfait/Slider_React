import React, { useState } from "react";
import sliderData from "../../data/sliderData";
import "../Slider/Slider.css";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  function nextSlide(newIndex) {
    setSliderIndex(sliderIndex + 1);
    if (sliderIndex > sliderData.length) {
      setSliderIndex(1);
    }
  }

  function previousSlide() {
    setSliderIndex(sliderIndex - 1);
  }
  if (sliderIndex < 1) {
    setSliderIndex(sliderData.length);
  }

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {" "}
          {sliderData.find((obj) => obj.id === sliderIndex).description}{" "}
        </p>
        <img
          src={`./images/img-${sliderIndex}.jpg`}
          alt="gggggg"
          className="slider-img"
        />
        <button
          onClick={() => previousSlide()}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous-image" />
        </button>
        <button
          onClick={() => nextSlide()}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next-image" />
        </button>
      </div>
    </>
  );
};

export default Slider;
