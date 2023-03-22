import { useEffect } from "react";
import { get } from "../service/api";

const useFetch = (path, setState) => {
  useEffect(() => {
    const fetch = async () => {
      setState({ data: null, loading: true, error: null });
      const response = await get(path);
      response.error
        ? setState({ data: null, loading: false, error: response.error })
        : setState({ data: response.data, loading: false, error: null });
    };
    fetch();
  }, [path, setState]);
};

export { useFetch };
