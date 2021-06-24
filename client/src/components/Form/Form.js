import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../actions';
import Input from '../Input/Input';
import Select from '../Select/Select';
import axios from 'axios';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import './Form.css';

const platforms = [
  { name: 'XBox 360' },
  { name: 'XBox One' },
  { name: 'XBox Series S/X' },
  { name: 'PlayStation 1' },
  { name: 'PlayStation 2' },
  { name: 'PlayStation 3' },
  { name: 'PlayStation 4' },
  { name: 'PlayStation 5' },
  { name: 'PC' },
  { name: 'Nintendo' },
  { name: 'Wii' },
  { name: 'Sega' },
];

const Form = () => {
  const gamesGenres = useSelector((state) => state.gamesGenres);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({
    create: false,
  });
  const [data, setData] = useState({
    name: '',
    description: '',
    released: '',
    rating: 0,
    image: '',
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch, data, alert]);

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectPlatforms = (e) => {
    setData({
      ...data,
      platforms: [...data.platforms, e.target.value],
    });
  };

  const handleSelectGenre = (e) => {
    setData({
      ...data,
      genres: [...data.genres, e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/videogame`, data);
      setAlert({
        create: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='containerForm'>
      <h1>
        Create a new video game <br />
        🎮
      </h1>

      {alert.create ? (
        <div className='create--confirm'>
          <h3 className='message--create'>✨Game was created!✨</h3>
          <NavLink to='/home'>
            <Button title={'Go Back'} />
          </NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='style-form' data-testid='form'>
          <Input name='name' type='text' handleInput={handleInput} />
          <Input name='description' type='text' handleInput={handleInput} />
          <Input name='released' type='date' handleInput={handleInput} />
          <Input name='rating' type='number' handleInput={handleInput} />

          <Input name='image' type='text' handleInput={handleInput} />
          <>
            <Select
              name='platforms'
              data={platforms}
              handleSelect={handleSelectPlatforms}
            />
            {data.platforms.map((platform, i) => (
              <li key={i}>{platform}</li>
            ))}
          </>
          <>
            <Select
              name='genres'
              data={gamesGenres}
              handleSelect={handleSelectGenre}
              state={data}
            />

            {gamesGenres.map((genre) =>
              genre.id == data.genres.filter((select) => select) ? (
                <li>{genre.name}</li>
              ) : null
            )}
            {/* {data.genres.map((genre, i) => (
            <li key={i}>{genre}</li>
          ))} */}
          </>
          <input
            type='submit'
            value='Submit'
            className='buttonSubmit'
            data-testid='required-input-submit'
          />
        </form>
      )}
    </div>
  );
};

export default Form;
