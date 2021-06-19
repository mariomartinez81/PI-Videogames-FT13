const { Videogame, Genre } = require('../db.js');
const axios = require('axios').default;
const key = 'e05aeb3a65a04f699125f7dfe5318bd6';

async function getVideoGames(req, res) {
  const { name, genre } = req.query;
  let allGames = [];
  let showGames = [];
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const lim = parseInt(req.query.limit) || 15;
  const pag = parseInt(req.query.page) || 1;

  const pagination = (totalGames, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (totalGames.length > 0) {
      results.next_page = `http://localhost:3001/videogames?page=${
        page + 1
      }&limit=15`;
    }

    if (page > 1)
      results.previous_page = `http://localhost:3001/videogames?page=${
        page - 1
      }&limit=15`;

    results.results = totalGames.slice(startIndex, endIndex);
    return results;
  };

  if (genre) {
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
        results.next_page = `http://localhost:3001/video?pag=${pag + 1}&lim=15`;
      }

      if (pag > 1)
        results.previous_page = `http://localhost:3001/video?pag=${
          pag - 1
        }&lim=15`;

      results.results = matchGenre.slice(startIndex, endIndex);

      res.json(results);
    } catch (error) {
      if (results.results.length < 1) res.sendStatus(400);
    }
  } else if (!name) {
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
      const finalResults = pagination(totalGames, page, limit);
      res.json(finalResults);
    } catch (error) {
      if (results.results.length < 1) res.sendStatus(400);
    }
  } else {
    try {
      let gameByName = [];
      const games = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&&key=${key}`
      );
      const findGames = games.data.results.slice(0, 15);
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
      res.json(gameByName);
    } catch (error) {
      if (error.games?.status === 404) {
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
        return res.json(findInDb.data);
      }
      return res.status(404).json({
        message: 'The requested resource was not found on this server.',
      });
    }
  }
}

module.exports = getVideoGames;
