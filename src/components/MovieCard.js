import React from 'react';

function MovieCard({ movie, isFavorite, handleFavoriteToggle }) {
  return (
    <div className="max-w-xs mx-auto bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 relative">
      <div className="p-8 z-10">
        <h3 className="text-3xl font-bold mb-4 text-center text-white">{movie.movie}</h3>
        <p className="text-lg text-gray-300 mb-4 text-center">Rating: {movie.rating}</p>
        <p className="text-gray-400 mb-8 text-center">{movie.description}</p>
        <button
          onClick={() => handleFavoriteToggle(movie)}
          className={`inline-flex items-center justify-center w-full py-2 mt-4 px-6 font-medium rounded shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-150 ${
            isFavorite? 'bg-red-500 text-white' : 'bg-blue-500'
          }`}
        >
          {isFavorite? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition-colors duration-150"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
