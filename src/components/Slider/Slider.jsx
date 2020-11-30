import { useState, useEffect } from "react";

//styles
import "./Slider.scss";

//constants
import {sliderData} from '../../constants/Slider'

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide >= sliderData.length - 1) {
        selectActiveSlide(0);
      } else {
        selectActiveSlide(activeSlide + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  });

  const selectActiveSlide = (number) => {
    setFadeIn(true);
    setActiveSlide(number);
  };

  const endAnimation = () => {
    setFadeIn(false);
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider__line-container">
          <div className="slider__line slider__line-left"></div>
          <div className="slider__line slider__line-center"></div>
          <div className="slider__line slider__line-right"></div>
        </div>
        <p className="slider__subtitle"> specialties</p>
        <div className="slider__main">
          <div
            className={`slider__image-container ${fadeIn ? "fade" : undefined}`}
            onAnimationEnd={endAnimation}
          >
            <img
              src={sliderData[activeSlide].image}
              className="slider__image"
              alt="slider_image"
              width="100%"
            />
          </div>
          <div className="slider__description">
            <p
              className={`slider__description-title ${
                fadeIn ? "fade" : undefined
              }`}
            >
              {sliderData[activeSlide].title}
            </p>
            <p
              className={`slider__description-subtitle  ${
                fadeIn ? "fade" : undefined
              }`}
            >
              {sliderData[activeSlide].subtitle}
            </p>
            <p
              className={`slider__description-main ${
                fadeIn ? "fade" : undefined
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna. Integer ullamcorper
              neque eu purus euismod, ac faucibus mauris posuere. Morbi non
              ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui
              odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris
              tincidunt feugiat diam convallis pharetra. Nulla facilisis semper
              laoreet.
            </p>
          </div>
        </div>
        <div className="slider__button-container">
          {sliderData.map((el, index) => (
            <div
              key={index}
              onClick={() => selectActiveSlide(index)}
              className={`slider__button ${
                index === activeSlide ? "slider__button-active" : undefined
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
