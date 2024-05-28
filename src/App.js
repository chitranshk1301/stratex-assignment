import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import FavoriteMovies from './pages/FavoriteMovies';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-slate-500 to-slate-800">
        <Routes>
          <Route path="/" exact element={<MovieListPage />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;