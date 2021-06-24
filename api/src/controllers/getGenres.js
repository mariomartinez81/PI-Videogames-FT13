const { Genre } = require('../db.js');
async function getVideoGamesGenders(req, res) {
  try {
    const genresDB = await Genre.findAll();
    res.send(genresDB);
  } catch (error) {
    genres.forEach((genre) => {
      if (!genre.name) {
        throw new Error('It requires a valid name');
      }
    });
    if (genresDB.length < 1) {
      return res.status(400).json({
        error: 'The requested resource was not found on this server.',
      });
    }
    return res.status(500).json({ error: 'Something goes wrong 😥' });
  }
}

module.exports = getVideoGamesGenders;
