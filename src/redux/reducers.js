const initialState = {
    movies: [],
    favorites: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload,
        };
      case 'TOGGLE_FAVORITE':
        const movie = action.payload;
        const favoriteIndex = state.favorites.findIndex(
          (fav) => fav.id === movie.id
        );
        if (favoriteIndex === -1) {
          return {
            ...state,
            favorites: [...state.favorites, movie],
          };
        } else {
          const updatedFavorites = [...state.favorites];
          updatedFavorites.splice(favoriteIndex, 1);
          return {
            ...state,
            favorites: updatedFavorites,
          };
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;