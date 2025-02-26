import React, { useState } from "react";
import { useMovieContext } from "../../Context/movieContext";

function SearchBar() {
  const { setMovieSearchValue } = useMovieContext();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setMovieSearchValue(inputValue);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-2xl">
      <div className="flex items-center w-full max-w-2xl border rounded-full overflow-hidden shadow-sm bg-base-100">
        <input
          type="text"
          placeholder="Search Movie"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow px-4 py-2 text-base-content placeholder-base-content bg-transparent border-none text-sm focus:outline-none"
        />
        <button
          className="px-5 py-2 text-sm font-medium btn btn-primary rounded-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
