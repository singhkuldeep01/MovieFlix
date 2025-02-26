function NoMoviesFound({ searchQuery = '' }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center pt-25">
        {/* Animated Magnifying Glass Icon */}
        <div className="relative mb-8 animate-bounce">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg"></div>
          <svg 
            className="w-24 h-24 text-primary mx-auto"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
  
        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! No Movies Found{searchQuery && ` for "${searchQuery}"`}
        </h2>
  
        {/* Sub Message */}
        <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
          We couldn't find any matches in our database. Try adjusting your search or filters.
        </p>
  
        {/* Suggestions List */}
        <div className="grid gap-3 text-start mb-8">
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-primary"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <span>Check your spelling or try different keywords</span>
          </div>
          
        </div>
  
      </div>
    );
  }
  
  export default NoMoviesFound;