/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
// var supertest = require('supertest-as-promised')(require('../../src/app'));
const { Videogame, conn, Genre } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'This is a demo game for test',
  platforms: 'Play Station 5',
};
const genre = {
  name: 'Action',
};

describe('Videogame routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  beforeEach(
    () => {
      Videogame.sync({ force: true }).then(() => Videogame.create(videogame));
      Genre.sync({ force: true }).then(() => Genre.create(genre));
    }
    // Videogame.sync({ force: true })
  );

  describe('GET /videogames', () => {
    it('should get 200', () => {
      Videogame.create(videogame);
      agent.get('/videogames').expect(200);
    });
    it('should get 200 and and contain 15 video games', () => {
      agent
        .get('/videogames')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toHaveLength(15);
        });
    });
  });

  // My Test:
  describe('GET /videgames?name', () => {
    it('should get 200 and return the first 15 video games containing the name passed by query ', () => {
      agent
        .get('/videogames?name=mario')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toHaveLength(15);
        });
    });

    it('should get 404 when video game dont found', () => {
      agent
        .get('/videogames?name=***')
        .expect(404)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            message: 'The requested resource was not found on this server.',
          });
        });
    });
  });

  describe('GET /videgame/:id', () => {
    it('should get 200 and return the video game with the id passed by params ', () => {
      agent
        .get('/videogames/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body.name).toEqual('D/Generation HD');
        });
    });

    it('should get 404 when video game dont found', () => {
      agent
        .get('/videogames/999999')
        .expect(404)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            message: 'The requested resource was not found on this server.',
          });
        });
    });
  });

  describe('GET /genres', () => {
    agent
      .get('/genres')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
      });
  });

  describe('POST /videogame', () => {
    it('crated in data base and return the created game', () => {
      agent
        .post('/videogame')
        .send({
          name: 'Juegazo',
          description: 'This is a demo game for beginners gamers',
          relesead: '2021-06-10',
          rating: 4.5,
          platforms: 'PlayStation 5',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            name: 'Juegazo',
            description: 'This is a demo game for beginners gamers',
            relesead: '2021-06-10',
            rating: 4.5,
            platforms: 'PlayStation 5',
          });
        });
    });
    it('return a error message if name is equal to "" or null', () => {
      agent
        .post('/videogame')
        .send({
          name: '',
          description: 'This is a demo game for beginners gamers',
          relesead: '2021-06-10',
          rating: 4.5,
          platforms: 'PlayStation 5',
        })
        .expect(400)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            message: 'the name entered is not valid',
          });
        });
    });
    it('return a error message if description is equal to "" or null', () => {
      agent
        .post('/videogame')
        .send({
          name: 'Juegazo',
          description: '',
          relesead: '2021-06-10',
          rating: 4.5,
          platforms: 'PlayStation 5',
        })
        .expect(400)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            message: 'the description entered is not valid',
          });
        });
    });
    it('return a error message if name is equal to "" or null', () => {
      agent
        .post('/videogame')
        .send({
          name: 'Juegazo',
          description: 'This is a demo game for beginners gamers',
          relesead: '2021-06-10',
          rating: 4.5,
          platforms: '',
        })
        .expect(400)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toEqual({
            message: 'the platforms entered is not valid',
          });
        });
    });
  });
});

//

//

//
/*


const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});


 */
