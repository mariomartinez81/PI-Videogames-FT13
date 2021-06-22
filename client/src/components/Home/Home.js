import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  alphabeticOrder,
  filterGenre,
  getVideogames,
  getVideogamesByname,
  ratingOrder,
} from '../../actions';
//components

import Pagination from '../Pagination/Pagination';
import VideoGame from '../VideoGame/VideoGame';
// import Filtering from '../Filtering/Filtering';

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
  // const option = useSelector((state) => state.option);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch, type]);
  //handles paginations
  const handleNext = () => {
    setPage((page) => page + 1);
    // if (type === 'byGenres') {
    //   dispatch(filterGenre(option, 2));
    // }
    // else if (type === 'A-Z' || type === 'Z-A') {
    //   dispatch(alphabeticOrder(false, alphabeticOrdering.next_page));
    // } else if (type === 'rating-highest' || type === 'rating-lowest') {
    //   dispatch(ratingOrder(false, ratingOrdering.next_page));
    // } else if ('search') {
    //   dispatch(getVideogamesByname(false, gamesByName.next_page));
    // } else if ('all') {
    //   dispatch(getVideogames(gamesLoaded.next_page));
    // }
  };
  const handlePrev = () => {
    setPage((page) => page - 1);
    // if (type === 'byGenres') {
    //   dispatch(filterGenre(option, 1));
    // }
    // else if (type === 'rating-highest' || type === 'rating-lowest') {
    //   dispatch(ratingOrder(false, ratingOrdering.previous_page));
    // } else if ('search') {
    //   dispatch(getVideogamesByname(false, gamesByName.previous_page));
    // } else if ('all') {
    //   dispatch(getVideogames(gamesLoaded.previous_page));
    // }
  };

  return (
    <>
      <h1>🎮 Video Games 🎮</h1>
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
          <VideoGame data={gamesByGenre} page={page} />
        </>
      )}

      {type === 'A-Z' || type === 'Z-A' ? (
        <VideoGame data={alphabeticOrdering} />
      ) : null}

      {type === 'rating-highest' || type === 'rating-lowest' ? (
        <VideoGame data={ratingOrdering} />
      ) : null}

      {type === 'search' && <VideoGame data={gamesByName} />}

      {type === 'all' && <VideoGame data={gamesLoaded} page={page} />}
      <div className='pagination'>
        <Pagination next={handleNext} prev={handlePrev} />
      </div>
    </>
  );
};

export default Home;
