import React, { Component } from 'react'
import Display from './Display'

export default class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }
  render() {
    return (
      <>
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          foul={this.state.foul}
          hit={this.state.hit}
        />
        <div className='controls'>
          <button
            className='strikeButton'
            onClick={() => {
              if (this.state.strike < 3) {
                this.setState({ strike: this.state.strike + 1 })
              } else {
                this.setState({ strike: 0 })
              }
            }}
          >
            Strike Button
          </button>
          <button
            className='ballButton'
            onClick={() => {
              if (this.state.ball < 4) {
                this.setState({ ball: this.state.ball + 1 })
              } else {
                this.setState({ ball: 0 })
              }
            }}
          >
            Ball Button
          </button>
          <button
            className='foulButton'
            onClick={() => {
              if (this.state.foul < 4) {
                this.setState({ foul: this.state.foul + 1 })
              } else {
                this.setState({ foul: 0 })
              }
            }}
          >
            Foul Button
          </button>
          <button
            className='resetButton'
            onClick={() => {
              this.setState({
                strike: 0,
                ball: 0,
                foul: 0,
                hit: 0
              })
            }}
          >
            Reset
          </button>
        </div>
      </>
    )
  }
}
