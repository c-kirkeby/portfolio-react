import React from 'react';
import {
  Col, Row
} from 'reactstrap';
import Section from './Section';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const portfolios = [
    {
      heading: "Weather API App",
      image: "http://res.cloudinary.com/christiank/image/upload/v1510628495/weather_tnjbtb.jpg",
      link: "/portfolio/weather/index.html",
      technologies: [
        {
          name: "html5",
          link: "https://www.w3.org/TR/html5/"
        },
        {
          name: "bootstrap",
          link: "https://getbootstrap.com/"
        },
        {
          name: "jquery",
          link: "https://jquery.com/"
        },
        {
          name: "sass",
          link: "http://sass-lang.com/"
        }
      ]
    },
    {
      heading: "Wikipedia API App",
      image: "http://res.cloudinary.com/christiank/image/upload/c_scale,w_1920/v1510628504/wikipedia_kazlxp.jpg",
      link: "/portfolio/wikipedia-reader/index.html",
      technologies: [
        {
          name: "html5",
          link: "https://www.w3.org/TR/html5/"
        },
        {
          name: "bootstrap",
          link: "https://getbootstrap.com/"
        },
        {
          name: "jquery",
          link: "https://jquery.com/"
        },
        {
          name: "sass",
          link: "http://sass-lang.com/"
        }
      ]
    },
    {
      heading: "Twitch API App",
      image: "http://res.cloudinary.com/christiank/image/upload/c_scale,w_1920/v1510628502/twitch_vw4esx.jpg",
      link: "/portfolio/twitch/index.html",
      technologies: [
        {
          name: "html5",
          link: "https://www.w3.org/TR/html5/"
        },
        {
          name: "bootstrap",
          link: "https://getbootstrap.com/"
        },
        {
          name: "jquery",
          link: "https://jquery.com/"
        },
        {
          name: "sass",
          link: "http://sass-lang.com/"
        }
      ]
    },
    {
      heading: "Random Quote Generator",
      image: "http://res.cloudinary.com/christiank/image/upload/c_scale,w_1920/v1510628240/random-quote_tisqmi.jpg",
      link: "/portfolio/random-quote-generator/index.html",
      technologies: [
        {
          name: "html5",
          link: "https://www.w3.org/TR/html5/"
        },
        {
          name: "bootstrap",
          link: "https://getbootstrap.com/"
        },
        {
          name: "jquery",
          link: "https://jquery.com/"
        },
        {
          name: "sass",
          link: "http://sass-lang.com/"
        }
      ]
    }
  ]
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
            <Col xl={colSize} lg={colSize} md={colSize} xs="12">
              <PortfolioItem
                heading={portfolio.heading}
                image={portfolio.image}
                link={portfolio.link}
                technologies={portfolio.technologies}
              />
            </Col>
          )}
        </Row>
      </Section>
    </div>
  )
}

export default Portfolio;
