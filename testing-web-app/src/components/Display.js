import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div className='display'>
        <section>
          <h3>Strike</h3>
          <span>{this.props.strike}</span>
        </section>
        <section>
          <h3>Ball</h3>
          <span>{this.props.ball}</span>
        </section>
        <section>
          <h3>Foul</h3>
          <span>{this.props.foul}</span>
        </section>
        <section>
          <h3>Hit</h3>
          <span>{this.props.hit}</span>
        </section>
      </div>
    )
  }
}
