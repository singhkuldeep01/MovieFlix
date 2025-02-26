import { createContext, useState, useContext } from "react"; // ✅ Added `useContext`

export const MovieContext = createContext(); // Creating context

export const MovieProvider = ({ children }) => {
  const [movieSearchValue, setMovieSearchValue] = useState("avengers");
  const [movieId, setMovieId] = useState(null);

  return (
    <MovieContext.Provider value={{ movieSearchValue, setMovieSearchValue, movieId, setMovieId }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext); // ✅ Now it works!
