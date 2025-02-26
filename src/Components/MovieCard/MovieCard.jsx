import PropTypes from "prop-types";

function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="group relative w-56 text-white h-80 bg-base-100 rounded-box shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2 border border-base-200 hover:border-base-300"
      onClick={() => onSelect(movie) }
    >
      <div className="absolute inset-0">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 via-base-100/10 to-transparent" />
      </div>
      <div className="absolute bottom-0 w-full p-4 space-y-2 z-10">
        <div className="space-y-1">
          <h3 className="font-bold text-white text-lg leading-tight tracking-wide text-base-content/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            {movie.Title}
          </h3>
          <div className="w-8 h-px bg-base-content/30 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
        </div>
        
        <p className="text-sm font-medium opacity-90 text-base-content/80">
          {movie.Type}
        </p>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-content border border-primary/30 shadow-sm z-10">
        {movie.Year}
      </div>

      <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-base-100/50 backdrop-blur-sm transition-all duration-300">
        <button className="btn btn-primary btn-sm shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MovieCard;