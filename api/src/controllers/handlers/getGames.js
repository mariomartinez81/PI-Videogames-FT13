const { Videogame, Genre } = require('../../db');
const axios = require('axios').default;
const key = 'e05aeb3a65a04f699125f7dfe5318bd6';

const getGames = async () => {
  let allGames = [];
  let showGames = [];
  const getMoreGames = await axios.get(
    `https://api.rawg.io/api/games?key=${key}`
  );
  const dataPage1 = getMoreGames.data;
  allGames = [...allGames, ...dataPage1.results];
  let pages = dataPage1;
  let i = 0;
  while (i < 6 && !pages.next.endsWith(6)) {
    const getGames = await axios.get(pages.next);
    const response = getGames.data;
    allGames = [...allGames, ...response.results];
    pages = response;
    i++;
  }

  allGames.forEach((game) => {
    let videoGame = {
      id: game.id, //
      name: game.name,
      image: game.background_image,
      genre: game.genres,
      rating: game.rating,
    };
    showGames = [...showGames, videoGame];
  });

  const myGames = await Videogame.findAll({
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

  const totalGames = [...myGames, ...showGames];
  return totalGames;
};

module.exports = getGames;
