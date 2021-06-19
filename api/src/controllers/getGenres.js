const { Videogame, Genre } = require('../db.js');
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
// if (typesDB.length === 0) {
//   let typesRes = await axios(`https://pokeapi.co/api/v2/type`);
//   var types = typesRes.data.results.map((type) => {
//     return { name: type.name };
//   });
//   //guardar types en la BD
//   Type.bulkCreate(types);
//   return res.json(types);
// }
// res.json(typesDB);

module.exports = getVideoGamesGenders;
