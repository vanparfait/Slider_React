import { useState, useEffect } from "react";

const Slider = ({ sliderData }) => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === sliderData.length ? 1 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 1 ? sliderData.length : prevIndex - 1
    );
  };

  const startSlider = () => {
    setIsPaused(false);
  };

  const pauseSlider = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isPaused]); // Dependency array includes isPaused to stop/start the interval

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div
        className="slider"
        onMouseEnter={pauseSlider}
        onMouseLeave={startSlider}
      >
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex)?.description}
        </p>
        <img
          src={`./images/img-${sliderIndex}.jpg`}
          alt="slide"
          className="slider-img"
        />
        <button
          onClick={previousSlide}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous-image" />
        </button>
        <button onClick={nextSlide} className="navigation-button next-button">
          <img src={rightChevron} alt="next-image" />
        </button>
      </div>
      <div className="controls">
        <button onClick={pauseSlider}>Pause</button>
        <button onClick={startSlider}>Play</button>
      </div>
    </>
  );
};

export default Slider;
