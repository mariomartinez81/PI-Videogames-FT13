import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backUp, filterGenre, getGenres } from '../../actions';
import './SearchByGenre.css';

const SearchByGenre = () => {
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();
  const gamesGenres = useSelector((state) => state.gamesGenres);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(filterGenre(select));
    // return () => {
    // };
  }, [dispatch, select]);

  const handleBack = () => {
    dispatch(backUp());
  };

  const handleSelector = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className='search-by-genre'>
      {gamesGenres && (
        <label htmlFor=''>
          Search by genre 🔍
          <br />
          <select
            name='filterGenre'
            id=''
            onChange={handleSelector}
            className='search-select'
          >
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
