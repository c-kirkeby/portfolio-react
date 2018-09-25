import React from 'react';
import {
  Col, Row
} from 'reactstrap';
import LazyLoad from 'react-lazyload'

const PortfolioItem  = props => {
  const {
    heading, 
    link, 
    image, 
    technologies, 
    colSize
  } = props
  return (
    <Col xl={colSize} lg={colSize} md={colSize} xs="12">
      <div className="PortfolioItem" {...props}>
        <h4>{heading}</h4>
        <a href={link}>
          <LazyLoad height={144} width={230}>
            <img 
              src={image} 
              alt={heading + ' image'}
              height="144px" 
              width="256px"
              className="img-fluid"
            >
            </img>
          </LazyLoad>
        </a>
        <Row>
          <Col>
            {technologies.map(technology => 
              <a href={technology.link} className="PortfolioItemIcon" alt="">
                <i alt={`${technology.name}`} className={`devicon-${technology.name}-plain`}></i>
              </a>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default PortfolioItem
