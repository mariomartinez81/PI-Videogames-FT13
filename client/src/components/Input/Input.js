import React, { useState } from 'react';
import './input.css';

const Input = ({ name, handleInput, type }) => {
  const [state, setState] = useState({
    error: false,
    messageError: '',
  });
  const handleIn = (e) => {
    if (name === 'name' && e.target.value.length < 3) {
      setState({
        error: true,
        messageError:
          'Error: required set name and greater than three characters',
      });
    } else if (name === 'description' && e.target.value.length < 15) {
      setState({
        error: true,
        messageError:
          'Error: required field, must contain at least fifteen characters',
      });
    } else {
      setState({
        error: false,
        messageError: '',
      });
    }
  };

  return (
    <div className='input-component'>
      <label htmlFor='text'>
        <span>{name}</span>
        <input
          type={type}
          placeholder='input name'
          name={name}
          className={state.error ? 'border-error' : 'style-input'}
          onInput={handleIn}
          onChange={handleInput}
        />
        {state.error && <p className='input-error'>{state.messageError}</p>}
      </label>
    </div>
  );
};

export default Input;
