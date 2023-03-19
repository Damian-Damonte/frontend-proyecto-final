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

const useFetch2 = (path, setProductState) => {
  useEffect(() => {
    const fetch = async () => {
      setProductState({ product: null, loading: true, error: null });
      const response = await get(path);
      if (response.error) {
        setProductState({ product: null, loading: false, error: response.error });
      } else {
        setProductState({ product: response.data, loading: false, error: null });
      }
    };
    fetch();
  }, [path, setProductState]);
};

export { useFetch, useFetch2 };
