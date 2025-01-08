import "./App.css";

function App() {
  const searchMovie = () => {};
  return (
    <>
      <div className="bg-gray-700 flex-auto flex text-center h-full w-full fixed">
        <div className="bg-slate-400 h-16 w-full mb-2 absolute flex-auto">
          <input
            className="w-1/3 mt-3 pl-2 "
            type="text"
            placeholder="Movies and Series"
          />
          <button
            className="bg-black text-white w-6 m-2 rounded-md"
            onClick={searchMovie}
          >
            +
          </button>
        </div>
        <div className="bg-blue-400 w-2/3 m-2 pt-16">Output Field</div>
        <div className="bg-orange-300 m-2 w-1/3 pt-16">Current watchlist</div>
      </div>
    </>
  );
}

export default App;
