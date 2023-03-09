import { useEffect } from "react";

const URL = "http://localhost:8080/api";

const useFetch = (path, setState, setLoading, setError) => {

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${path}`);
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setState(data);
      } catch(error) {
        setError(error)
      }
      setLoading(false);
    };
    fetchData();
  }, [path, setState, setLoading, setError]);
};

export { useFetch };