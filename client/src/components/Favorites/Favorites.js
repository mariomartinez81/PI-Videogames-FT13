import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeFavorites } from '../../actions';
import './Favorites.css';

const Favorites = () => {
  const gamesFavorites = useSelector((state) => state.gamesFavorites);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      {gamesFavorites.map((game) =>
        Number.isInteger(Number(game.id)) ? (
          <div key={game.id} className='gameContainer'>
            <NavLink to={`videogame/${game.id}`}>
              <img src={game.image} alt='game' className='imgGame' />
            </NavLink>
            <h3>{game.name}</h3>
            <span>
              <b>Rating:</b> {game.rating}
            </span>
            <span
              onClick={() => dispatch(removeFavorites(game.id))}
              className='remove-fav'
            >
              ❌
            </span>
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
            <button
              onClick={() => dispatch(removeFavorites(game.id))}
              className='remove-fav'
            >
              ❌
            </button>
          </div>
        )
      )}
    </div>
  );
};
export default Favorites;
