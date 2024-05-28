import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data.movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};