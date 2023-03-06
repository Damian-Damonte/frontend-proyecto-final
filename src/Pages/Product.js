import React from "react";
import ProductBooking from "../Components/product/productBooking/ProductBooking";
import ProductCaracteristics from "../Components/product/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/product/productDescription/ProductDescription";
import ProductHeader from "../Components/product/productHeader/ProductHeader";
import ProductLocation from "../Components/product/productLocation/ProductLocation";
import ProductGalleryDesktop from "../Components/product/productoGallery/galleryDesktop/ProductGalleryDesktop";
import ProductoGalleryMobile from "../Components/product/productoGallery/galleryMobile/ProductGalleryMobile";

const caracteristicsHarcoded = [
  {
    id: 1,
    nombre: "Cocina",
  },
  {
    id: 2,
    nombre: "Estacionamiento gratuito",
  },
  {
    id: 3,
    nombre: "Televisor",
  },
  {
    id: 4,
    nombre: "Aire acondicionado",
  },
  {
    id: 5,
    nombre: "Pileta",
  },
  {
    id: 6,
    nombre: "Wifi",
  },
  {
    id: 7,
    nombre: "Apto mascotas",
  },
];

const coordinates = {
  latitud: -53.253523,
  longitud: -52.26948,
};

const imagesHardcoded = [
  {
    id:1,
    url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id:2,
    url:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    id:3,
    url:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
  },
  {
    id:4,
    url:"https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id:5,
    url:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  }
]

export default function Product() {
  const handleFav = () => {
    console.log("FAV");
  };

  const handleShare = () => {
    console.log("SHARE");
  };

  return (
    <div>
      <ProductHeader handleFav={handleFav} handleShare={handleShare} />
      <ProductoGalleryMobile
        images={imagesHardcoded}
        handleFav={handleFav}
        handleShare={handleShare}
      />
      <ProductGalleryDesktop images={imagesHardcoded} />
      <ProductDescription />
      <ProductCaracteristics caracteristics={caracteristicsHarcoded} />
      <ProductBooking />
      <ProductLocation coordinates={coordinates} />
    </div>
  );
}
