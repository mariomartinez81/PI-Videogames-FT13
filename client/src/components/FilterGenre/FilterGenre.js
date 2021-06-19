import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './FilterGenre.css';

const FilterGenre = ({ gamesLoaded }) => {
  const gamesByGenre = useSelector((state) => state.gamesByGenre);

  return (
    <>
      <div className='container-gemes-genres'>
        {gamesByGenre ? (
          gamesByGenre.results.map((game) => (
            <div key={game.id} className='container-item'>
              <NavLink to={`videogame/${game.id}`}>
                <img src={game.image} alt='game' className='imgGame' />
              </NavLink>
              <h3>{game.name}</h3>
              {/* .filter((genre) => genre.name === select) */}
              {game.genre.map((genre) => (
                <div key={genre.id}>
                  <li>{genre.name}</li>
                </div>
              ))}
            </div>
          ))
        ) : (
          <h1>...</h1>
        )}
      </div>
    </>
  );
};

export default FilterGenre;
