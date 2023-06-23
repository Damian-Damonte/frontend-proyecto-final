import { post } from "./api";

export const postReserva = async (payload, token, setBookingState) => {
  setBookingState({ products: null, loading: true, error: null });
  const response = await post("/bookings", payload, token);

  response.error
    ? setBookingState({ booking: null, loading: false, error: response.error })
    : setBookingState({ booking: response.data, loading: false, error: null });
};