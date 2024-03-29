import ProductBooking from "../Components/productPage/productBooking/ProductBooking";
import ProductCaracteristics from "../Components/productPage/productCaracteristics/ProductCaracteristics";
import ProductDescription from "../Components/productPage/productDescription/ProductDescription";
import ProductHeader from "../Components/productPage/productHeader/ProductHeader";
import ProductLocation from "../Components/productPage/productLocation/ProductLocation";
import ProductGalleryDesktop from "../Components/productPage/productoGallery/galleryDesktop/ProductGalleryDesktop";
import ProductoGalleryMobile from "../Components/productPage/productoGallery/galleryMobile/ProductGalleryMobile";
import ProductPolicies from "../Components/productPage/productPolicies/ProductPolicies";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoaderCircles from "../Components/common/loaderCircles/LoaderCircles";
import { ErrorMessageContainer } from "../Components/productPage/productHeader/styledProduct";
import UserContext from "../context/user.context";
import { useContext } from "react";
import { useProductFav } from "../hooks/useProductFav";

export default function Product() {
  const { id } = useParams();
  const { favs } = useContext(UserContext);
  const { loadingCard, handleFav } = useProductFav();

  const { data: product, loading, error } = useFetch(`/products/${id}`);
  const isFav = favs.some((fav) => fav.id === Number(id));

  const handleShare = () => {
    navigator.share({
      title: `Digital Booking`,
      text: `Comparto contigo este increíble alojamiento que encontré`,
      url: window.location.href,
    });
  };

  return (
    <div>
      {loading && <LoaderCircles height="400px" />}

      {product && (
        <>
          <ProductHeader
            handleFav={handleFav}
            handleShare={handleShare}
            product={product}
            isFav={isFav}
            loadingCard={loadingCard}
          />
          <ProductoGalleryMobile
            images={product?.images}
            handleFav={handleFav}
            handleShare={handleShare}
            product={product}
            isFav={isFav}
            loadingCard={loadingCard}
          />
          <ProductGalleryDesktop images={product.images} />
          <ProductDescription
            title={product.titleDescription}
            description={product.description}
          />
          <ProductCaracteristics amenities={product.amenities} />
          <ProductBooking bookings={product.bookings} />
          <ProductLocation
            // coordinates={product.coordenadas}
            latitude={product.latitude}
            longitude={product.longitude}
            city={product.city}
          />
          {product.policies.length !== 0 && (
            <ProductPolicies policies={product.policies} />
          )}
        </>
      )}

      {error && (
        <ErrorMessageContainer>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
        </ErrorMessageContainer>
      )}
    </div>
  );
}
