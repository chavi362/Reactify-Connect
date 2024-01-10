import { useState, useEffect } from "react";
import api from "../Api";

const useGetData = (urlParam) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const response = await api.get(urlParam);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, [urlParam]);

  // Expose loading state and a function to set loading externally
  return [data, error, loading, setLoading];
};

export default useGetData;
