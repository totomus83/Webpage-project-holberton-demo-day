import React, { useState } from "react";

const images = [
  "/client/images/puzzlerune2.png",
  "/client/images/room1_view.png",
  "/client/images/runeboat2.png",
  "/client/images/BeachConifers.png",
  "/client/images/BeachFireflyTree.png",
  "/client/images/BeachForest.png",
  "/client/images/SandMapVisible.png",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      <div className="main-image-wrapper">
        <img src={selectedImage} alt="Selected" className="main-image" />
      </div>
      <div className="thumbnail-row">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${selectedImage === img ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
