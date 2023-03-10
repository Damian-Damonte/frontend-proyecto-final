const URL = "http://localhost:8080/api";
// const URL = "http://3.144.86.214:8080/api";

export const customFetch = async (path, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);
  try {
    const response = await fetch(`${URL}${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setState(data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};
