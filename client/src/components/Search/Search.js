import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogamesByname } from '../../actions';
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

  return (
    <>
      <div className='search-div'>
        <input
          type='text'
          placeholder='search game by name'
          onChange={handleChanges}
          className='search-videogame'
          id='inputSearch'
        ></input>
        <button onClick={handleClick} className='btn-search'>
          🏸
        </button>
      </div>
    </>
  );
};

export default Search;
