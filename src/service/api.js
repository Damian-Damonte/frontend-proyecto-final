const API_URL = "http://localhost:8080/api";
// const API_URL = "http://3.144.86.214:8080/api";

const get = async (path, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);
  try {
    const response = await fetch(`${API_URL}${path}`);
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

const post = async (path, data, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API_URL}${path}`, options);
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

const put = async (path, data, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API_URL}${path}`, options);
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

const deleted = async (path, setState, setLoading, setError) => {
  setError(null);
  setState(null);
  setLoading(true);
  const options = { method: "DELETE" };
  try {
    const response = await fetch(`${API_URL}${path}`, options);
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

export { get, post, put, deleted };
