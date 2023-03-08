import React, { useEffect, useState } from "react";
import ProductBooking from "../Components/productPage/productBooking/ProductBooking";
import ProductCaracteristics from "../Components/productPage/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/productPage/productDescription/ProductDescription";
import ProductHeader from "../Components/productPage/productHeader/ProductHeader";
import ProductLocation from "../Components/productPage/productLocation/ProductLocation";
import ProductGalleryDesktop from "../Components/productPage/productoGallery/galleryDesktop/ProductGalleryDesktop";
import ProductoGalleryMobile from "../Components/productPage/productoGallery/galleryMobile/ProductGalleryMobile";
import ProductPolicies from "../Components/productPage/productPolicies/ProductPolicies";
import { getProductById } from "../service/getRequests";
import { useParams } from "react-router-dom";

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
    id: 1,
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
];

const policiesHardcoded = [
  {
    id: 1,
    descripcion: "Detector de humo",
    tipoPolitica: {
      id: 2,
      nombre: "Salud y seguridad",
    },
  },
  {
    id: 5,
    descripcion: "Deposito de seguridad",
    tipoPolitica: {
      id: 2,
      nombre: "Salud y seguridad",
    },
  },
  {
    id: 3,
    descripcion: "No se permiten fiestas",
    tipoPolitica: {
      id: 1,
      nombre: "Normas de la casa",
    },
  },
  {
    id: 4,
    descripcion: "Check-out: 10:00",
    tipoPolitica: {
      id: 1,
      nombre: "Normas de la casa",
    },
  },
  {
    id: 2,
    descripcion:
      "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
    tipoPolitica: {
      id: 3,
      nombre: "Politicas de cancelacion",
    },
  },
];

export default function Product() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductById(id, setProduct);
  }, [id]);

  const handleFav = () => {
    console.log("FAV");
  };

  const handleShare = () => {
    console.log("SHARE");
  };

  return (
    <div>
      {/* agregar loader */}
      {product && (
        <>
          <ProductHeader
            handleFav={handleFav}
            handleShare={handleShare}
            category={product?.categoria.titulo}
            title={product?.titulo}
            city={product?.ciudad}
            nearby={product?.cercanias}
          />
          <ProductoGalleryMobile
            images={product?.imagenes}
            handleFav={handleFav}
            handleShare={handleShare}
          />
          <ProductGalleryDesktop images={product?.imagenes} />
          <ProductDescription
            titleDescription={product?.tituloDescripcion}
            description={product?.descripcion}
          />
          <ProductCaracteristics caracteristics={product?.caracteristicas} />
          <ProductBooking />
          <ProductLocation
            city={product.ciudad}
            coordinates={product?.coordinadas}
          />

          {product.politicas.length !== 0 && (
            <ProductPolicies policies={product.politicas} />
          )}
        </>
      )}
    </div>
  );
}
