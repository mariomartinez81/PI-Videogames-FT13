//
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Genre } = require('./src/db');
const axios = require('axios').default;
const { APY_KEY } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  axios
    .get(`https://api.rawg.io/api/genres?key=${APY_KEY}`)
    .then(
      (response) =>
        response.data &&
        response.data.results.forEach(
          async (genre) =>
            await Genre.create({
              name: genre.name,
            })
        )
    )
    .catch((error) => console.log(error));
});
