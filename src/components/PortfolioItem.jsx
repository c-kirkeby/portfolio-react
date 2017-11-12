import React from 'react';
// import { NavLink as RRNavLink } from 'react-router-dom';

export default class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="PortfolioItem">
        <h4>{this.props.heading}</h4>
        <a href={this.props.link} target="_blank">
          <img src={this.props.image} 
               alt={this.props.heading + ' image'}
               height="150px" 
               width="260px"
               className="img-fluid"></img>    
        </a>
      </div>
    );
  }
}
