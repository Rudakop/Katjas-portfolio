import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-k.png'
import Myfoto from '../../assets/images/me_black_white.jpg'
import MatrixRain from './matrixrain'
import Logo from './Logo'
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['o', 'z', 'l', 'i', 'a', 'k', 'o', 'v', 'a']
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
    ]

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
        <MatrixRain className="matrix-bg" />
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>e</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={`${letterClass} _12`}>o!</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
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
                    <Link to="/contact" className="flat-button">
                        HIRE ME
                    </Link>
                </div>
            </div>
            <Loader type="triangle-skew-spin" active />
        </>
    )
}

export default Home