import React from 'react';
import neon_controller from '../../assets/img/neon_controller.png';
import { NavLink } from 'react-router-dom';
import './Inical.css';
const Inicial = () => {
  return (
    <div className='inicial-page'>
      <NavLink to={`/home`}>
        <img src={neon_controller} alt='introImg' className='imgInicial' />
      </NavLink>
    </div>
  );
};

export default Inicial;
