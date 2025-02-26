import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../Context/movieContext";
import useMovieSearch from "../../Hooks/UseMovieSearch";

const MovieGrid = ({ onSelectMovie }) => {
  const { movieSearchValue } = useMovieContext();
  const { data, isLoading } = useMovieSearch(movieSearchValue);

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (!data || !data.Search || data.Search.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="flex flex-wrap gap-10 justify-center p-10 pt-25">

      {data.Search.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelectMovie} />
      ))}
    </div>
  );
};


MovieGrid.propTypes = {
  onSelectMovie: PropTypes.func.isRequired, // Function to handle selection
};

export default MovieGrid;
