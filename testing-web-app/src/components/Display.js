import React from 'react'

function Display(props) {
  return (
    <div>
      <p>{props.balls} Ball</p>
      <p>{props.strikes} Strike</p>
      <p>{props.hit} Hit</p>
      <p>{props.foul} Foul</p>
    </div>
  )
}

export default Display
