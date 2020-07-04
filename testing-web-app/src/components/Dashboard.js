import React, { useState } from 'react'
import Display from './Display'

// callbacks
export const addBall = currentState => currentState + 1
export const addStrike = currentState => currentState + 1
export const addHit = currentState => currentState + 1
export const addFoul = currentState => currentState + 1

const Dashboard = () => {
  // setting states for ball, strike, hit, and foul
  const [ball, setBall] = useState(0)
  const [strike, setStrike] = useState(0)
  const [hit, setHit] = useState(0)
  const [foul, setFoul] = useState(0)

  // if ball is less than four, set ball to ball + 1 -- if not, reset ball count
  const callBall = () => (ball < 4 ? setBall(addBall(ball)) : setBall(0))

  // if strikes are less than 3, set strike to strike + 1 -- if not, reset strike count
  const callStrike = () =>
    strike < 3 ? setStrike(addStrike(strike)) : setStrike(0)

  // everytime the ball is hit, reset strike and ball counts. +1 to hit count
  const callHit = () => setStrike(0) & setBall(0) & setHit(addHit(hit))

  const callFoul = () => {
    if (strike === 0) {
      // if strike count 0, add 1 strike and 1 fould
      return setFoul(addFoul(foul)) & setStrike(addStrike(strike))
    } else if (strike === 1) {
      // if strike count is 1, add 1 foul and 1 to strike
      return setFoul(addFoul(foul)) & setStrike(addStrike(strike))
    } else if (strike === 2) {
      // if strike count is 2, add 1 foul
      return setFoul(addFoul(foul))
    }
  }

  // reset all counts to 0
  const reset = () => setBall(0) & setStrike(0) & setHit(0) & setFoul(0)

  return (
    <>
      <Display balls={ball} strikes={strike} hit={hit} foul={foul} />
      <div className='controls'>
        <div className='btn-holder'>
          <button onClick={callBall}>ball</button>
          <button onClick={callStrike}>strike</button>
          <button onClick={callHit}>hit</button>
          <button onClick={callFoul}>foul</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard

// const addFoul = () => {
//   if (strike === 0) {
//     return setFoul(foul + 1) & addStrike(strike + 1)
//   } else if (strike === 1) {
//     return setFoul(foul + 1) & addStrike(strike + 2)
//   } else if (strike === 2) {
//     return setFoul(foul + 1)
//   }
// }
