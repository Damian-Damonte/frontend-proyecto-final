import React, { useEffect, useState } from "react";
import ProductBooking from "../Components/productPage/productBooking/ProductBooking";
import ProductCaracteristics from "../Components/productPage/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/productPage/productDescription/ProductDescription";
import ProductHeader from "../Components/productPage/productHeader/ProductHeader";
import ProductLocation from "../Components/productPage/productLocation/ProductLocation";
import ProductGalleryDesktop from "../Components/productPage/productoGallery/galleryDesktop/ProductGalleryDesktop";
import ProductoGalleryMobile from "../Components/productPage/productoGallery/galleryMobile/ProductGalleryMobile";
import ProductPolicies from "../Components/productPage/productPolicies/ProductPolicies";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../Components/common/loader/Loader";
import { ErrorMessageContainer } from "../Components/productPage/productHeader/styledProduct";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useFetch(`/productos/${id}`, setProduct, setLoading, setError);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleFav = () => {
    console.log("FAV");
  };

  const handleShare = () => {
    console.log("SHARE");
  };

  return (
    <div>
      {loading && <Loader height="400px" />}

      {product && (
        <>
          <ProductHeader
            handleFav={handleFav}
            handleShare={handleShare}
            product={product}
          />
          <ProductoGalleryMobile
            images={product?.imagenes}
            handleFav={handleFav}
            handleShare={handleShare}
          />
          <ProductGalleryDesktop images={product?.imagenes} />
          <ProductDescription product={product} />
          <ProductCaracteristics caracteristics={product?.caracteristicas} />
          <ProductBooking reservas={product?.reservas}/>
          <ProductLocation product={product} />
          {product.politicas.length !== 0 && (
            <ProductPolicies policies={product.politicas} />
          )}
        </>
      )}

      {error && (
        <ErrorMessageContainer>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error, por favor vuelva a intetar más tarde</p>
        </ErrorMessageContainer>
      )}
    </div>
  );
}
