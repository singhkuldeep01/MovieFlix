import { useQuery } from "@tanstack/react-query";
import fetchMovieDetails from "../Services/fetchMovieDetails";

const useMovieDetails = (movieId) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    retry: 3,
    retryDelay: 2000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 5 // 5 minutes stale time 
  });
};

export default useMovieDetails;