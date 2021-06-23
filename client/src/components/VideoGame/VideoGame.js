import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorites } from '../../actions';
import { pagination } from '../../utils/pagination';
import './VideoGame.css';

const VideoGame = ({ data, page }) => {
  let renderData;
  if (data) {
    renderData = pagination(data.results, page);
  }
  const dispatch = useDispatch();
  return (
    <div className='container'>
      {renderData ? (
        renderData.results.map((game) => (
          <div key={game.id} className='gameContainer'>
            <NavLink to={`videogame/${game.id}`}>
              <img src={game.image} alt='game' className='imgGame' />
            </NavLink>
            <h3>{game.name}</h3>
            <span>
              <b>Rating:</b> {game.rating}
            </span>
            {game.genre
              ? game.genre.map((genre) => (
                  <div key={genre.id}>
                    <li>{genre.name}</li>
                  </div>
                ))
              : game.Genres.map((genre) => (
                  <div key={genre.id}>
                    <li>{genre.name}</li>
                  </div>
                ))}

            <figure
              onClick={() =>
                dispatch(
                  addFavorites({
                    name: game.name,
                    id: game.id,
                    image: game.image,
                    rating: game.rating,
                  })
                )
              }
              className='img-fav'
            >
              ⭐
            </figure>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default VideoGame;
