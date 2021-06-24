const { Videogame, Genre } = require('../../db');
const axios = require('axios').default;
const key = '94dfd75fcc314b709c02ac037e33c55a';

const getGamesByName = async (name) => {
  let gameByName = [];
  const games = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&&key=${key}`
  );
  const findGames = games.data.results;
  findGames.forEach((game) => {
    let videoGame = {
      id: game.id, //
      name: game.name,
      image: game.background_image,
      genre: game.genres,
      rating: game.rating,
    };
    gameByName = [...gameByName, videoGame];
  });

  const findInDb = await Videogame.findAll({
    where: {
      name: name,
    },
    include: [
      {
        model: Genre,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
    ],
  });

  gameByName = [...findInDb, ...gameByName];
  return gameByName;
};

module.exports = getGamesByName;
