import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Myskills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true); // Define the loading state variable

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const techTags = ['HTML5', 'CSS', 'JavaScript', 'React', 'Vue', 'TypeScript', 'Angular', 'Next.js', 'Node.js', 'C#'];

    const linkedInUrl = 'https://www.linkedin.com/in/radistka/';
    const cvUrl = 'https://github.com/Rudakop/Katjas-portfolio/blob/main/src/assets/images/Myskills/CV_Kozliakova_Katja.pdf';

    return (
        <>
            {loading && <Loader type="ball-clip-rotate-multiple" active />}
            <header className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>
                    <p align="LEFT">
                        Expert in front-end development including technologies like:
                        {techTags.map((tag, index) => (
                            <span key={index} className="tech-tag">
                                {tag}{index !== techTags.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                    <p align="LEFT">
                        I'm passionate of UX/UI design and I'm fond of implementation responsiveness, mobile-first web design. I put special effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                    </p>
                    <p align="LEFT">
                        Visit my{' '}
                        <a href={linkedInUrl} target="_blank" rel="noreferrer" className="my-skills-link">
                            LinkedIn
                        </a>
                        <span> profile for more details. Also, you can check out my CV on this{' '}
                            <a href={cvUrl} target="_blank" rel="noreferrer" className="my-skills-link">
                                link.
                            </a>
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
            </header>
        </>
    );
};

export default Myskills;