import { useEffect, useState } from 'react'
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
                        Expert in front-end development including technologies like
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Vue</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Angular</span>
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">C#</span>
                    </p>
                    <p align="LEFT">
                        I'm passionate of UX/UI design and I'm fond of implementation
                        responsiveness, mobile-first web design. I put special
                        effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after
                        the project's completion. I guarantee a commitment during work on
                        your project.
                    </p>
                    <p align="LEFT">
                        Visit my <a
                            href="https://www.linkedin.com/in/radistka/"
                            target="_blank"
                            rel="noreferrer"
                        > LinkedIn </a>
                        <span> profile for more details. Also you can checkout my cv on this <a
                            target="_blank"
                            href="https://github.com/Rudakop/Portfolio/blob/master/src/assets/images/CV_Kozliakova_Katja.pdf"
                            rel="noreferrer"
                        > link.</a>
                        </span>
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                    </div>
                </div>
            </div>
            <Loader type="triangle-skew-spin" active />
        </>
    )
}

export default Myskills