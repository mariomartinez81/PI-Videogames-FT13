import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  backUp,
  filterGenre,
  getVideogames,
  orderingAz,
  orderingZa,
  ratingOrderHighest,
  ratingOrderingLowest,
} from '../../actions';
//components
import OrderedAZ from '../Ordered/OrderedAZ';
import OrderedZA from '../Ordered/OrderedZA';
import Pagination from '../Pagination/Pagination';
import Highest from '../RatingOrder/Highest';
import Lowest from '../RatingOrder/Lowest';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import FilterGenre from '../FilterGenre/FilterGenre';
import Select from '../Select/Select';
import '../Select/Select.css';
//img
import createGame from '../../assets/img/createGame4.png';

//css
import './Home.css';

const Home = () => {
  const gamesLoaded = useSelector((state) => state.gamesLoaded);
  const gamesByName = useSelector((state) => state.gamesByName);
  const gamesByGenre = useSelector((state) => state.gamesByGenre);
  const type = useSelector((state) => state.type);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  //handle back search
  const handleBack = () => {
    dispatch(backUp());
  };

  // handles alphabetic order
  const handleOrderAZ = () => {
    dispatch(orderingAz());
  };
  const handleOrderZA = () => {
    dispatch(orderingZa());
  };

  // handles ratings order
  const handleHigest = () => {
    dispatch(ratingOrderHighest());
  };
  const handleLowest = () => {
    dispatch(ratingOrderingLowest());
  };

  //handles paginations
  const handleNext = () => {
    // if (type === 'byGenres') {
    //   dispatch(filterGenre(false, gamesByGenre.next_page));
    // }

    const { next_page } = gamesLoaded;
    dispatch(getVideogames(next_page));
  };
  const handlePrev = () => {
    // if (type === 'byGenres') {
    //   dispatch(filterGenre(false, gamesByGenre.previous_page));
    // }
    const { previous_page } = gamesLoaded;
    dispatch(getVideogames(previous_page));
  };

  return (
    <>
      <NavLink to='/creategame'>
        <img
          src={createGame}
          alt='imgCreateGame'
          width='20%'
          className='imgCreateGame'
        />
      </NavLink>
      <Search />

      <SearchByGenre gamesLoaded={gamesLoaded} />

      <button onClick={handleOrderAZ}>A - Z</button>
      <button onClick={handleOrderZA}>Z - A</button>
      <button onClick={handleHigest}>Rating ➕ </button>
      <button onClick={handleLowest}>Rating ➖ </button>

      {type === 'byGenres' && (
        <>
          <button onClick={handleBack}>🔙 </button>
          <FilterGenre gamesLoaded={gamesLoaded} />
        </>
      )}
      {type === 'ordering-AZ' && (
        <>
          <button onClick={handleBack}>🔙 </button>
          <OrderedAZ handleOrderAZ={handleOrderAZ} gamesLoaded={gamesLoaded} />
        </>
      )}
      {type === 'ordering-ZA' && (
        <>
          <button onClick={handleBack}>🔙 </button>
          <OrderedZA gamesLoaded={gamesLoaded} handleOrderZA={handleOrderZA} />
        </>
      )}
      {type === 'rating-highest' && (
        <>
          <button onClick={handleBack}>🔙 </button>
          <Highest
            gamesLoaded={gamesLoaded}
            ratingOrderHighest={ratingOrderHighest}
          />
        </>
      )}
      {type === 'rating-lowest' && (
        <>
          <button onClick={handleBack}>🔙 </button>
          <Lowest
            gamesLoaded={gamesLoaded}
            ratingOrderingLowest={ratingOrderingLowest}
          />
        </>
      )}
      {type === 'search' && (
        <div>
          <button onClick={handleBack}>🔙 </button>
          <div className='container'>
            {gamesByName.map((game) => (
              <div key={game.id} className='gameContainer'>
                <NavLink to={`/videogame/${game.id}`}>
                  <img src={game.image} alt='gameImg' className='imgGame' />
                </NavLink>
                <h4>{game.name}</h4>
                <span>
                  <b>Rating:</b> {game.rating}
                </span>
                {game.genre.map((genre) => (
                  <div key={genre.id}>
                    <li>{genre.name}</li>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {type === 'all' && (
        <div className='container'>
          {gamesLoaded ? (
            gamesLoaded.results.map((game) =>
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
                  {/* <NavLink to={`videogame/${game.id}`}>
                    <h3>{game.name}</h3>
                  </NavLink> */}
                </div>
              )
            )
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      )}
      <div className='pagination'>
        <Pagination next={handleNext} prev={handlePrev} />
      </div>
    </>
  );
};

export default Home;

/* 

       {stateAZ === false &&
          stateZA === false &&
          highest === false &&
          lowest === false ? (
            <div className='container'>
              {typeof gamesLoaded === 'object' ? (
                gamesLoaded.results.map((game) =>
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
                    </div>
                  )
                )
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          ) : stateAZ === true ? (
            <OrderedAZ gamesLoaded={gamesLoaded} />
          ) : stateZA === true ? (
            <OrderedZA gamesLoaded={gamesLoaded} />
          ) : highest === true ? (
            <Highest gamesLoaded={gamesLoaded} />
          ) : (
            lowest === true && <Lowest gamesLoaded={gamesLoaded} />
          )}

*/
