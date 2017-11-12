import React from 'react';

export default class Section extends React.Component {
  render() {
    const SectionClass = "Section text-center " + this.props.heading.split(' ').join('');

    return (
      <div className={SectionClass}>
        <h2 className="text-center">{this.props.heading}</h2>
        <hr />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
