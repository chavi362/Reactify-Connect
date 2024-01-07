import { useState, useEffect } from "react";

const useFetch = (urlParam) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:3000/';

  useEffect(() => {
    const url = baseUrl + urlParam;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [urlParam]);

  return [data, error];
};

export default useFetch;
