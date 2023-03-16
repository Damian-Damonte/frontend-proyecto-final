export const getRaitingScale = (rating) => {
  if (!rating)
    return "-";
    
  rating = Math.floor(rating);
  if (rating >= 1 && rating <= 3) {
    return "Malo";
  } else if (rating <= 5) {
    return "Regular";
  } else if (rating <= 6) {
    return "Bueno";
  } else if (rating <= 8) {
    return "Muy bueno";
  } else if (rating <= 10) {
    return "Excelente";
  } else {
    return "-";
  }
};
