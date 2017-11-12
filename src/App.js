import React from 'react';
import {
  Container, Col, Row
} from 'reactstrap';
import TopNav from './components/TopNav';
import Section from './components/Section';
import Profile from './components/Profile';
import PortfolioItem from './components/PortfolioItem';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolios: [
        {
          heading: "Weather API App",
          image: "weather.png",
          link: "portfolio/weather/"
        },
        {
          heading: "Wikipedia API App",
          image: "wikipedia.png",
          link: "portfolio/wikipedia/"
        },
        {
          heading: "Twitch API App",
          image: "twitch.jpg",
          link: "portfolio/twitch/"
        }
      ]
    };
  }

  render() {
    const {portfolios} = this.state;

    return (
      <div>
        <Container>
          <TopNav />
        </Container>
        <HalfBackground />
        <Container>
          <div className="main">
            <div className="card">
              <Profile 
                image={require('./assets/images/profile.jpg')}
                width="200px"
                height="200px"
              />
              <Row>
                <Col>
                  <Section heading="About Me">
                    <h4>
                      Web Developer / Test Analyst
                    </h4>
                    <p>HTML5, CSS3, Javascript, and React</p>
                    <p>I have a great interest in web development, 
                      especially some of the newer technologies like 
                      ReactJS which this site is written in!</p>
                  </Section>
                </Col>
              </Row>
            </div>
            <div className="card">
              <Section heading="Portfolio">
                <Row>
                  {portfolios.map(portfolio =>
                    <Col xl="4" lg="4" md="6" xs="12">
                      {console.log(portfolio.image)}
                      <PortfolioItem
                        heading={portfolio.heading}
                        image={require(`./assets/images/${portfolio.image}`)}
                        link={portfolio.link}
                      />
                    </Col>
                  )}
                </Row>
              </Section>
            </div>
            <div className="card">
              <Section heading="Contact Me">

              </Section>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const HalfBackground = () => (
  <div className="HalfBackground"></div>
);

export default App;
