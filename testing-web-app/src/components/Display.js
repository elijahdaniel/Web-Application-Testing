import React from 'react'

function Display(props) {
  return (
    <div className='scores'>
      <section className='scoreCard'>
        <h3 className='cardTitle'>Ball</h3>
        <p className='cardNum'>{props.balls}</p>
      </section>
      <section className='scoreCard'>
        <h3 className='cardTitle'>Strike</h3>
        <p className='cardNum'>{props.strikes}</p>
      </section>
      <section className='scoreCard'>
        <h3 className='cardTitle'>Hit</h3>
        <p className='cardNum'>{props.hit}</p>
      </section>
      <section className='scoreCard'>
        <h3 className='cardTitle'>Foul</h3>
        <p className='cardNum'>{props.foul}</p>
      </section>
    </div>
  )
}

export default Display
