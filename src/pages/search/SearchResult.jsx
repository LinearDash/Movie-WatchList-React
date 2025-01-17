import { useState, useEffect } from "react";

import useApi from "../../hooks/useApi";
import MovieCard from "../../components/common/MovieCard";
import { useParams } from "react-router-dom";
import NavBar from "../../components/common/NavBar";

function SearchResult() {
  const { query } = useParams();
  const [search, setSearch] = useState("");
  const { data, loading } = useApi(search);

  // console.log(query);

  useEffect(() => {
    if (query) {
      setSearch(query);
    }
  }, [query]);

  return (
    <>
      <NavBar />
      <div className="bg-gray-700 flex-auto flex text-center h-full w-full fixed overflow-auto pt-5">
        {!data && (
          <div className="bg-blue-400 w-2/3 m-2 pt-5 flex justify-center items-center h-full "></div>
        )}
        {data && (
          <div className="bg-blue-400 w-2/3 m-2 pt-5 flex justify-center items-center h-fit ">
            {loading && <div className="loading ">Loading...</div>}
            {!loading && data && (
              <div className="flex flex-wrap justify-center">
                {data.results.length === 0 ? (
                  <div className="h-full">No such movie found</div>
                ) : (
                  data.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                )}
              </div>
            )}
          </div>
        )}

        <div className="bg-orange-300 m-2 w-1/3 pt-16 flex flex-col "> </div>
      </div>
    </>
  );
}

export default SearchResult;
