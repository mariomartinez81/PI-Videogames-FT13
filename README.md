# Full Stack Project - VideoGamesAPP 🎮 (monorepo)

<p align="right">
  <img height="200" src="./client/src/assets/img/videogame.png" />
</p>

Look for your favorite Video games, add to favorites, search your favorite games and create new ones; share your pasion with fans around the world.

## Frontend

### **Tech stack**

- JavaScript
- React
- React router
- Redux
- Css for component styles
- PropTypes
- SweetAlert 2.0

**Framework:** Create-React-App.

### **Scripts**

- `npm install` for dependencies
- `npm start` for development environment
- `npm test` for JEST unit testing
- `npm run build` to create production build

### **Features**

- Landing page to access the app
- Main Video games' screen with the 40 most representative video games (their names, picture, genres and rating)
  - **Search bar** to search a video game by name
  - **Filter options:** to filter video games list by video games genre, community created video games or genuine video game
  - **Sort options:** to sort the video games list by ID, Name (A-Z or Z-A) or Rating (low-high or high-low)
  - **Pagination:** to show maximum 15 video games per page
- Video game detail screen with all the details for each video game (ID, picture, rating, genre(s) and description)
- Form fully opened to the community for creating new video game!
- 100% responsive design

## **Backend**

### **Tech stack**

- JavaScript
- NodeJS
- Express

### **Scripts**

- `npm install` for dependencies
- `npm start` for development environment with nodemon
- `npm test` for MOCHA & CHAI unit testing

### **Features**

- API implemented with **REST** architecture
- API tested and documented with Postman
- Routes layer and Services layer implemented (only the services are able to interact with the DB controllers)

### **Endpoints**

- Genre:
  - `/genres` GET all video games per genres
- Video game:
  - `/videogames` GET the most representative vidogame, POST a new Videogame or DELETE created video game (one or all)
  - `/videogame?name=xxxx` GET the videogame detail by name
  - `/videogame/:id` GET the videogame detail by ID

## **Database**

### **Tech stack**

- PostgreSQL
- Sequelize

### **Features**

- 2 Models implemented -> Video game & Genre
- Relation between the models -> N:M\*
- Controllers layer implemented (only the controllers are able to interact directly with the PostgreSQL DB & Sequelize)
- Database hosted online with Heroku Data

## **Testing**

### **Tech stack**

- JEST + Enzyme
- Mocha + Chai
- Supertest
- Testing-library

## **License**

MIT.

_The app uses personal key for the use._
