import React from 'react';
import {
  Container, Col, Row
} from 'reactstrap';
import TopNav from './components/TopNav';
import Section from './components/Section';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';

class App extends React.Component {
  render() {
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
            <Portfolio />
          </div>
        </Container> 
        <footer>
          <Container>
            <Row>
              <Col xs="12">
                <span className="text-muted">Created by <a id="created-by" href="_blank">Christian Kirkeby</a> using ReactJS & Bootstrap 4</span>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

const HalfBackground = () => (
  <div className="HalfBackground"></div>
);

export default App;
