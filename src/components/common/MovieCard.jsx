const MovieCard = (data) => {
  const movieData = data.movie;
  const handleClick = () => {
    console.log(`${movieData.title} has been clicked`);
  };
  return (
    <div
      className="p-1 m-2  rounded-xl bg-gradient-to-r from-indigo-500  to-gray-500 "
      onClick={handleClick}
    >
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
            : "/genricPoster.jpg"
        }
        alt="poster"
        className="w-48 h-72 object-cover drop-shadow-lg rounded-2xl"
      />
      <div>
        <p className="text-center break-words w-48 mt-2 font-bold">
          {movieData.title}
        </p>
        {/* <p className="text-sm text-slate-300 rounded-lg w-24 text-center"></p> */}
        {/* <p className="break-words text-center">{movieData.overview}</p> */}
        <div className="badge badge-outline">{movieData.release_date}</div>
      </div>
    </div>
  );
};

export default MovieCard;
