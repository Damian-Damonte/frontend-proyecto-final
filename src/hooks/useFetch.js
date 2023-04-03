import { useEffect, useState } from "react";
import { get } from "../service/api";

const useFetch = (path, token=null) => {
  const [fetchState, setFetchState] = useState({});

  useEffect(() => {
    const fetch = async () => {
      setFetchState({ data: null, loading: true, error: null });
      const response = await get(path, token);
      response.error
        ? setFetchState({ data: null, loading: false, error: response.error })
        : setFetchState({ data: response.data, loading: false, error: null });
    };

    fetch();
  }, [path, token]);

  return fetchState;
};

export default useFetch;
