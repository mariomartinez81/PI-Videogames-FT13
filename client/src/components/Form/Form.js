import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postVideogame } from '../../actions';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import CheckboxGenres from '../CheckboxsGenres/CheckboxGenres';
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
  const [genresName, setGenresName] = useState({
    genresName: [],
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
    setGenresName({
      genresName: [...genresName.genresName, e.target.value2],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postVideogame(data));
    setAlert({
      create: true,
    });
  };
  return (
    <div className='containerForm'>
      {alert.create ? (
        <div className='create--confirm'>
          <h3 className='message--create'>✨Game was created!✨</h3>

          <NavLink to='/home'>
            <Button title={'Go Back'} />
          </NavLink>
          <img
            src='https://i.gifer.com/KGTD.gif'
            // src='https://gatesbbq.com/wp-content/uploads/2017/04/checkmarksuccess.gif'
            alt='img-dreated-game'
            width='70%'
          />
        </div>
      ) : (
        <div>
          <h1>Create a new video game 🎮</h1>
          <form
            onSubmit={handleSubmit}
            className='style-form'
            data-testid='form'
          >
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

            {/* <Select
                name='genres'
                data={gamesGenres}
                handleSelect={handleSelectGenre}
                state={data}
              /> */}

            {/* {gamesGenres.map((genre) =>
                genre.id == data.genres.filter((select) => select) ? (
                  <li>{genre.name}</li>
                ) : null
              )} */}

            <CheckboxGenres
              data={gamesGenres}
              handleSelectGenre={handleSelectGenre}
            />
            <input
              type='submit'
              value='Submit'
              className='buttonSubmit'
              data-testid='required-input-submit'
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
