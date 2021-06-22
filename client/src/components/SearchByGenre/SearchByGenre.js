import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backUp, filterGenre, getGenres, setPage } from '../../actions';
import './SearchByGenre.css';

const SearchByGenre = () => {
  const dispatch = useDispatch();
  const gamesGenres = useSelector((state) => state.gamesGenres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleBack = () => {
    dispatch(backUp());
    dispatch(setPage(1));
    document.querySelector('#selector').value = -1;
  };

  const handleSelector = (e) => {
    dispatch(filterGenre(e.target.value));
  };

  return (
    <div className='search-by-genre'>
      {gamesGenres && (
        <label htmlFor=''>
          Search by genre 🔍
          <br />
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
          <button onClick={handleBack}>🔙 </button>
        </label>
      )}
    </div>
  );
};

export default SearchByGenre;
