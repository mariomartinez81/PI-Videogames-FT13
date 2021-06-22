import React from 'react';
import { NavLink } from 'react-router-dom';
import { pagination } from '../../utils/pagination';
import './VideoGame.css';

const VideoGame = ({ data, page }) => {
  let renderData;
  if (data) {
    renderData = pagination(data.results, page);
  }
  return (
    <div className='container'>
      {renderData ? (
        renderData.results.map((game) =>
          Number.isInteger(Number(game.id)) ? (
            <div key={game.id} className='gameContainer'>
              <NavLink to={`videogame/${game.id}`}>
                <img src={game.image} alt='game' className='imgGame' />
              </NavLink>
              <h3>{game.name}</h3>
              <span>
                <b>Rating:</b> {game.rating}
              </span>
              {game.genre.map((genre) => (
                <div key={genre.id}>
                  <li>{genre.name}</li>
                </div>
              ))}
            </div>
          ) : (
            <div key={game.id} className='gameContainer'>
              <NavLink to={`videogame/${game.id}`}>
                <img src={game.image} alt='game' className='imgGame' />
              </NavLink>
              <h3>{game.name}</h3>
              <span>
                <b>Rating:</b> {game.rating}
              </span>
              {game.Genres.map((genre) => (
                <div key={genre.id}>
                  <li>{genre.name}</li>
                </div>
              ))}
            </div>
          )
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default VideoGame;
