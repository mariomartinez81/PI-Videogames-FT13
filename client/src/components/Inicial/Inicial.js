import React from 'react';
import neon_controller from '../../assets/img/start.png';
import { NavLink } from 'react-router-dom';
import './Inical.css';
const Inicial = () => {
  return (
    <div>
      <img
        src='https://static.vecteezy.com/system/resources/previews/002/304/430/non_2x/game-room-interior-night-stream-play-video-games-on-the-console-big-tv-screen-two-armchairs-battle-start-illustration-free-vector.jpg'
        alt='img-render'
        className='inicial-page'
      />
      <div className='imgFull'>
        <NavLink to={`/home`}>
          <img src={neon_controller} alt='introImg' className='imgInicial' />
        </NavLink>
      </div>
    </div>
  );
};

export default Inicial;
