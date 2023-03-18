import { useEffect } from "react";
import { get } from "../service/api";

const useFetch = (path, setState, setLoading, setError) => {
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      setState(null);
      const response = await get(path);
      if (response.error) {
        setLoading(false);
        setError(response.error);
      } else {
        setState(response.data);
        setLoading(false);
      }
    };
    fetch();
  }, [path, setState, setLoading, setError]);
};

export { useFetch };
