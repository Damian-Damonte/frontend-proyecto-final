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

export {
  allCategorys,
  allProducts,
  allCitys
};