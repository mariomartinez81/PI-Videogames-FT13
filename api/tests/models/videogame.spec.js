const { Videogame, conn, Genre } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid description', () => {
        Videogame.create({ description: 'this games is a demo for test' });
      });
    });
    describe('platforms', () => {
      it('should throw an error if platforms is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid platforms')))
          .catch(() => done());
      });
      it('should work when its a valid platforms', () => {
        Videogame.create({ platform: 'Play Station 5' });
      });
    });
  });
  //My test:
  describe('Genre model', () => {
    beforeEach(() => Genre.sync({ force: true }));
    describe('Validation', () => {
      it('should throw an error if name is null', (done) => {
        Genre.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should be created', () => {
        Genre.create({ name: 'Action' });
      });
    });
  });
});
