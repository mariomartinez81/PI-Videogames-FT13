const getGames = require('./handlers/getGames.js');
const pagination = require('./handlers/pagination.js');
const getGamesByName = require('./handlers/getGamesByName.js');
const filteringGenre = require('./handlers/filteringGenre');
const filteringAZ = require('./handlers/filteringAlphabetic');
const filterinRating = require('./handlers/filteringRating.js');

async function getVideoGames(req, res) {
  const { name, genre, order, rating } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  try {
    if (genre) {
      const totalGames = await getGames();
      const gamesByGenre = filteringGenre(totalGames, genre);
      const resultByGenre = pagination(gamesByGenre, page, limit, genre);
      res.json(resultByGenre);
    } else if (name) {
      const gamesByName = await getGamesByName(name);
      const resultByName = pagination(gamesByName, page, limit, false, name);
      res.json(resultByName);
    } else if (order) {
      const totalGames = await getGames();
      const gamesAlphabetic = filteringAZ(totalGames, order);
      const resultOrdering = pagination(
        gamesAlphabetic,
        page,
        limit,
        false,
        false,
        order
      );
      res.json(resultOrdering);
    } else if (rating) {
      const totalGames = await getGames();
      const ratingsGames = filterinRating(totalGames, rating);
      const resultsRatingOrder = pagination(
        ratingsGames,
        page,
        limit,
        false,
        false,
        false,
        rating
      );
      res.json(resultsRatingOrder);
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
