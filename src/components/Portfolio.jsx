import React from 'react';
import {
  Col, Row
} from 'reactstrap';
import Section from './Section';
import PortfolioItem from './PortfolioItem';
import portfolios from './../assets/data/portfolios'

const Portfolio = () => {
  const colSize = portfolios.length % 3 === 0 ? 4 : 6;
    
  return (
    <div className="card">
      <Section heading="Portfolio">
        <Row>
          <Col>
            <p className="lead">Below are some of the projects I've created with the technologies I used. More coming soon!</p>
          </Col>
        </Row>
        <Row>
          {portfolios.map(portfolio =>
              <PortfolioItem
                heading={portfolio.heading}
                image={portfolio.image}
                link={portfolio.link}
                technologies={portfolio.technologies}
                colSize={colSize}
              />
          )}
        </Row>
      </Section>
    </div>
  )
}

export default Portfolio;
