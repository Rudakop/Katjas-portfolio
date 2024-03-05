import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import mystoryData from '../../data/mystory.json';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'




const Mystory = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [mypath, setMystoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(3)
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setMystoryData(mystoryData.mypath);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };
        fetchData();
    }, []);

    
    const renderMystory = () => {
        return (
            <div className="mystory-container">
                <ul>
                    {mypath.map((path, idx) => (
                        <li key={idx} >
                            <p className={ idx === selectedIndex ? 'green-text' : 'text'} 
                            onClick={() => setSelectedIndex(idx)}>{path.year}<br/>{path.title}</p></li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <>
            {loading && <Loader type="ball-clip-rotate-multiple" active />}
            <div className="container story-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 's', 't', 'o', 'r', 'y']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Since the beginning my journey as a freelance designer nearly 6 years ago, 
                        I've done remote work for agencies, consulted for startups, and collaborated 
                        with talented people to create digital products for both business and consumer use.  
                        I'm naturally curious, and perpetually working on improving my skills
                    </p>
                    <p align="LEFT">
                        If I need to define myself in one sentence that would be a family
                        person, mother of three children, creative and tech-obsessed!
                    </p>
                </div>
            </div>
            <div className='mystory-list'>{renderMystory()}</div>
        </>
    )
}

export default Mystory;