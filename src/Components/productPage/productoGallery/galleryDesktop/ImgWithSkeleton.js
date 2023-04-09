import React, { useState } from "react";
import { ImgWithSkeletonStyled } from "./styledGalleryDesktop";

export default function ImgWithSkeleton({ url, alt }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleLoaded = () => {
    setImgLoaded(true);
  };
  
  return (
    <ImgWithSkeletonStyled $imgLoaded={imgLoaded}>
      {!imgLoaded && <div></div>}
      <img src={url} alt={alt} onLoad={handleLoaded}/>
    </ImgWithSkeletonStyled>
  );
}
