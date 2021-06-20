const { Router } = require('express');
const getGamesByGenre = require('../controllers/getGamesByGenre.js');
const getVideoGamesById = require('../controllers/getGamesById.js');
const getVideoGamesGenders = require('../controllers/getGenres.js');
const getVideoGames = require('../controllers/getVideogames.js');
const createVideoGame = require('../controllers/createGame.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/videogame', createVideoGame);

router.get('/videogames', getVideoGames);
// router.get('/videogames?name', getVideoGames);

router.get('/genres', getVideoGamesGenders);
router.get('/videogame/:id', getVideoGamesById);

module.exports = router;
