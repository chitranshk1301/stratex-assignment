import React from 'react';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

function FavoriteMovies() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Favorite Movies</h1>
      <MovieList favoritesList />
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Go to Movie List
      </Link>
    </div>
  );
}

export default FavoriteMovies;