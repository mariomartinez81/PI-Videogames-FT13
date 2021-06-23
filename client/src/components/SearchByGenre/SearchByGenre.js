import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGenre, getGenres } from '../../actions';
import './SearchByGenre.css';

const SearchByGenre = () => {
  const dispatch = useDispatch();
  const gamesGenres = useSelector((state) => state.gamesGenres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelector = (e) => {
    dispatch(filterGenre(e.target.value));
  };

  return (
    <div className='search-by-genre'>
      {gamesGenres && (
        <>
          <select
            name='filterGenre'
            id='selector'
            onChange={handleSelector}
            className='search-select'
          >
            <option value='-1'>Select a Genre</option>
            {gamesGenres.map((genre, i) => (
              <option key={i}>{genre.name}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default SearchByGenre;

/* <button onClick={handleBack}>🔙 </button> */
