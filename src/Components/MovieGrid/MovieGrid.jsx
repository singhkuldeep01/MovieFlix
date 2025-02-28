import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../Context/movieContext";
import useMovieSearch from "../../Hooks/useMovieSearch.js"; // Corrected import statement
import Paging from "../Paging/Paging";
import NoMoviesFound from "../NoMoviesFound/NoMoviesFound";
import { useState } from "react";
import SkeletonLoaderGrid from "../Skeletons/SkeletonLoaderGrid";
import { useNavigate } from "react-router-dom";

const MovieGrid = () => {
  const { movieSearchValue } = useMovieContext();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useMovieSearch(movieSearchValue, page);
  const navigate = useNavigate();

  function onSelectMovie(movie) {
    console.log("Selected Movie", movie.imdbID);
    navigate(`/movie/${movie.imdbID}`);
  }

  if (isLoading) {
    return <SkeletonLoaderGrid />;
  }

  if (!data || !data.Search || data.Search.length === 0) {
    return <NoMoviesFound />;
  }

  return (
    <div className="flex flex-col items-center pb-10">
      <div className="flex flex-wrap gap-10 justify-center p-10 pt-25">
        {data.Search.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelectMovie} />
        ))}
      </div>
      <Paging page={page} setPage={setPage} />
    </div>
  );
};

MovieGrid.propTypes = {
  // No props are being passed to MovieGrid, so propTypes can be removed
};

export default MovieGrid;