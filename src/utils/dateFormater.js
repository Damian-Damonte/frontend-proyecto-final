export const dateToApiDate = (date) => {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString();

  return `${year}-${month}-${day}`;
};

export const dateToUserDate = (date) => {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

export const apiDateToDate = (apiDate) => {
  const [year, month, day] = apiDate.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const apiDateToUserDate = (apiDate) => {
  const partes = apiDate.split('-'); 
  const anio = partes[0];
  const mes = partes[1];
  const dia = partes[2];
  const fechaConvertida = `${dia}/${mes}/${anio}`; 
  return fechaConvertida;
}