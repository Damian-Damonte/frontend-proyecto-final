export const createProductValidations = (data, images) => {
  let errors = [];
  const isPriceNegative = Number(data.precioPorNoche) < 0;
  const isLatitudeValid =
    Number(data.latitud) < -90 || Number(data.latitud) > 90;
  const isLongitudeValid =
    Number(data.longitud) < -180 || Number(data.latitud) > 180;
  const currentImages = Object.values(images).filter((img) => img.url !== "");

  if (!data.nombre) errors.nombre = "Debe colocarle un nombre al producto";
  else if (data.nombre.length < 6)
    errors.nombre = "El nombre debe tener más de 5 caracteres";

  if (!data.direccion) errors.direccion = "Debe colocar una dirección";
  else if (data.direccion.length < 6)
    errors.direccion = "La dirección debe tener más de 5 caracteres";

  if (!data.categoria) errors.categoria = "Debe seleccionar una categoría";

  if (!data.ciudad) errors.ciudad = "Debe seleccionar una ciudad";

  if (!data.descripcion) errors.descripcion = "Debe colocar una descripción";
  else if (data.descripcion.length < 6)
    errors.descripcion = "La descripción debe tener más de 5 caracteres";

  if (!data.titulo) errors.titulo = "Debe colocar un título";
  else if (data.titulo.length < 6)
    errors.titulo = "El titulo debe tener más de 5 caracteres";

  if (!data.precioPorNoche)
    errors.precioPorNoche = "Debe colocar un precio por noche";
  else if (isPriceNegative)
    errors.precioPorNoche = "El precio por noche debe ser un número positivo";

  if (!data.latitud) errors.latitud = "Debe colocar la latitud";
  else if (isLatitudeValid)
    errors.latitud = "La latitud no debe ser menor a -90 ni mayor a 90";

  if (!data.longitud) errors.longitud = "Debe colocar la longitud";
  else if (isLongitudeValid)
    errors.longitud = "La longitud no debe ser menor a -180 ni mayor a 180";

  if (!data.politicas.normasDeLaCasa)
    errors.normasDeLaCasa = "Debe agregar normas de la casa";
  if (!data.politicas.saludYSeguridad)
    errors.saludYSeguridad = "Debe agregar polícas de salud y seguridad";
  if (!data.politicas.politicaDeCancelacion)
    errors.politicaDeCancelacion = "Debe agregar políticas de cancelación";

  if (!currentImages.length)
    errors.imagenes = "El producto debe contener una imagen";

  return errors;
};
