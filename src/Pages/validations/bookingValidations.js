export const bookingValidations = (form) => {
  let errors = {};
  if (!form.city) errors.city = "Este campo es obligatorio";

  if (!form.checkIn || !form.checkOut)
    errors.dates = "Debe seleccionar las fechas de check-in y check-out";

  if (!form.arribalTime)
    errors.arribalTime = "Debe seleccionar la fecha estimada de llegada";

  return errors;
};
