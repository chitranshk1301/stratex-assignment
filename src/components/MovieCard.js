import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/actions';

function MovieCard({ movie, isFavorite }) {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
        <p className="text-gray-700 mb-4">{movie.description}</p>
        <button
          onClick={handleFavoriteToggle}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            isFavorite ? 'bg-red-500 hover:bg-red-600' : ''
          }`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <a
          href={movie.imdbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;