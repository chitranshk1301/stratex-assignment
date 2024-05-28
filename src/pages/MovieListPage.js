import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

function MovieListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Movie List</h1>
      <MovieList />
      <Link
        to="/favorites"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Go to Favorites
      </Link>
    </div>
  );
}

export default MovieListPage;