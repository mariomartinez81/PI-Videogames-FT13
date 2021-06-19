import axios from 'axios';
//calls api
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
//others
export const BACK_GROUND = 'BACK_GROUND';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const FILTERING_GENRE = 'FILTERING_GENRE';
//ordering
export const ALPHABETIC_ORDERING_AZ = 'ALPHABETIC_ORDERING_AZ';
export const ALPHABETIC_ORDERING_ZA = 'ALPHABETIC_ORDERING_ZA';
export const RATING_ORDERING_HIGHEST = 'RATING_ORDERING_HIGHEST';
export const RATING_ORDERING_LOWEST = 'RATING_ORDERING_LOWEST';

export const getVideogames = (url) => async (dispatch) => {
  try {
    if (!url) {
      const request = await axios.get(`http://localhost:3001/videogames`);
      const videoGames = request.data;
      dispatch({
        type: GET_VIDEOGAMES,
        payload: videoGames,
      });
    } else {
      const request = await axios.get(`${url}`);
      const videoGames = request.data;
      dispatch({
        type: GET_VIDEOGAMES,
        payload: videoGames,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getVideogamesByname = (name) => async (dispatch) => {
  try {
    const request = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const videoGames = request.data;
    dispatch({
      type: GET_VIDEOGAMES_BY_NAME,
      payload: videoGames,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailVideoGame = (id) => async (dispatch) => {
  try {
    const request = await axios.get(`http://localhost:3001/videogame/${id}`);
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
    const request = await axios.get(`http://localhost:3001/genres`);
    const videGame = request.data;
    dispatch({
      type: GET_GENRES,
      payload: videGame,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearDetail = () => ({
  type: GET_DETAIL,
  payload: undefined,
});

export const backUp = () => ({
  type: BACK_GROUND,
  payload: 'all',
});

export const filterGenre = (payload, url) => async (dispatch) => {
  if (!url) {
    try {
      const gamesByGenres = await axios.get(
        `http://localhost:3001/videogames?genre=${payload}`
      );
      const response = gamesByGenres.data;
      dispatch({
        type: FILTERING_GENRE,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const gamesByGenres = await axios.get(`${url}`);
      const response = gamesByGenres.data;
      dispatch({
        type: FILTERING_GENRE,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const orderingAz = () => ({
  type: ALPHABETIC_ORDERING_AZ,
  payload: 'ordering-AZ',
});

export const orderingZa = () => ({
  type: ALPHABETIC_ORDERING_ZA,
  payload: 'ordering-ZA',
});

export const ratingOrderHighest = () => ({
  type: RATING_ORDERING_HIGHEST,
  payload: 'rating-highest',
});

export const ratingOrderingLowest = () => ({
  type: RATING_ORDERING_LOWEST,
  payload: 'rating-lowest',
});

export const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});

export const removeFavorites = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});
