import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const OrderedZA = ({ gamesLoaded, handleOrderZA }) => {
  const orderingZA = useSelector((state) => state.orderingZA);

  useEffect(() => {
    handleOrderZA();
  }, [gamesLoaded, handleOrderZA]);

  return (
    <div className='container'>
      {orderingZA &&
        orderingZA.map((game) =>
          game.image ? (
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
            <div className='gameContainer'>
              <NavLink to={`videogame/${game.id}`}>
                <h3>{game.name}</h3>
              </NavLink>
              {/* {game.genre.map((genre) => (
                  <div key={genre.id}>
                    <h6>{genre.name}</h6>
                  </div>
                ))} */}
            </div>
          )
        )}
    </div>
  );
};

export default OrderedZA;
