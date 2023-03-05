import React from "react";
import ProductBooking from "../Components/product/productBooking/ProductBooking";
import ProductCaracteristics from "../Components/product/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/product/productDescription/ProductDescription";
import ProductHeader from "../Components/product/productHeader/ProductHeader";
import ProductoGalleryMobile from "../Components/product/productoGallery/ProductGalleryMobile";

const caracteristicsHarcoded = [
  {
    id:1,
    nombre:"Cocina"
  },
  {
    id:2,
    nombre:"Estacionamiento gratuito"
  },
  {
    id:3,
    nombre:"Televisor"
  },
  {
    id:4,
    nombre:"Aire acondicionado"
  },
  {
    id:5,
    nombre:"Pileta"
  },
  {
    id:6,
    nombre:"Wifi"
  },
  {
    id:7,
    nombre:"Apto mascotas"
  }
];

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
      <ProductCaracteristics caracteristics={caracteristicsHarcoded} />
      <ProductBooking />
    </div>
  );
}
