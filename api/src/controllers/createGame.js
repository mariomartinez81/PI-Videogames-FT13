const { Videogame, Genre } = require('../db.js');
const { v4: UUIDV4 } = require('uuid');

async function createVideoGame(req, res) {
  const { name, description, released, rating, platforms, genres } = req.body;
  try {
    const newVideoGame = await Videogame.create({
      id: UUIDV4(),
      name,
      description,
      released,
      rating,
      platforms,
    });
    await newVideoGame.addGenres(genres); // pendiente esta linea de codigo por revisar

    if (newVideoGame)
      return res.json({
        message: 'New video game created successfully',
        data: newVideoGame,
      });
  } catch (error) {
    if (!name || name === '')
      return res.status(400).json({ message: 'the name entered is not valid' });
    if (!description || description === '')
      return res
        .status(400)
        .json({ message: 'the description entered is not valid' });
    if (!platforms || platforms === '')
      return res
        .status(400)
        .json({ message: 'the platforms entered is not valid' });

    return res.status(500).json({ message: 'Something went wrong 😥' });
  }
}

module.exports = createVideoGame;
