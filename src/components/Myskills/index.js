import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Myskills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's',]}
                            idx={15}
                        />
                    </h1>
                    <p align="LEFT">
                        Expert in front-end development including technologies like: 
                        <span className="tech-tag"> HTML5, </span>
                        <span className="tech-tag">CSS, </span>
                        <span className="tech-tag">JavaScript, </span>
                        <span className="tech-tag">React, </span>
                        <span className="tech-tag">Vue, </span>
                        <span className="tech-tag">TypeScript, </span>
                        <span className="tech-tag">Angular, </span>
                        <span className="tech-tag">Next.js, </span>
                        <span className="tech-tag">Node.js, </span>
                        <span className="tech-tag">C#.</span>
                    </p>
                    <p align="LEFT">
                        I'm passionate of UX/UI design and I'm fond of implementation responsiveness, mobile-first web design. I put special effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                    </p>
                    <p align="LEFT">
                        Visit my <a
                            href="https://www.linkedin.com/in/radistka/"
                            target="_blank"
                            rel="noreferrer"
                            className="my-skills-link"
                        > LinkedIn </a>
                        <span> profile for more details. Also you can checkout my CV on this 
                            <a
                            target="_blank"
                            href="https://github.com/Rudakop/Portfolio/blob/master/src/assets/images/CV_Kozliakova_Katja.pdf"
                            rel="noreferrer"
                            className="my-skills-link"
                        > link.</a>
                        </span>
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faVuejs} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="triangle-skew-spin" active />
        </>
    )
}

export default Myskills