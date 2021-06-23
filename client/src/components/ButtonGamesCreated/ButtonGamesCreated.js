import React from 'react';
import { useDispatch } from 'react-redux';
import { getGamesCreated } from '../../actions';
import './ButtonGamesCreated.css';

const ButtonGamesCreated = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getGamesCreated());
  };
  return (
    <>
      <button onClick={handleClick} className='buttonGamesCreate'>
        Games Created
      </button>
    </>
  );
};

export default ButtonGamesCreated;
