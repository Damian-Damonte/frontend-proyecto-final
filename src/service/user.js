import { get } from "./api";

export const getUserData = async (userId, token) => {
  return await get(`/users/${userId}`, token);
};

export const getUserBookings = async (userId, token, setBookingsState) => {
  setBookingsState({ bookings: null, loading: true, error: null });
  const response = await get(`/bookings/user/${userId}`, token);

  response.error
    ? setBookingsState({ bookings: null, loading: false, error: response.error })
    : setBookingsState({ bookings: response.data, loading: false, error: null });
};