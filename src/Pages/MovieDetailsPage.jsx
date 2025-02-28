import React from 'react'
import MovieDetails from '../Components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../Hooks/useMovieDetails';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const {data , isLoading} = useMovieDetails(movieId);
  // console.log(data);
  return (
    <>
      <MovieDetails 
        movie={data}
        isLoading={isLoading}
      >

      </MovieDetails>
    </>
  )
}

export default MovieDetailsPage

