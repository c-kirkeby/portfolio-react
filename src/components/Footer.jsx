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
            <span className="text-muted created-by">Created by Christian Kirkeby</span>
            {/* <span className="text-muted created-by">Created by Christian Kirkeby using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> & Bootstrap 4</span> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
