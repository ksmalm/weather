import React, { Component } from 'react';

export default class Weather extends Component {
  render() {
    return(
      <div>
        <div><img src={this.props.icon} alt={this.props.text} /></div>
        <div className="name">{this.props.name}</div>
        <div className="country">{this.props.region} {this.props.country}</div>
        <div className="temp">{this.props.temp}</div>
        <div className="text">{this.props.text}</div>
      </div>
    )
  }
}
