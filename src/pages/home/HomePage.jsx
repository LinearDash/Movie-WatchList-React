import NavBar from "../../components/common/NavBar";
import MovieCard from "../../components/common/MovieCard";

function HomePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <p className="border-b-2 border-gray-500 font-bold mt-5 ml-6 mr-6">
          Trending
        </p>
        <MovieCard data={}/>
      </div>
    </>
  );
}

export default HomePage;
