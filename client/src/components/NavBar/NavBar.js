import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import createGame from '../../assets/img/create_game.png';
import Filtering from '../Filtering/Filtering';
import './NavBar.css';
import ButtonGamesCreated from '../ButtonGamesCreated/ButtonGamesCreated';
import { backUp, setPage } from '../../actions';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(backUp());
    dispatch(setPage(1));
    document.querySelector('#selector').value = -1;
    document.querySelector('#inputSearch').value = '';
  };

  return (
    <div className='nav'>
      {/* <img src="" alt="" /> */}
      <NavLink to='/home'>
        <button onClick={handleBack} className='navRef'>
          {' '}
          Home 🏠
        </button>
      </NavLink>
      <NavLink to='/favorites'>
        <button className='navRef'> Favorites 🌟</button>
      </NavLink>
      <Search />
      <SearchByGenre />
      <Filtering />
      <ButtonGamesCreated />
      <NavLink to='/creategame'>
        <img
          src={createGame}
          alt='imgCreateGame'
          width='20%'
          className='imgCreateGame'
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
