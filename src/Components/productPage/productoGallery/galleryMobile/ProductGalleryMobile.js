import React from "react";
import { BtnsContainer, GalleryMobileContainer } from "./styledGalleryMobile";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ReactComponent as Share } from "../../../../img/icon-share.svg";
import { ReactComponent as Fav } from "../../../../img/icon-fav-empty.svg";
import { LoaderClassicStyled } from "../../../common/loaderClassic/styledLoaderClassic";
import { ReactComponent as FavFull } from "../../../../img/icon-fav-full.svg";

export default function ProductoGalleryMobile({
  images,
  handleFav,
  handleShare,
  product,
  isFav,
  loadingCard,
}) {
  const galleryItems = images?.map((img) => ({
    original: img.url,
    thumbnail: img.title,
  }));

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
          slideInterval={3000}
          showIndex={true}
        />
      )}
      {/* <BtnsContainer>
        <Share onClick={handleShare} />
        {loadingCard ? (
            <LoaderClassicStyled
              $size="20px"
              $loaderColor="#fff"
              $bgcColor="#383B58"
              $borderWidth="2px"
            />
          ) : isFav ? (
            <FavFull onClick={() => handleFav(product)} />
          ) : (
            <Fav onClick={() => handleFav(product)} />
          )}
      </BtnsContainer> */}
    </GalleryMobileContainer>
  );
}
