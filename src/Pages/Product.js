import React from "react";
import ProductHeader from "../Components/product/productHeader/ProductHeader";
import ProductoGalleryMobile from "../Components/product/productoGallery/ProductGalleryMobile";

export default function Product() {
  const handleFav = () => {
    console.log("FAV");
  };

  const handleShare = () => {
    console.log("SHARE");
  };

  return (
    <div>
      <ProductHeader />
      <ProductoGalleryMobile handleFav={handleFav} handleShare={handleShare} />
    </div>
  );
}
