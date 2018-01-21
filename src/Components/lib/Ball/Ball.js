import React from 'react';
import './Ball.css'
// import svglogo from './Ball2.svg';
import Pacman from './Pacman.svg';

const SvgLoader = props => <div className="spinner">
  <img src={Pacman} alt="loader"/>
</div>;

export default SvgLoader;
