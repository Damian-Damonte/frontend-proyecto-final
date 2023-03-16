import { useEffect } from "react";
import { get } from "../service/api";

const useFetch = (path, setState, setLoading, setError) => {
  useEffect(() => {
   get(path, setState, setLoading, setError);
  }, [path, setState, setLoading, setError]);
};

export { useFetch };