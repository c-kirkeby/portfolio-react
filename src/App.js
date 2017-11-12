import React from 'react';
import {
  Container
} from 'reactstrap';
import TopNav from './components/TopNav';
import Section from './components/Section';
import Profile from './components/Profile';

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
                img={require('./assets/images/portfolio-profile.jpg')}
                width="200px"
                height="200px"
              />
              <Section heading="About Me">
                <h4>
                  Web Developer / Test Analyst
                </h4>
                <p>HTML5, CSS3, Javascript, and React</p>
              </Section>
            </div>
            <div className="card">
              <Section heading="Portfolio"></Section>
            </div>
            <div className="card">
              <Section heading="Contact Me"></Section>
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
