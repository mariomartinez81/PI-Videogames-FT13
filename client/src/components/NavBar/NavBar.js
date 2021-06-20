import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from '../Search/Search';
import SearchByGenre from '../SearchByGenre/SearchByGenre';
import createGame from '../../assets/img/createGame4.png';
import Filtering from '../Filtering/Filtering';

const NavBar = () => {
  return (
    <div className='nav'>
      {/* <img src="" alt="" /> */}
      <NavLink to='/home' className='navRef'>
        Home 🏠
      </NavLink>
      <NavLink to='/favs' className='navRef'>
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
