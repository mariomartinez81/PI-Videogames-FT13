import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, setPage } from '../../actions';
//components

import Pagination from '../Pagination/Pagination';
import VideoGame from '../VideoGame/VideoGame';

//img

//css
import './Home.css';

const Home = () => {
  const gamesLoaded = useSelector((state) => state.gamesLoaded);
  const gamesByName = useSelector((state) => state.gamesByName);
  const gamesByGenre = useSelector((state) => state.gamesByGenre);
  const alphabeticOrdering = useSelector((state) => state.alphabeticOrdering);
  const ratingOrdering = useSelector((state) => state.ratingOrdering);
  const gamesCreated = useSelector((state) => state.gamesCreated);
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

  console.log(gamesLoaded);

  return (
    <>
      <h1 className='h1'>🍄VIDEO GAMES🍄</h1>

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

      {type === 'gamesCreated' && <VideoGame data={gamesCreated} page={page} />}

      <div className='pagination'>
        <Pagination next={handleNext} prev={handlePrev} />
      </div>
    </>
  );
};

export default Home;
