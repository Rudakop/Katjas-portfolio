import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/Home/logo-k.png';
import Myfoto from '../../assets/images/Home/me_black_white.jpg';
import MatrixRain from './matrixrain';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);

  const nameArray = ['o', 'z', 'l', 'i', 'a', 'k', 'o', 'v', 'a'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ' ',
    ':)',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading && <Loader type="ball-clip-rotate-multiple" active />}
      <MatrixRain className="matrix-bg" />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            {[...'ello!'].map((char, i) => (
              <span key={i} className={`${letterClass} _12`}>
                {char}
              </span>
            ))}
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="K" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert / Web designer</h2>
          <img src={Myfoto} className="my-foto" alt="My foto" />
          <Link to="/contact" className="flat-button">Hire me</Link>
        </div>
      </div>
    </>
  );
};

export default Home;