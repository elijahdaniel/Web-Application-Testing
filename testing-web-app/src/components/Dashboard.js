import React, { Component } from 'react'
import Display from './Display'

export default class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0
  }
  render() {
    return (
      <div>
        <Display strike={this.state.strike} ball={this.state.ball} />
        <button
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
      </div>
    )
  }
}
