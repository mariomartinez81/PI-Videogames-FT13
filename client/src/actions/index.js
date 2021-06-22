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
export const SET_PAGE = 'SET_PAGE';
//ordering
export const ALPHABETIC_ORDERING = 'ALPHABETIC_ORDERING';
export const RATING_ORDERING = 'RATING_ORDERING';

export const getVideogames = () => async (dispatch) => {
  try {
    const request = await axios.get(`http://localhost:3001/videogames`);
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

export const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});

export const removeFavorites = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});

export const clearDetail = () => ({
  type: GET_DETAIL,
  payload: undefined,
});

export const backUp = () => ({
  type: BACK_GROUND,
  payload: 'all',
});

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload,
});

//backend filtering

/* export const filterGenre = (payload) => async (dispatch) => {
  try {
    const gamesByGenres = await axios.get(
      `http://localhost:3001/videogames?genre=${payload}`
    );
    const response = gamesByGenres.data;
    const filterResponse = response
      .map((game) => {
        let array = [];
        for (let item of game.genre) {
          if (item.name === payload) array.push(game);
        }
        return array;
      })
      .filter((ele) => ele.length > 0)
      .flat(Infinity);

    const finalResponse = { results: filterResponse };
    dispatch({
      type: FILTERING_GENRE,
      option: payload,
      payload: finalResponse,
    });
  } catch (error) {
    console.log(error);
  }
}; */

/* export const alphabeticOrder = (payload, url) => async (dispatch) => {
  if (!url) {
    try {
      const alphabeticGames = await axios.get(
        `http://localhost:3001/videogames?order=${payload}`
      );
      const response = alphabeticGames.data;
      dispatch({
        type: ALPHABETIC_ORDERING,
        state: payload,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const alphabeticGames = await axios.get(`${url}`);
      const response = alphabeticGames.data;
      dispatch({
        type: ALPHABETIC_ORDERING,
        state: payload,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
 */

/* export const ratingOrder = (payload, url) => async (dispatch) => {
  if (!url) {
    try {
      const ratingGames = await axios.get(
        `http://localhost:3001/videogames?rating=${payload}`
      );
      const response = ratingGames.data;
      dispatch({
        type: RATING_ORDERING,
        state: payload,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const ratingGames = await axios.get(`${url}`);
      const response = ratingGames.data;
      dispatch({
        type: RATING_ORDERING,
        state: payload,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  }
}; */
