import React from 'react';
import './CheckboxGenres.css';

const CheckboxGenres = ({ data, handleSelectGenre }) => {
  return (
    <div className='select-genres'>
      {data.map((genre) => (
        <div className='contain-genre'>
          <label htmlFor=''>
            {genre.name}
            <input
              type='checkBox'
              value={genre.id}
              onChange={handleSelectGenre}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGenres;
