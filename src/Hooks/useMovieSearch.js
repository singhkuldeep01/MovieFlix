import { useQuery } from "@tanstack/react-query";
import movieSearch from "../Services/movieSearch";

const useMovieSearch = (searchTerm, page) => {
  return useQuery({
    queryKey: ['movie', searchTerm, page],
    queryFn: () => movieSearch(searchTerm, page),
    retry: 3,
    retryDelay: 2000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 5 // 5 minutes stale time 
  });
};

export default useMovieSearch;