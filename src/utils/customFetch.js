const URL = "http://localhost:8080/api";
// const URL = "http://3.144.86.214:8080/api";

export const customFetch = async (path, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);
  try {
    const response = await fetch(`${URL}${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setState(data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

const dateFormarter = (date) => {
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

const getQueryParams = (object) => {
  let finalUrl = `${URL}/productos/filters`;
  let queryParams = [];
  const objectParams = {
    ciudadId: object.city?.id,
    categoriaId: object.category?.id,
    checkIn: object?.startDate && dateFormarter(object?.startDate),
    checkOut: object?.endDate && dateFormarter(object?.startDate),
  };

  for (let param in objectParams) {
    if (objectParams[param] !== undefined && objectParams[param] !== null)
      queryParams.push(`${param}=${objectParams[param]}`);
  };

  if (queryParams.length > 0) 
    finalUrl += `?${queryParams.join("&")}`;
  
  return finalUrl;
};

export const productsFilter = async (
  object,
  setState,
  setLoading,
  setError
) => {
  setError(null);
  setState(null);
  setLoading(true);

  try {
    const response = await fetch(getQueryParams(object));
    if (!response.ok) 
      throw new Error(response.statusText);

    const data = await response.json();
    setState(data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};
