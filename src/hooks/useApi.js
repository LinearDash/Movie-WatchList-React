import { useState, useEffect } from "react";

const useApi = (search) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search.trim()) {
      setData(null);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const key = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${key}`
        );
        const result = await response.json();

        if (result.Error) {
          setError(result.Error); 
          setData(null);
        } else {
          setData(result);
        }
      } catch (err) {
        setError(`An unexpected error occurred: ${err.message}`); 
        console.error("Fetch Error:", err); 
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return { data, loading, error };
};

export default useApi;
