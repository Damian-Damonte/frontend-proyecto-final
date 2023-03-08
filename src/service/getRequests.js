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

const getProductFilters = async ( cityId=null, categoriaId=null, setState ) => {
  let URL_FILTERS = `${URL}/productos/filters`;

  if(cityId && categoriaId)
    URL_FILTERS += `?ciudadId=${cityId}&categoriaId=${categoriaId}`;
  else if(cityId || categoriaId) {
    URL_FILTERS += cityId 
      ? `?ciudadId=${cityId}`
      : `?categoriaId=${categoriaId}`;
  };

  const response = await fetch(URL_FILTERS);
  const data = await response.json();
  setState(data);
}

export {
  allCategorys,
  allProducts,
  allCitys,
  getProductById,
  getProductFilters
};