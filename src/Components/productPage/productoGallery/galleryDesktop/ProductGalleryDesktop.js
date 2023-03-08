import React, { useState } from "react";
import GalleryDesktop from "./GalleryDesktop";
import { GalleryDesktopContainer } from "./styledGalleryDesktop";

export default function ProductGalleryDesktop({ images }) {
  const [showGallery, setShowGallery] = useState(false);

  const handleShowGallery = () => {
    showGallery
      ? document.body.classList.remove("disableScroll")
      : document.body.classList.add("disableScroll");
    setShowGallery(!showGallery);
  };

  const imgGrid = images && (images.length > 5 ? images.slice(0, 5) : images);
  const galleryItems = images?.map((img) => ({
    original: img.url,
    thumbnail: img.url,
  }));

  return (
    <>
    {/* agregar loader */}
      {images && (
        <GalleryDesktopContainer $countImg={imgGrid.length}>
              {imgGrid.map((img) => (
                <img src={img.url} key={img.id} alt={img.titulo} />
              ))}

              <p onClick={handleShowGallery}>Ver más</p>
              <GalleryDesktop
                galleryItems={galleryItems}
                handleShowGallery={handleShowGallery}
                showGallery={showGallery}
              />
        </GalleryDesktopContainer>
      )}
    </>
  );
}
