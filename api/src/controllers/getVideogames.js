const getGames = require('./handlers/getGames.js');
const getGamesByName = require('./handlers/getGamesByName.js');

async function getVideoGames(req, res) {
  const { name } = req.query;

  try {
    if (name) {
      const gamesByName = await getGamesByName(name);
      return res.json(gamesByName);
    }

    const totalGames = await getGames();
    res.json(totalGames);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getVideoGames;
