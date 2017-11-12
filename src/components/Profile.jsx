import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <img src={this.props.image} 
             width={this.props.width} 
             height={this.props.height} 
             className="img-circle img-responsive rounded-circle mx-auto"
             alt="Profile" 
        />
      </div>
    )
  }
}
