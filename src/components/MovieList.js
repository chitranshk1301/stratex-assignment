import React from 'react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/moviesSlice';

function MovieList({ favoritesList = false }) {
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);
  const { movies = [], favorites = [] } = moviesState || {}; // Destructure here

  const handleFavoriteToggle = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  // Ensure you're working with a copy of the array when sorting
  const sortedMovies = favoritesList
   ? favorites
    : [...movies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 gap-4">
      {sortedMovies.length > 0? (
        sortedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
            handleFavoriteToggle={handleFavoriteToggle}
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
