import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
//others
export const BACK_GROUND = 'BACK_GROUND';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const SET_PAGE = 'SET_PAGE';
//ordering
export const FILTERING_GENRE = 'FILTERING_GENRE';
export const ALPHABETIC_ORDERING = 'ALPHABETIC_ORDERING';
export const RATING_ORDERING = 'RATING_ORDERING';
export const GAMES_CREATED = 'GAMES_CREATED';

const backend = 'https://videogame-backend.herokuapp.com';

export const getVideogames = () => async (dispatch) => {
  try {
    const request = await axios.get(`${backend}/videogames`);
    const videoGames = request.data;
    dispatch({
      type: GET_VIDEOGAMES,
      payload: videoGames,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getVideogamesByname = (name, url) => async (dispatch) => {
  if (!url) {
    try {
      const request = await axios.get(`${backend}/videogames?name=${name}`);
      const videoGames = request.data;
      dispatch({
        type: GET_VIDEOGAMES_BY_NAME,
        payload: videoGames,
      });
    } catch (error) {
      console.log(error);
    }
  } else if (url) {
    try {
      const request = await axios.get(`${url}`);
      const videoGames = request.data;
      dispatch({
        type: GET_VIDEOGAMES_BY_NAME,
        payload: videoGames,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getDetailVideoGame = (id) => async (dispatch) => {
  try {
    const request = await axios.get(`${backend}/videogame/${id}`);
    const videGame = request.data;
    dispatch({
      type: GET_DETAIL,
      payload: videGame,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = () => async (dispatch) => {
  try {
    const request = await axios.get(`${backend}/genres`);
    const videGame = request.data;
    dispatch({
      type: GET_GENRES,
      payload: videGame,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postVideogame = (payload) => async () => {
  try {
    await axios.post(`${backend}/videogame`, payload);
  } catch (error) {
    console.log(error);
  }
};

export const filterGenre = (payload) => ({
  type: FILTERING_GENRE,
  payload,
});

export const alphabeticOrder = (payload) => ({
  type: ALPHABETIC_ORDERING,
  payload,
});

export const ratingOrder = (payload) => ({
  type: RATING_ORDERING,
  payload,
});

export const getGamesCreated = () => ({
  type: GAMES_CREATED,
  payload: 'gamesCreated',
});

export const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});

export const removeFavorites = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});

export const backUp = () => ({
  type: BACK_GROUND,
  payload: 'all',
});

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload,
});
