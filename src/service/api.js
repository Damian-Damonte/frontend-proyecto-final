const API_URL = "http://localhost:8080/api";
// const API_URL = "http://3.144.86.214:8080/api";

const get = async (path, token = null) => {
  const getResponse = {};
  const options = {
    method: "GET",
    headers:{}
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${path}`, options);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
};

const post = async (path, payload, token = null) => {
  const getResponse = {};
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${path}`, options);
    if (!response.ok) throw new Error(response.status);
    if (response.status === 204) return getResponse;

    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
};

export { get, post };
