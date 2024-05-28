import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

function MovieListPage() {
  const dispatch = useDispatch();
  const { movies, favorites, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Movie List</h1>
      {status === 'loading' && <p>Loading movies...</p>}
      {status === 'failed' && <p className='text-red font-extrabold'>Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <Link
            to="/favorites"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-8"
          >
            Go to Favorites
          </Link>
          <MovieList movies={movies} favorites={favorites} />
        </>
      )}
    </div>
  );
}

export default MovieListPage;