const API_URL = "http://localhost:8080/api";
// const API_URL = "http://3.144.86.214:8080/api";

const get = async (path) => {
  const getResponse = {};
  try {
    const response = await fetch(`${API_URL}${path}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
};

const post = async (path, payload, token) => {
  const getResponse = {};
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(payload),
  };

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

export { get, post };
