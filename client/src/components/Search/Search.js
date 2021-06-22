import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { backUp, getVideogamesByname, setPage } from '../../actions';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    dispatch(getVideogamesByname(input));
  };

  const handleBack = () => {
    dispatch(backUp());
    dispatch(setPage(1));
    document.querySelector('#inputSearch').value = '';
  };
  return (
    <>
      <div>
        <input
          type='text'
          placeholder='search game by name'
          onChange={handleChanges}
          className='search-videogame'
          id='inputSearch'
        />
        <button onClick={handleClick}>🏸</button>
        <button onClick={handleBack}>🔙 </button>
      </div>
    </>
  );
};

export default Search;
