import { customFetch } from "../utils/customFetch";

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

export {
  getProductFilters
};
