// const { Videogame, Genre } = require('../db.js');
// const axios = require('axios').default;
// const key = 'e05aeb3a65a04f699125f7dfe5318bd6';
const getGames = require('./handlers/getGames.js');
const pagination = require('./handlers/pagination.js');
const getGamesByName = require('./handlers/getGamesByName.js');

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
      const test = pagination(matchGenre, page, limit, genre);
      res.json(test);
    } else if (name) {
      const gamesByName = await getGamesByName(name);
      res.json(gamesByName);
    }

    const totalGames = await getGames();
    const finalResults = pagination(totalGames, page, limit);
    res.json(finalResults);
  } catch (error) {
    console.log(error);
  }

  // if (name) {
  //   try {
  //     const gamesByName = await getGamesByName(name);
  //     res.json(gamesByName);
  //   } catch (error) {
  //     if (error.games?.status === 404) {
  //       const findInDb = await Videogame.findAll({
  //         where: {
  //           name: name,
  //         },
  //         include: [
  //           {
  //             model: Genre,
  //             attributes: ['id', 'name'],
  //             through: {
  //               attributes: [],
  //             },
  //           },
  //         ],
  //       });
  //       return res.json(findInDb.data);
  //     }
  //     return res.status(404).json({
  //       message: 'The requested resource was not found on this server.',
  //     });
  //   }
  // }
}

module.exports = getVideoGames;
