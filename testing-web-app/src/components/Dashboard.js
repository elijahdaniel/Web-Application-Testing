import React, { useState } from 'react'
import Display from './Display'

function Dashboard() {
  const [ball, setBall] = useState(0)
  const [strike, setStrike] = useState(0)
  const [hit, setHit] = useState(0)
  const [foul, setFoul] = useState(0)

  const addBall = () => {
    return ball < 4 ? setBall(ball + 1) : setBall(0)
  }

  const addStrike = () => {
    return strike < 3 ? setStrike(strike + 1) : setStrike(0)
  }

  const addHit = () => {
    return setStrike(0) & setBall(0) & setHit(hit + 1)
  }

  const addFoul = () => {
    if (strike === 0) {
      return setFoul(foul + 1) & addStrike(strike + 1)
    } else if (strike === 1) {
      return setFoul(foul + 1) & addStrike(strike + 2)
    } else if (strike === 2) {
      return setFoul(foul + 1)
    }
  }

  return (
    <div>
      <Display balls={ball} strikes={strike} hit={hit} foul={foul} />
      <button onClick={addBall}>ball</button>
      <button onClick={addStrike}>strike</button>
      <button onClick={addHit}>hit</button>
      <button onClick={addFoul}>foul</button>
    </div>
  )
}

export default Dashboard
