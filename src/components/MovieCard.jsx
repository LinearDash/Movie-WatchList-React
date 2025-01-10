const MovieCard = (data) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.results.map((movie) => (
        <img
          key={movie.id}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/genricPoster.jpg"
          }
          alt="poster"
          className="w-48 m-2"
        />
      ))}
    </div>
  );
};

export default MovieCard;
