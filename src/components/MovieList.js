import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function MovieList({ favoritesList = false }) {
  const movies = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);

  const sortedMovies = favoritesList
    ? favorites
    : [...movies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.id === movie.id)}
        />
      ))}
    </div>
  );
}

export default MovieList;