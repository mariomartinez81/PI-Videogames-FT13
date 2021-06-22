import React from 'react';
import { useDispatch } from 'react-redux';

import { alphabeticOrder, backUp, ratingOrder } from '../../actions';

import './Filtering.css';

const Filtering = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === 'A-Z' || e.target.value === 'Z-A') {
      dispatch(alphabeticOrder(e.target.value));
    } else if (
      e.target.value === 'rating-highest' ||
      e.target.value === 'rating-lowest'
    ) {
      dispatch(ratingOrder(e.target.value));
    }
    if (e.target.value === 'all') {
      dispatch(dispatch(backUp()));
    }
  };

  return (
    <div>
      <select
        name='filtering'
        id=''
        onChange={handleChange}
        className='filter-select'
      >
        <option>all</option>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>rating-highest</option>
        <option>rating-lowest</option>
      </select>
    </div>
  );
};

export default Filtering;
