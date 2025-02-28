import { useNavigate } from 'react-router-dom';

function MovieDetails({ movie, isLoading }) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8 relative md:pt-28">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="btn btn-lg font-bold absolute top-4 left-4 bg-primary mt-25"
      >
        Back
      </button>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Poster Section */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <figure className="relative aspect-[2/3]">
                <img 
                  src={movie.Poster} 
                  alt={movie.Title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-100 via-base-100/90 to-transparent p-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="badge badge-lg badge-accent px-4 py-3">
                      <span className="text-lg">IMDB ⭐ {movie.imdbRating}</span>
                    </div>
                    {movie.BoxOffice && (
                      <div className="badge badge-lg badge-ghost">
                        {movie.BoxOffice}
                      </div>
                    )}
                  </div>
                </div>
              </figure>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-grow space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-base-content">
                  {movie.Title}
                </h1>
                <div className="flex items-center gap-2 text-lg text-base-content/80">
                  <span>{movie.Year}</span>
                  <span>•</span>
                  <span>{movie.Runtime}</span>
                  <span>•</span>
                  <span>{movie.Rated}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.Genre.split(', ').map((genre, index) => (
                  <div key={index} className="badge badge-outline badge-lg">
                    {genre}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem label="Director" value={movie.Director} />
              <DetailItem label="Production" value={movie.Production} />
              <DetailItem label="Country" value={movie.Country} />
              <DetailItem label="Language" value={movie.Language} />
              <DetailItem label="Released" value={movie.Released} />
              <DetailItem label="Awards" value={movie.Awards} />
            </div>

            {/* Plot Section */}
            <SectionContainer title="Storyline">
              <p className="text-lg leading-relaxed text-base-content/90">
                {movie.Plot}
              </p>
            </SectionContainer>

            {/* Cast Section */}
            <SectionContainer title="Cast">
              <div className="flex flex-wrap gap-3">
                {movie.Actors.split(', ').map((actor, index) => (
                  <span 
                    key={index} 
                    className="bg-base-100 bg-primary px-4 py-2 rounded-box shadow-sm font-medium text-base-content/90"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </SectionContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Detail Item Component
const DetailItem = ({ label, value }) => (
  <div className="flex flex-col space-y-1 p-4 bg-base-100 rounded-box shadow-sm border border-base-200">
    <span className="text-sm font-semibold text-primary tracking-wide">
      {label}
    </span>
    <span className="text-lg text-base-content/90 leading-snug">
      {value}
    </span>
  </div>
);

// Reusable Section Container Component
const SectionContainer = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-base-content border-b border-base-300 pb-2">
      {title}
    </h2>
    <div className="bg-base-100 p-6 rounded-box shadow-sm border border-base-200">
      {children}
    </div>
  </div>
);

export default MovieDetails;
