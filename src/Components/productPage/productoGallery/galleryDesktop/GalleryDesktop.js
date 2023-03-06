import { GalleryDesktopStyled } from "./styledGalleryDesktop";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ReactComponent as BtnCloseMenu } from "../../../../img/cross-white.svg";


export default function GalleryDesktop({ galleryItems, handleShowGallery, showGallery }) {
  
  return (
    <GalleryDesktopStyled $showGallery={showGallery}>
      <ImageGallery
        items={galleryItems}
        showFullscreenButton={false}
        showPlayButton={false}
      />
      <BtnCloseMenu onClick={handleShowGallery}/>
    </GalleryDesktopStyled>
  );
}
