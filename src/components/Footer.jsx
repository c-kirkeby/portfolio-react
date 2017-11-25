import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

const Footer = () => {
  return (
    <footer className="Footer d-flex align-items-center">
      <Container>
        <Row>
          <Col xs="12" md="12" className="text-center">
            <span className="text-muted created-by">Created by Christian Kirkeby using&nbsp;
              <a href="https://getbootstrap.com"><i className="devicon-bootstrap-plain" alt="Bootstrap 4"></i></a> &&nbsp;
              <a href="https://reactjs.org/"><i className="devicon-react-plain" alt="ReactJS"></i></a> |&nbsp;
              <a href="https://www.linkedin.com/in/christian-kirkeby-29912352/" alt="LinkedIn"><i className="fa fa-2x fa-linkedin"></i></a>&nbsp;
              <a href="https://github.com/jheebz" alt="GitHub"><i className="fa fa-2x fa-github"></i></a>
            </span>
          </Col>
        </Row>
        {/* <Row>
          <Col xs="12" md="12" className="text-center">
            <span className="created-by">
              <a href="https://www.linkedin.com/in/christian-kirkeby-29912352/" alt="LinkedIn"><i className="fa fa-2x fa-linkedin"></i></a>&nbsp;
              <a href="https://github.com/jheebz" alt="GitHub"><i className="fa fa-2x fa-github"></i></a>
            </span>
          </Col>
        </Row> */}
      </Container>
    </footer>
  )
}

export default Footer;
