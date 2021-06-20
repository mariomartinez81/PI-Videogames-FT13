import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const AlphabeticOrder = () => {
  const alphabeticOrdering = useSelector((state) => state.alphabeticOrdering);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   handleOrderAZ();
  // }, [gamesLoaded, handleOrderAZ]);
  return (
    <div className='container'>
      {alphabeticOrdering &&
        alphabeticOrdering.results.map((game) =>
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

export default AlphabeticOrder;

/* 
   <div className='container'>
      {typeof gamesLoaded === 'object' ? (
        orderingAZ.map((game) =>
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
              // {game.genre.map((genre) => (
              //     <div key={genre.id}>
              //       <h6>{genre.name}</h6>
              //     </div>
              //   ))}
            </div>
          )
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};


*/
