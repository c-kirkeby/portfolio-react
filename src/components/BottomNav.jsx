import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

const BottomNav = () => {
  return (
    <footer className="BottomNav">
      <Container>
        <Row>
          <Col xs="12" md="12" className="text-center">
            <span className="text-muted created-by">Created by Christian Kirkeby</span>
            {/* <span className="text-muted created-by align-middle">Created by Christian Kirkeby using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> & Bootstrap 4</span> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default BottomNav;
