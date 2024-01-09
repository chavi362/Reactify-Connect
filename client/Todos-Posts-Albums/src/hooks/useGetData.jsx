import { useState, useEffect } from "react";
import api from "../Api";

const useGetData = (urlParam) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(urlParam);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [urlParam]);

  return [data, error];
};

export default useGetData;
