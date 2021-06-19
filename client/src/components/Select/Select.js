import React, { useState } from 'react';
import './Select.css';

const Select = ({ name, data, handleSelect }) => {
  const [stateSelect, setStateSelect] = useState({
    error: true,
    messageError: 'Error: required field, you must choose at least one item',
  });

  const handleInput = (e) => {
    if (name === 'platforms' && e.target.value.length > 2) {
      setStateSelect({
        error: false,
        messageError: '',
      });
    } else if (name === 'genres' && e.target.value.length > 3) {
      setStateSelect({
        error: false,
        messageError: '',
      });
    }
  };
  return (
    <div className='container-selector'>
      <label htmlFor=''>
        {name} <br />
        <select
          name={name}
          onChange={handleInput}
          onInput={handleSelect}
          className={stateSelect.error ? 'selector-border' : 'selector'}
        >
          {data.map((ele, i) => (
            <option key={i}>{ele.name}</option>
          ))}
        </select>
        {stateSelect.error && (
          <p className='input-error'>{stateSelect.messageError}</p>
        )}
      </label>
    </div>
  );
};

export default Select;
