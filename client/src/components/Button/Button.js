import React from 'react';
import { backUp, setPage } from '../../actions';
import { useDispatch } from 'react-redux';
import './Button.css';

const Button = ({ title }) => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(backUp());
    dispatch(setPage(1));
    document.querySelector('#selector').value = -1;
    document.querySelector('#inputSearch').value = '';
  };
  return (
    <>
      <button onClick={handleBack} className='buttonNav'>
        {title}
      </button>
    </>
  );
};

export default Button;
