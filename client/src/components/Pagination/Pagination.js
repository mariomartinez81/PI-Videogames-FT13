import React from 'react';
import next_img from '../../assets/img/next2.png';
import prev_img from '../../assets/img/prev.png';
import './Pagination.css';

const Pagination = ({ next, prev }) => {
  return (
    <div>
      <img src={prev_img} alt='prevImg' onClick={prev} className='prev' />
      <img src={next_img} alt='nextImg' onClick={next} className='next' />
    </div>
  );
};

export default Pagination;
