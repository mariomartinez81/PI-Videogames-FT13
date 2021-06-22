import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, setPage } from '../../actions';
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
  const page = useSelector((state) => state.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch, type]);
  //handles paginations
  const handleNext = () => {
    dispatch(setPage(page + 1));
  };
  const handlePrev = () => {
    dispatch(setPage(page - 1));
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

      {type === 'all' && <VideoGame data={gamesLoaded} page={page} />}

      {type === 'search' && <VideoGame data={gamesByName} page={page} />}

      {type === 'byGenres' && (
        <>
          <VideoGame data={gamesByGenre} page={page} />
        </>
      )}

      {type === 'A-Z' || type === 'Z-A' ? (
        <VideoGame data={alphabeticOrdering} page={page} />
      ) : null}

      {type === 'rating-highest' || type === 'rating-lowest' ? (
        <VideoGame data={ratingOrdering} page={page} />
      ) : null}

      <div className='pagination'>
        <Pagination next={handleNext} prev={handlePrev} />
      </div>
    </>
  );
};

export default Home;
