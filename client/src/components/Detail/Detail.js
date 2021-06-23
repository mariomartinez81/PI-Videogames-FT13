import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailVideoGame } from '../../actions';
import './Detail.css';

const Detail = () => {
  const dispatch = useDispatch();
  const gameDetail = useSelector((state) => state.gameDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailVideoGame(id));
  }, [dispatch, id]);

  return (
    <div className='detail'>
      {gameDetail === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className='infoDetail'>
          <img src={gameDetail.image} alt='imgDetail' className='imgDetail' />
          <div className='scripture-detail'>
            <h1 className='h1-detail'>{gameDetail.name}</h1>
            <span>
              <strong> 🌟 Rating:</strong> {gameDetail.rating}
            </span>
            <br />
            <span>
              {' '}
              <strong> 📅 Relesed: </strong> {gameDetail.released}
            </span>{' '}
            <br />
            <span>
              <strong>🎮 Platforms:</strong>
              {gameDetail.platforms.map((platform) =>
                platform.platform ? (
                  <div key={platform.platform.id}>
                    <li>{platform.platform.name}</li>
                  </div>
                ) : (
                  <div key={platform.name}>
                    <li>{platform}</li>
                  </div>
                )
              )}
            </span>
            <br />
            <span>
              <strong>🎭 Genres:</strong>
              {gameDetail.genre
                ? gameDetail.genre.map((genre) => (
                    <span key={genre.id}> {genre.name}/</span>
                  ))
                : gameDetail.Genres.map((genre) => (
                    <span key={genre.id}> {genre.name}/</span>
                  ))}
            </span>
            <p>
              <strong> 📜 Description: </strong>
              {gameDetail.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
