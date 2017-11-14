import React from 'react';
import {
  Container, Col, Row
} from 'reactstrap';
import TopNav from './components/TopNav';
import Section from './components/Section';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import BottomNav from './components/BottomNav';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <TopNav />
        </Container>
        <div className="Banner" id="TopBanner"></div>
        <Container>
          <div className="main">
            <div className="card">
              <Profile 
                image='http://res.cloudinary.com/christiank/image/upload/c_scale,h_402,w_400/v1510639844/profile_acrbng.jpg'
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
        <BottomNav />
      </div>
    );
  }
}

export default App;
