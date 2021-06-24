import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import createGame from '../../assets/img/create_game.png';
import Filtering from '../Filtering/Filtering';
import './NavBar.css';
import ButtonGamesCreated from '../ButtonGamesCreated/ButtonGamesCreated';

import Button from '../Button/Button';

const NavBar = () => {
  return (
    <div className='nav'>
      {/* <img src="" alt="" /> */}
      <NavLink to='/home'>
        <Button title={'Home 🏠'} />
      </NavLink>
      <NavLink to='/favorites'>
        <Button title={'Favorites 🌟'} />
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
