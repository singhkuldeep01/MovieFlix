import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../Context/movieContext";
import useMovieSearch from "../../Hooks/UseMovieSearch";
import Paging from "../Paging/Paging";
import NoMoviesFound from "../NoMoviesFound/NoMoviesFound";
import { useState } from "react";
import SkeletonLoaderGrid from "../Skeletons/SkeletonLoaderGrid";

const MovieGrid = ({ onSelectMovie }) => {
  const { movieSearchValue } = useMovieContext();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useMovieSearch(movieSearchValue , page);

  if (isLoading) {
    return <SkeletonLoaderGrid/>
  }

  if (!data || !data.Search || data.Search.length === 0) {
    return <NoMoviesFound/>;
  }

  return (
    <div className="flex flex-col items-center pb-10">
        <div className="flex flex-wrap gap-10 justify-center p-10 pt-25">
            {data.Search.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelectMovie} />
            ))}
        </div>
        <Paging 
            page={page}
            setPage={setPage}
        />   
    </div>
  );
};


MovieGrid.propTypes = {
  onSelectMovie: PropTypes.func.isRequired, // Function to handle selection
};

export default MovieGrid;
