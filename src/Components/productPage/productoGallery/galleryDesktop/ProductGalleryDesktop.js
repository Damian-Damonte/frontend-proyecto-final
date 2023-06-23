import React, { useState, useEffect } from "react";
import GalleryDesktop from "./GalleryDesktop";
import { GalleryDesktopContainer } from "./styledGalleryDesktop";
import { MaxWidthContainer } from "../../../common/maxWidthContainer/styledMaxWidthContainer";
import ImgWithSkeleton from "./ImgWithSkeleton";

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

  useEffect(() => {
    return () => {
      document.body.classList.remove("disableScroll");
    };
  }, []);

  return (
    <>
      {images && (
        <MaxWidthContainer $bgcolor="#fff">
          <GalleryDesktopContainer $countImg={imgGrid.length}>
            {imgGrid.map((img) => (
              <ImgWithSkeleton url={img.url} alt={img.title} key={img.id} />
            ))}

            <p onClick={handleShowGallery}>Ver más</p>
            <GalleryDesktop
              galleryItems={galleryItems}
              handleShowGallery={handleShowGallery}
              showGallery={showGallery}
            />
          </GalleryDesktopContainer>
        </MaxWidthContainer>
      )}
    </>
  );
}
