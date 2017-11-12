import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

export default class Section extends React.Component {
  render() {
    const SectionClass = "Section text-center " + this.props.heading.split(' ').join('');

    return (
      <div className={SectionClass}>
        <Row>
          <Col>
            <h2 className="text-center">{this.props.heading}</h2>
            <hr />
            <div>{this.props.children}</div>
          </Col>
        </Row>
      </div>
    )
  }
}
