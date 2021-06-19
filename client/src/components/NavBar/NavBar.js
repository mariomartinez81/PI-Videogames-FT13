import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

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
    </div>
  );
};

export default NavBar;
