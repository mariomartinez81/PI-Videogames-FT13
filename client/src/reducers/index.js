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
  GAMES_CREATED,
  SET_PAGE,
} from '../actions';
import { filteringALphabetic } from '../utils/filteringAlphabetic';
import { filteringGamesCreated } from '../utils/filteringGamesCreated';
import { filteringGenre } from '../utils/filteringGenre';
import { filterinRating } from '../utils/filteringRating';

const initialState = {
  gamesLoaded: undefined,
  type: 'all',
  gamesByName: {},
  gamesByGenre: {},
  page: 1,
  gameDetail: undefined,
  gamesGenres: [],
  alphabeticOrdering: {},
  ratingOrdering: {},
  gamesFavorites: [],
  gamesCreated: {},
  ultimateCreated: {},
};

export default function rootReducers(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        gamesLoaded: { results: [...action.payload] },
      };

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        gamesByName: { results: [...action.payload] },
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

    case FILTERING_GENRE:
      return {
        ...state,
        type: 'byGenres',
        gamesByGenre: {
          results: [
            ...filteringGenre(state.gamesLoaded.results, action.payload),
          ],
        },
      };

    case ALPHABETIC_ORDERING:
      return {
        ...state,
        type: action.payload,
        alphabeticOrdering: {
          results: [
            ...filteringALphabetic(state.gamesLoaded.results, action.payload),
          ],
        },
      };

    case RATING_ORDERING:
      return {
        ...state,
        type: action.payload,
        ratingOrdering: {
          results: [
            ...filterinRating(state.gamesLoaded.results, action.payload),
          ],
        },
      };

    case GAMES_CREATED:
      return {
        ...state,
        type: action.payload,
        gamesCreated: {
          results: [...filteringGamesCreated(state.gamesLoaded.results)],
        },
      };

    case BACK_GROUND:
      return {
        ...state,
        type: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
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
