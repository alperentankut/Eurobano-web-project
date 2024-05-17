import { useState } from "react";
import "../scss/slider.css";
import homePhoto from "../assets/homePhoto.jpeg";
import HomePage from "./HomePage";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homePhoto, homePhoto, homePhoto, homePhoto];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        ))}
      </div>

      <div className="fixed-content">
        <HomePage
          prev={handlePrev}
          next={handleNext}
          current={currentIndex + 1}
          length={images.length}
        />
      </div>

      
    </div>
  );
};

export default HomeSlider;
