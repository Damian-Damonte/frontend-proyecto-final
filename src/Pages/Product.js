import React from "react";
import ProductCaracteristics from "../Components/product/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/product/productDescription/ProductDescription";
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
      <ProductDescription />
      <ProductCaracteristics />
    </div>
  );
}
