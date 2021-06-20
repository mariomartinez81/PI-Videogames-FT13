import React, { useState } from 'react';
import './Filtering.css';

const Filtering = () => {
  const [filters, setFilters] = useState('');

  const handleChange = (e) => {
    setFilters(e.target.value);
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
        <option>ordering-AZ</option>
        <option>ordering-ZA</option>
        <option>rating-highest</option>
        <option>rating-lowest</option>
      </select>
    </div>
  );
};

export default Filtering;
