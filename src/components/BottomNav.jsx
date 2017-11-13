import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

const BottomNav = () => {
  return (
    <footer className="align-middle">
      <Container>
        <Row>
          <Col xs="12" md="12" className="text-center">
            <span className="text-muted created-by">Created by Christian Kirkeby using ReactJS</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default BottomNav;
