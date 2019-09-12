import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <p>Strike: {this.props.strike}</p>
        <p>Ball: {this.props.ball}</p>
      </div>
    )
  }
}
