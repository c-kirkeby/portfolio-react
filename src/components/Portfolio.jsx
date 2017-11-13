import React from 'react';
import {
  Col, Row
} from 'reactstrap';
import Section from './Section';
import PortfolioItem from './PortfolioItem';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolios: [
        {
          heading: "Weather API App",
          image: "weather.png",
          link: "/portfolio/weather/index.html"
        },
        {
          heading: "Wikipedia API App",
          image: "wikipedia.png",
          link: "portfolio/wikipedia/"
        },
        {
          heading: "Twitch API App",
          image: "twitch.png",
          link: "portfolio/twitch/"
        },
        {
          heading: "Random Quote Generator",
          image: "random-quote.png",
          link: "portfolio/random-quote/"
        }
      ]
    };
  }

  render() {
    const { portfolios } = this.state;
    
    return (
      <div className="card">
        <Section heading="Portfolio">
          <Row>
            {portfolios.map(portfolio =>
              <Col xl="6" lg="6" md="6" xs="12">
                <PortfolioItem
                  heading={portfolio.heading}
                  image={require(`./../assets/images/${portfolio.image}`)}
                  link={portfolio.link}
                />
              </Col>
            )}
          </Row>
        </Section>
      </div>
    )
  }
}
