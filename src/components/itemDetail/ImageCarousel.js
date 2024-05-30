import React from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div key={index} className="carousel-image">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
export default ImageCarousel;
