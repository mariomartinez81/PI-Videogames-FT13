import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import createGame from '../../assets/img/create_game.png';
import exit from '../../assets/img/exit.png';
import Filtering from '../Filtering/Filtering';
import './NavBar.css';
import ButtonGamesCreated from '../ButtonGamesCreated/ButtonGamesCreated';

import Button from '../Button/Button';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to='/' className='exit'>
        <h2>EXIT</h2>
      </NavLink>
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
        <img src={createGame} alt='imgCreateGame' className='imgCreateGame' />
      </NavLink>
    </div>
  );
};

export default NavBar;
