import React from 'react';

export default class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="PortfolioItem">
        <h4>{this.props.heading}</h4>
        <a href={this.props.link} target="_blank">
          <img src={this.props.image} 
               alt={this.props.heading + ' image'} 
               height="180px" 
               width="320px"></img>
        </a>
      </div>
    );
  }
}
