import React, { useState, useEffect } from "react";
import GalleryDesktop from "./GalleryDesktop";
import { GalleryDesktopContainer } from "./styledGalleryDesktop";

export default function ProductGalleryDesktop({ images }) {
  const [showGallery, setShowGallery] = useState(false);

  const handleShowGallery = () => {
    showGallery
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
    setShowGallery(!showGallery);
  };

  const imgGrid = images.length > 5 ? images.slice(0, 5) : images;
  const galleryItems = images.map((img) => ({
    original: img.url,
    thumbnail: img.url,
  }));

  return (
    <GalleryDesktopContainer $countImg={imgGrid.length}>
      {imgGrid.map((img) => (
        <img src={img.url} key={img.id} />
      ))}
      <p onClick={handleShowGallery}>Ver más</p>
      {showGallery && (
        <GalleryDesktop
          galleryItems={galleryItems}
          handleShowGallery={handleShowGallery}
        />
      )}
    </GalleryDesktopContainer>
  );
}
