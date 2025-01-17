import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchResult from "./pages/search/SearchResult";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
