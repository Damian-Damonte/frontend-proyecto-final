import { get, post } from "./api";
import { dateToApiDate } from "../utils/dateFormater";

const getFilterQueryParams = (page, searchParams) => {
  let finalPath = `/productos/filters?page=${page}`;
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

  if (queryParams.length > 0) finalPath += `&${queryParams.join("&")}`;

  return finalPath;
};

const getFilteredProducts = async (
  page,
  searchParams,
  setProductState,
  setPageData,
  setShowPager
) => {
  setProductState({ products: null, loading: true, error: null });
  const response = await get(getFilterQueryParams(page, searchParams));
  if (response.error) {
    setProductState({ products: null, loading: false, error: response.error });
    setShowPager(false);
  } else {
    setProductState({
      products: response.data.content,
      loading: false,
      error: null,
    });
    setShowPager(response.data.content.length > 0);
    setPageData({
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
    });
  }
};

const getRandomProducts = async (setProductState, setShowPager) => {
  setProductState({ products: null, loading: true, error: null });

  const response = await get("/products/random");
  if (response.error) {
    setProductState({ products: null, loading: false, error: response.error });
  } else {
    setProductState({ products: response.data, loading: false, error: null });
    setShowPager(response.data.length > 0);
  }
};

const productFav = async (payload, token) => {
  return post("/usuarios/favoritos", payload, token);
};

const postProduct = async (payload, token, setProductState) => {
  setProductState({ product: null, loading: true, error: null });

  const response = await post("/productos", payload, token);

  response.error
    ? setProductState({ product: null, loading: false, error: response.error })
    : setProductState({ product: response.data, loading: false, error: null });
};

export { getFilteredProducts, getRandomProducts, productFav, postProduct };
