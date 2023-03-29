export const createProductValidations = (data) => {
  let errors = [];
  const isNegativeNumber = Number(data.precioPorNoche) < 0;

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
  else if (isNegativeNumber)
    errors.precioPorNoche = "El precio por noche debe ser un número positivo";

  return errors;
};
