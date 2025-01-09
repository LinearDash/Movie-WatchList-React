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
    console.log(data);
  };

  return (
    <>
      <div className="bg-gray-700 flex-auto flex text-center h-full w-full fixed">
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
        <div className="bg-blue-400 w-2/3 m-2 pt-16 flex justify-center items-center">
          {loading && <div className="loading">Loading...</div>}
          {!loading && (
            <img src={data ? data.Poster : ""} alt="poster" className="w-48" />
          )}
        </div>
        <div className="bg-orange-300 m-2 w-1/3 pt-16">Current watchlist</div>
      </div>
    </>
  );
}

export default App;
