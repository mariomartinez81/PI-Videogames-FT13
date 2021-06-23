import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import createGame from '../../assets/img/create_game.png';
import Filtering from '../Filtering/Filtering';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav'>
      {/* <img src="" alt="" /> */}
      <NavLink to='/home' className='navRef'>
        Home 🏠
      </NavLink>
      <NavLink to='/favorites' className='navRef'>
        Favorites 🌟
      </NavLink>
      <Search />
      <SearchByGenre />
      <Filtering />
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
