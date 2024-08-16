import { useState } from 'react';
import './carousel.css'; // Import your CSS

// Images import (update paths as needed)
import image1 from '../../assets/images/carousel-img05.png';
import image2 from '../../assets/images/carousel-img06.png';
import image3 from '../../assets/images/carousel-img01.png';
import image4 from '../../assets/images/carousel-img02.png';
import image5 from '../../assets/images/carousel-img03.png';
import image6 from '../../assets/images/carousel-img04.png';

const images = [image1, image2, image3, image4, image5, image6];
const imagesToShow = 4; // Number of images to show at once
const imageWidth = 302; // Width of each image
const gap = 16; // Gap between images in pixels (1rem = 16px)

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Initialize to start from image 2
  const totalImages = images.length;
  const carouselWidth = (imageWidth) * imagesToShow; // Total width to show 4 images
  const containerWidth = (imageWidth) * totalImages; // Total width including gaps

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalImages - imagesToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalImages - imagesToShow ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel-container" style={{ width: `${carouselWidth}px` }}>
      <div
        className="carousel-images-container"
        style={{
          width: `${containerWidth}px`, // Set width dynamically including gaps
          transform: `translateX(-${currentIndex * (imageWidth + gap)}px)` // Adjust translation for gap
        }}
      >
        {images.map((image, index) => (
          <div className="carousel-image-wrapper" key={index}>
            <img src={image} alt={`carousel-img-${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow left-arrow" onClick={handlePrev}>❮</button>
      <button className="arrow right-arrow" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Carousel;
