import React from 'react';

export default class Section extends React.Component {
  render() {
    const id = this.props.heading.split(' ').join('');

    return (
      <div className="Section text-center" id={id}>
        <h2>{this.props.heading}</h2>
        <hr />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
