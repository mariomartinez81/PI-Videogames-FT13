const { Videogame, Genre } = require('../db.js');
const axios = require('axios').default;
const key = 'e05aeb3a65a04f699125f7dfe5318bd6';

async function getVideoGamesById(req, res) {
  const { id } = req.params;
  const idIsNumber = /^[0-9]+$/.test(id);
  // const idIsUUID =
  //   /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(
  //     id
  //   );

  if (idIsNumber) {
    try {
      const gamesById = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${key}`
      );
      const findGame = await gamesById.data;
      let detailGame = {
        name: findGame.name,
        description: findGame.description_raw,
        image: findGame.background_image,
        genre: findGame.genres,
        released: findGame.released,
        rating: findGame.rating,
        platforms: findGame.platforms,
      };
      res.json(detailGame);
    } catch (error) {
      return res.status(404).json({
        message: 'The request not found.',
      });
    }
  }
  if (id.toString().includes('-')) {
    const findInDb = await Videogame.findOne({
      where: {
        id: id,
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
    return res.json(findInDb);
  }
  return res.status(404).json({
    message: 'The requested resource was not found on this server.',
  });
}

module.exports = getVideoGamesById;
