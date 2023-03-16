export const apiDateFormarter = (date) => {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString();

  return `${year}-${month}-${day}`;
};

export const userDateFormater = (date) => {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
