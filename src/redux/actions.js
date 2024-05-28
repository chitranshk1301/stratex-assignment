import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchMoviesSuccess = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: movies,
});

export const toggleFavorite = (movie) => ({
  type: 'TOGGLE_FAVORITE',
  payload: movie,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/movies`);
      dispatch(fetchMoviesSuccess(response.data.movies));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};