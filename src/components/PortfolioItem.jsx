import React from 'react';
import {
  Col, Row
} from 'reactstrap';

// const technologyTypes = [
//   {
//     name: "html5",
//     link: "https://www.w3.org/TR/html5/"
//   },
//   {
//     name: "bootstrap",
//     icon: "https://getbootstrap.com/"
//   },
//   {
//     name: "jquery",
//     link: "https://jquery.com/"
//   },
//   {
//     name: "sass",
//     icon: "http://sass-lang.com/"
//   }
// ]

const PortfolioItem  = ({heading, link, image, technologies}) => {
  return (
    <div className="PortfolioItem">
      <h4>{heading}</h4>
      <a href={link}>
        <img src={image} 
              alt={heading + ' image'}
              height="144px" 
              width="256px"
              className="img-fluid"></img>    
      </a>
      <Row>
        <Col>
          {technologies.map(technology => 
            <a href={technology.link} className="PortfolioItemIcon" alt="">
              <i alt="{technology.name}" className={`devicon-${technology.name}-plain`}></i>
            </a>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioItem;
