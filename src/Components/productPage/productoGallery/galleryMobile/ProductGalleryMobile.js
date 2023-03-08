import React from "react";
import { BtnsContainer, GalleryMobileContainer } from "./styledGalleryMobile";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ReactComponent as Share } from "../../../../img/icon-share.svg";
import { ReactComponent as Fav } from "../../../../img/icon-fav-empty.svg";

export default function ProductoGalleryMobile({
  images,
  handleFav,
  handleShare,
}) {
  const galleryItems = images?.map((img) => ({ original: img.url, thumbnail: img.url }));

  return (
    <GalleryMobileContainer>
      {galleryItems && (
        <ImageGallery
          items={galleryItems}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          showThumbnails={false}
          showNav={false}
          slideInterval={3000} //por defecto es 3000
          showIndex={true}
        />
      )}
      <BtnsContainer>
        <Share onClick={handleShare} />
        <Fav onClick={handleFav} />
      </BtnsContainer>
    </GalleryMobileContainer>
  );
}
