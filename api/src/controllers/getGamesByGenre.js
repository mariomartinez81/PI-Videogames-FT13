const { Videogame, Genre } = require('../db.js');
const axios = require('axios').default;
const key = 'e05aeb3a65a04f699125f7dfe5318bd6';

async function getGamesByGenre(req, res) {
  const { genre } = req.query;
  const lim = parseInt(req.query.limit) || 15;
  const pag = parseInt(req.query.page) || 1;

  try {
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

    let matchGenre = totalGames
      .map((game) => {
        let array = [];
        for (let item of game.genre) {
          if (item.name === genre) array.push(game);
        }
        return array;
      })
      .filter((ele) => ele.length > 0)
      .flat(Infinity);

    const results = {};
    const startIndex = (pag - 1) * lim;
    const endIndex = pag * lim;

    if (matchGenre.length > 0 && matchGenre.length > 15) {
      results.next_page = `http://localhost:3001/videogames?pag=${
        pag + 1
      }&lim=15`;
    }

    if (pag > 1)
      results.previous_page = `http://localhost:3001/videogames?pag=${
        pag - 1
      }&lim=15`;

    results.results = matchGenre.slice(startIndex, endIndex);

    res.json(results);
  } catch (error) {
    if (results.results.length < 1) res.sendStatus(400);
  }
}

module.exports = getGamesByGenre;
