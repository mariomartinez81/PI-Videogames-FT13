import {
  ADD_FAVORITES,
  BACK_GROUND,
  GET_DETAIL,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  REMOVE_FAVORITES,
  FILTERING_GENRE,
  ALPHABETIC_ORDERING,
  RATING_ORDERING,
} from '../actions';

const initialState = {
  gamesLoaded: undefined,
  type: 'all',
  gamesByName: [],
  gamesByGenre: {},
  gameDetail: undefined,
  gamesGenres: [],
  alphabeticOrdering: {},
  ratingOrdering: {},

  gamesFavorites: [],
};

export default function rootReducers(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        gamesLoaded: { ...action.payload },
      };

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        gamesByName: [...action.payload],
        type: 'search',
        state,
      };

    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        gamesGenres: [...action.payload],
      };

    case BACK_GROUND:
      return {
        ...state,
        type: action.payload,
      };

    case FILTERING_GENRE:
      return {
        ...state,
        type: 'byGenres',
        gamesByGenre: { ...action.payload },
      };

    case ALPHABETIC_ORDERING:
      return {
        ...state,
        type: action.state,
        alphabeticOrdering: { ...action.payload },
      };

    case RATING_ORDERING:
      return {
        ...state,
        type: action.state,
        ratingOrdering: { ...action.payload },
      };

    case ADD_FAVORITES:
      return {
        ...state,
        gamesFavorites: [...state.gamesFavorites, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        gamesFavorites: state.gamesFavorites.filter(
          (game) => game.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
