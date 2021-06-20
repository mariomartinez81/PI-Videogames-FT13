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
      <div>
        {/* <h1>🎮 Video Games 🎮</h1> */}
        <input
          type='text'
          placeholder='search game by name'
          onChange={handleChanges}
          className='search-videogame'
        />
        <button onClick={handleClick}>🏸</button>
      </div>
    </>
  );
};

export default Search;
