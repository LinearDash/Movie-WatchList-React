import { useState, useEffect } from "react";

const useApi = ({search,type}) => {

  const key = import.meta.env.VITE_API_KEY;

  const getApiEndpoint= ()=>{
    switch(type){
      case "trending":
       return `https://api.themoviedb.org/3/movie/popular?&api_key=${key}`
      case "search":
        return `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${key}`

    }
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endpoint , setEndpoint] = useState('')

  setEndpoint(getApiEndpoint());


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
        const response = await fetch(endpoint);
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
