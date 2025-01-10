import { useState } from "react";
import "./App.css";
import useApi from "./hooks/useApi";

function App() {
  const [search, setSearch] = useState("");
  const [input, setinput] = useState("");
  const { data, loading, error } = useApi(search);

  const handelInput = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("Please enter a movie or series name.");
    }
    setSearch(input);
    console.log(data.results);
  };

  return (
    <>
      <div className="bg-gray-700 flex-auto flex text-center h-full w-full fixed overflow-auto">
        <div className="bg-slate-400 h-16 w-full mb-2 absolute flex-auto">
          {/* <img src="/tv.png" alt="Logo" className="absolute w-11 m-2 ml-7" /> */}
          <input
            className="w-1/3 mt-3 pl-2 h-7 "
            type="text"
            placeholder="Movies and Series"
            value={input}
            onChange={handelInput}
          />
          <button
            className="bg-black text-white w-14 m-2 rounded-md h-7"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        {!data && (
          <div className="bg-blue-400 w-2/3 m-2 pt-20 flex justify-center items-center h-full "></div>
        )}
        {data && (
          <div className="bg-blue-400 w-2/3 m-2 pt-20 flex justify-center items-center h-fit ">
            {loading && <div className="loading">Loading...</div>}
            {!loading && data && (
              <div className="flex flex-wrap justify-center">
                {data.results.map((movie) => (
                  <div
                    //Mapping over all the results
                    key={movie.id}
                    className="p-1 m-2  rounded-xl bg-gradient-to-r from-indigo-500  to-gray-500"
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/genricPoster.jpg"
                      }
                      alt="poster"
                      className="w-48 h-72 object-cover drop-shadow-lg rounded-2xl"
                    />
                    <p className="text-center break-words w-48 mt-2 font-bold">
                      {movie.title}
                    </p>
                    <p className="text-sm text-slate-300 rounded-lg w-24 text-center">
                      {movie.release_date}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="bg-orange-300 m-2 w-1/3 pt-16 flex flex-col ">
          Current watchlist
        </div>
      </div>
    </>
  );
}

export default App;
