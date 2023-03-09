const URL = "http://localhost:8080/api";

const allCategorys = async (setState) => {
  const response = await fetch(`${URL}/categorias`);
  const data = await response.json();
  setState(data);
};

const allProducts = async (setState) => {
  const response = await fetch(`${URL}/productos`);
  const data = await response.json();
  setState(data);
};

const allCitys = async (setState) => {
  const response = await fetch(`${URL}/ciudades`);
  const data = await response.json();
  setState(data);
};

const getProductById = async (id, setState) => {
  const response = await fetch(`${URL}/productos/${id}`);
  const data = await response.json();
  setState(data);
};

const getProductFilters = async (
  cityId = null,
  categoriaId = null,
  setState,
  setLoading,
  setError
) => {
  let pathFilters = `/productos/filters`;

  if (cityId && categoriaId)
    pathFilters += `?ciudadId=${cityId}&categoriaId=${categoriaId}`;
  else if (cityId || categoriaId) {
    pathFilters += cityId
      ? `?ciudadId=${cityId}`
      : `?categoriaId=${categoriaId}`;
  };

  customFetch( pathFilters, setState, setLoading, setError)
};

const getRandomProducts = async (setState) => {
  const response = await fetch(`${URL}/productos/random`);
  const data = await response.json();
  console.log(data);
  setState(data);
};

const customFetch = async (path, setState, setLoading, setError) => {
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

export {
  allCategorys,
  allProducts,
  allCitys,
  getProductById,
  getProductFilters,
  getRandomProducts,
  customFetch
};
