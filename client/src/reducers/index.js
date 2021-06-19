import {
  ADD_FAVORITES,
  BACK_GROUND,
  GET_DETAIL,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  REMOVE_FAVORITES,
  FILTERING_GENRE,
  ALPHABETIC_ORDERING_AZ,
  ALPHABETIC_ORDERING_ZA,
  RATING_ORDERING_HIGHEST,
  RATING_ORDERING_LOWEST,
} from '../actions';

const initialState = {
  gamesLoaded: undefined,
  type: 'all',
  gamesByName: [],
  gamesByGenre: {},
  gameDetail: undefined,
  gamesGenres: [],
  orderingAZ: [],
  orderingZA: [],
  ratingHighest: [],
  ratingLowest: [],
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

    case FILTERING_GENRE:
      return {
        ...state,
        type: 'byGenres',
        gamesByGenre: { ...action.payload },
      };

    case ALPHABETIC_ORDERING_AZ:
      return {
        ...state,
        type: action.payload,
        orderingAZ: [
          ...state.gamesLoaded.results.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase()
              ? 1
              : a.name.toLowerCase() < b.name.toLowerCase()
              ? -1
              : 0
          ),
        ],
      };

    case ALPHABETIC_ORDERING_ZA:
      return {
        ...state,
        type: action.payload,
        orderingZA: [
          ...state.gamesLoaded.results.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase()
              ? -1
              : a.name.toLowerCase() < b.name.toLowerCase()
              ? 1
              : 0
          ),
        ],
      };

    case RATING_ORDERING_HIGHEST:
      return {
        ...state,
        type: action.payload,
        ratingHighest: [
          ...state.gamesLoaded.results.sort((a, b) =>
            a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
          ),
        ],
      };

    case RATING_ORDERING_LOWEST:
      return {
        ...state,
        type: action.payload,
        ratingLowest: [
          ...state.gamesLoaded.results.sort((a, b) =>
            a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
          ),
        ],
      };

    default:
      return state;
  }
}
