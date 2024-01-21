import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import PortfolioItem from "../PortfolioItem"; 
import portfolioData from '../../data/portfolio.json';
import "./index.scss";




const MyWorks = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);

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
        const timeoutId = setTimeout(() => {
          setPortfolio(portfolioData.portfolio);
          setLoading(false);
        }, 2000);

        return () => {
          clearTimeout(timeoutId);
        };
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPortfolio = () => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <PortfolioItem key={idx} portfolio={port} />
        ))}
      </div>
    );
  };

  return (
    <>
      {loading && <Loader type="ball-clip-rotate-multiple" active />}
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k', 's']}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio()}</div>
      </div>
    </>
  );
};

export default MyWorks;