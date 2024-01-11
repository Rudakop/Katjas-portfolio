import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json';
import "./index.scss";



const Myworks = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setPortfolio(portfolioData.portfolio);
            setLoading(false);
        }, 2000);
    }, []); 

    const renderPortfolio = () => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    
                    <div className="image-box" key={idx}>
                        <img
                            src={port.image}
                            className="portfolio-image"
                            alt="portfolio"
                        />
                        <p>{port.title}</p>
                        <p>{port.description}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            {loading && <Loader type="triangle-skew-spin" active />}
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"My works".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
        </>
    );
};

export default Myworks;