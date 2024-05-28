import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import FavoriteMovies from './pages/FavoriteMovies';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <Switch>
          <Route exact path="/" component={MovieListPage} />
          <Route path="/favorites" component={FavoriteMovies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;