const { Videogame, Genre } = require('../db.js');
const axios = require('axios').default;
const key = 'e05aeb3a65a04f699125f7dfe5318bd6';
const getGames = require('./handlers/getGames.js');
const pagination = require('./handlers/pagination.js');

async function getVideoGames(req, res) {
  const { name, genre } = req.query;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  try {
    if (genre) {
      const totalGames = await getGames();
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
      // res.json(matchGenre);
      const test = pagination(matchGenre, page, limit);
      res.json(test);
    }

    const totalGames = await getGames();
    const finalResults = pagination(totalGames, page, limit);
    res.json(finalResults);
  } catch (error) {
    console.log(error);
  }

  if (name) {
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
