import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('https://dummyapi.online/api/movies');
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const favoriteIndex = state.favorites.findIndex((fav) => fav.id === movie.id);

      if (favoriteIndex === -1) {
        state.favorites = [...state.favorites, movie];
      } else {
        state.favorites = state.favorites.filter((fav) => fav.id !== movie.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;