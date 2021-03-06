import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorites } from '../../actions';
import { pagination } from '../../utils/pagination';
import './VideoGame.css';

const VideoGame = ({ data, page }) => {
  const dispatch = useDispatch();

  let renderData;
  if (data) {
    renderData = pagination(data.results, page);
  }

  return (
    <div data-testid='videogames-card' className='container-game'>
      {renderData ? (
        renderData.results.map((game) => (
          <div key={game.id} className='gameContainer'>
            <NavLink to={`videogame/${game.id}`}>
              <img src={game.image} alt='game' className='imgGame' />
            </NavLink>
            <h3>{game.name}</h3>
            <span>
              <b>Rating:</b> {game.rating}
            </span>
            {game.genre
              ? game.genre.map((genre) => (
                  <div key={genre.id}>
                    <li>{genre.name}</li>
                  </div>
                ))
              : game.Genres.map((genre) => (
                  <div key={genre.id}>
                    <li>{genre.name}</li>
                  </div>
                ))}

            <figure
              onClick={() =>
                dispatch(
                  addFavorites({
                    name: game.name,
                    id: game.id,
                    image: game.image,
                    rating: game.rating,
                  })
                )
              }
              className='img-fav'
            >
              <button className='start-fav'>⭐</button>
            </figure>
          </div>
        ))
      ) : (
        <img
          src='https://www.gifss.com/videojuegos/pacman/images/gif-pacman-11.gif'
          alt='loading'
        />
      )}
    </div>
  );
};

export default VideoGame;

/* <h1>Loading...</h1> */
