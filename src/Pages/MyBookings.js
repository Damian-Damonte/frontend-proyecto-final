import React, { useState, useContext, useEffect } from "react";
import {
  BookingCardContainer,
  BookingCardsContainer,
  // BookingCardContainer,
  // BookingCardsContainer,
  // DatesContainer,
  ErrorMessageContainer,
  MyBookingsHeader,
  MyBookingsStyled,
  NoBookings,
  NoBookingsContainer,
} from "../Components/myBookings/styledMyBookings";
import UserContext from "../context/user.context";
import { useNavigate } from "react-router-dom";
import { getUserBookings } from "../service/user";
import { BsCalendarXFill as EmptyBookings } from "react-icons/bs";
import { ProductCardContainer } from "../Components/homePage/productSection/styledProductSection";
import ProductCard from "../Components/homePage/productSection/ProductCard";
import { apiDateToUserDate } from "../utils/dateFormater";
import LoaderCircles from "../Components/common/loaderCircles/LoaderCircles";
import { ReactComponent as Back } from "../img/icon-product-back.svg";
import { MaxWidthContainer } from "../Components/common/maxWidthContainer/styledMaxWidthContainer";
import BookingCard from "../Components/myBookings/BookingCard";

export default function MyBookings() {
  const [bookingsState, setBookingsState] = useState({});
  const { user, favs } = useContext(UserContext);
  const navigate = useNavigate();

  const isProductFav = (id) => {
    return favs.some((fav) => id === fav.id);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (user.token) {
      getUserBookings(user.id, user.token, setBookingsState);
    }
  }, [user.id, user.token]);

  return (
    <>
      <MaxWidthContainer $bgcolor={"#545776"}>
        <MyBookingsHeader>
          <div>
            <h3>Mis reservas</h3>
          </div>
          <Back onClick={goBack} />
        </MyBookingsHeader>
      </MaxWidthContainer>
      {bookingsState.loading && <LoaderCircles height="400px" />}

      {bookingsState.bookings && (
        <>
          <MaxWidthContainer>
            <MyBookingsStyled>
              {bookingsState.bookings.length === 0 ? (
                <NoBookings>
                  <NoBookingsContainer>
                    <EmptyBookings />
                    <h4>Aún no has realizado ninguna reserva</h4>
                    <p>
                      Para realizar una reserva debes dirigirte al detalle del
                      alojamiento, dar clic en el botón Iniciar reserva y
                      completar el formulario
                    </p>
                    <button onClick={goBack}>Volver</button>
                  </NoBookingsContainer>
                </NoBookings>
              ) : (

                /* <ProductCardContainer>
                  {bookingsState.bookings?.map((booking) => (
                    <BookingCardContainer key={booking.id}>
                      <DatesContainer>
                        <p>{`Check-in: ${apiDateToUserDate(
                          booking.checkIn
                        )}`}</p>
                        <p>{`Check-out: ${apiDateToUserDate(
                          booking.checkOut
                        )}`}</p>
                      </DatesContainer>
                      <ProductCard
                        product={booking.producto}
                        isFav={isProductFav(booking.producto.id)}
                      />
                    </BookingCardContainer>
                  ))}
                </ProductCardContainer> */
                
                 /* <BookingCardsContainer>
                  <BookingCard />
                </BookingCardsContainer>  */

                <BookingCardsContainer>
                  {bookingsState.bookings?.map(booking => (
                    <BookingCard key={booking.id} booking={booking}/>
                  ))}
                </BookingCardsContainer>

                

              )}
            </MyBookingsStyled>
          </MaxWidthContainer>
        </>
      )}

      {bookingsState.error && (
        <ErrorMessageContainer>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
        </ErrorMessageContainer>
      )}
    </>
  );
}
