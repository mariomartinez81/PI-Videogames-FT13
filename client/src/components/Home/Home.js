import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  alphabeticOrder,
  backUp,
  filterGenre,
  getVideogames,
} from '../../actions';
//components

import Pagination from '../Pagination/Pagination';
import FilterGenre from '../FilterGenre/FilterGenre';
// import Filtering from '../Filtering/Filtering';
import AlphabeticOrder from '../AlphabeticOrder/AlphabeticOrder';
import RatingOrder from '../RatingOrder/RatingOrder';

// import Search from '../Search/Search';
// import SearchByGenre from '../SearchByGenre/SearchByGenre';
// import NavBar from '../NavBar/NavBar';

//img
// import createGame from '../../assets/img/createGame4.png';

//css
import './Home.css';

const Home = () => {
  const gamesLoaded = useSelector((state) => state.gamesLoaded);
  const gamesByName = useSelector((state) => state.gamesByName);
  const gamesByGenre = useSelector((state) => state.gamesByGenre);
  const alphabeticOrdering = useSelector((state) => state.alphabeticOrdering);
  const ratingOrdering = useSelector((state) => state.ratingOrdering);
  const type = useSelector((state) => state.type);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  //handle back search
  const handleBack = () => {
    dispatch(backUp());
  };

  //handles paginations
  const handleNext = () => {
    if (type === 'byGenres') {
      dispatch(filterGenre(false, gamesByGenre.next_page));
    }
    if (type === 'A-Z' || type === 'Z-A') {
      dispatch(alphabeticOrder(false, alphabeticOrdering.next_page));
    } else {
      const { next_page } = gamesLoaded;
      dispatch(getVideogames(next_page));
    }
  };
  const handlePrev = () => {
    if (type === 'byGenres') {
      dispatch(filterGenre(false, gamesByGenre.previous_page));
    } else if (type === 'rating-highest' || type === 'rating-lowest') {
      dispatch(false, ratingOrdering.previous_page);
    } else {
      const { previous_page } = gamesLoaded;
      dispatch(getVideogames(previous_page));
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      {/* <NavLink to='/creategame'>
        <img
          src={createGame}
          alt='imgCreateGame'
          width='20%'
          className='imgCreateGame'
        />
      </NavLink> */}

      {/* <Search /> */}
      {/* <SearchByGenre gamesLoaded={gamesLoaded} /> */}

      {/* <Filtering /> */}

      {type === 'byGenres' && (
        <>
          <FilterGenre gamesLoaded={gamesLoaded} />
        </>
      )}

      {type === 'A-Z' || type === 'Z-A' ? <AlphabeticOrder /> : null}

      {type === 'rating-highest' || type === 'rating-lowest' ? (
        <RatingOrder />
      ) : null}

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
