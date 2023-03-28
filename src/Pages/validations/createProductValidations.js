export const createProductValidations = (data) => {
  let errors = [];

  if (!data.nombre) errors.nombre = "Debe colocarle un nombre al producto";

  if (!data.direccion) errors.direccion = "Debe colocar una dirección";

  if (!data.categoria) errors.categoria = "Debe seleccionar una categoría";

  if (!data.ciudad) errors.ciudad = "Debe seleccionar una ciudad";

  if (!data.descripcion) errors.descripcion = "Debe colocar una descripción";

  return errors;
};
