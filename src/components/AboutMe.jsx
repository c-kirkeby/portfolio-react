import React from 'react';
import {
  Row, Col
} from 'reactstrap';
import Section from './Section';
import Profile from './Profile';

const AboutMe = () => {
  return (
    <div className="card">
      <Profile
        image='https://res.cloudinary.com/christiank/image/upload/w_400/v1510639844/profile_acrbng.jpg'
        width="200px"
        height="200px"
      />
      <Row>
        <Col>
          <Section heading="About Me">
            <h4>Web Developer / Test Analyst</h4>
            <p>HTML5, CSS3, Javascript, and React</p>
            <p>I have a great interest in web development,
                      especially some of the newer technologies like
                      ReactJS which this site is written in!</p>
          </Section>
        </Col>
      </Row>
    </div>
  )
}

export default AboutMe;
