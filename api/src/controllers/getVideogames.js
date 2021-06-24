const getGames = require('./handlers/getGames.js');
const getGamesByName = require('./handlers/getGamesByName.js');
// const pagination = require('./handlers/pagination.js');
// const filteringGenre = require('./handlers/filteringGenre'); // se usa para filtrar desde el backend
// const filteringAZ = require('./handlers/filteringAlphabetic');
// const filterinRating = require('./handlers/filteringRating.js');

async function getVideoGames(req, res) {
  const { name } = req.query;

  try {
    if (name) {
      const gamesByName = await getGamesByName(name);
      // const resultByName = pagination(gamesByName, page, limit, false, name);
      return res.json(gamesByName);
    }

    const totalGames = await getGames();
    // const finalResults = pagination(totalGames, page, limit);
    res.json(totalGames);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getVideoGames;

/* 


*/
// if (genre) {
//   const totalGames = await getGames();
//   const gamesByGenre = filteringGenre(totalGames, genre);
//   const resultByGenre = pagination(gamesByGenre, page, limit, genre);
//   return res.json(resultByGenre);
// }
// if (order) {
//   const totalGames = await getGames();
//   const gamesAlphabetic = filteringAZ(totalGames, order);
//   const resultOrdering = pagination(
//     gamesAlphabetic,
//     page,
//     limit,
//     false,
//     false,
//     order
//   );
//   return res.json(resultOrdering);
// }
// if (rating) {
//   const totalGames = await getGames();
//   const ratingsGames = filterinRating(totalGames, rating);
//   const resultsRatingOrder = pagination(
//     ratingsGames,
//     page,
//     limit,
//     false,
//     false,
//     false,
//     rating
//   );
//   return res.json(resultsRatingOrder);
// }
