import React, { useEffect, useState } from "react";
import sliderData from "../../data/sliderData";
import "../Slider/Slider.css";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [isPause, setIsPause] = useState(false);

  function nextSlide() {
    let newIndex = sliderIndex + 1;
    if (newIndex > sliderData.length) {
      newIndex = 1;
    }
    setSliderIndex(newIndex);
  }

  function previousSlide() {
    let newIndex = sliderIndex - 1;

    if (newIndex < 1) {
      newIndex = sliderData.length;
    }
    setSliderIndex(newIndex);
  }

  // const startSlider = () => {
  //   setIsPause(false);
  // };
  // const pauseSlider = () => {
  //   setIsPause(true);
  // };

  useEffect(() => {
    if (!isPause) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [sliderIndex]); // Dependency array includes sliderIndex to reset interval on slide change

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
