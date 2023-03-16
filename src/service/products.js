import { get } from "./api";
import { dateToApiDate } from "../utils/dateFormater";

const getFilterQueryParams = (searchParams) => {
  let finalPath = `/productos/filters`;
  let queryParams = [];
  const objectParams = {
    ciudadId: searchParams.city?.id,
    categoriaId: searchParams.category?.id,
    checkIn: searchParams?.startDate && dateToApiDate(searchParams?.startDate),
    checkOut: searchParams?.endDate && dateToApiDate(searchParams?.endDate),
  };

  for (let param in objectParams) {
    if (objectParams[param] !== undefined && objectParams[param] !== null)
      queryParams.push(`${param}=${objectParams[param]}`);
  }

  if (queryParams.length > 0) finalPath += `?${queryParams.join("&")}`;

  return finalPath;
};

const getFilteredProducts = (searchParams, setState, setLoading, setError) => {
  get(getFilterQueryParams(searchParams), setState, setLoading, setError);
};

const getRandomProducts = (setState, setLoading, setError) => {
  get("/productos/random", setState, setLoading, setError)
};


export {getFilteredProducts, getRandomProducts}