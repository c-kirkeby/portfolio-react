import React from 'react';

const PortfolioItem  = ({heading, link, image}) => {
  return (
    <div className="PortfolioItem">
      <h4>{heading}</h4>
      <a href={link} target="_blank">
        <img src={image} 
              alt={heading + ' image'}
              height="144px" 
              width="256px"
              className="img-fluid"></img>    
      </a>
    </div>
  );
}

export default PortfolioItem;