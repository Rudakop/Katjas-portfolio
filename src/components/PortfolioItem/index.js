import React from "react";



const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="image-box">
      <a href={portfolio.url} target="_blank" rel="noreferrer">
        <img
          src={require(`../../assets/images/${portfolio.image}`)}
          className="portfolio-image"
          alt={portfolio.title}
        />
        <p>{portfolio.title}</p>
        <p>{portfolio.description}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;