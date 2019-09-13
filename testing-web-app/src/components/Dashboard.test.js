import React from 'react'
import { render } from '@testing-library/React'
import Dashboard, { addBall, addStrike, addHit, addFoul } from './Dashboard'

describe('Dashboard', () => {
  it('dashboard renders without crashing', () => {
    render(<Dashboard />)
  })
})

describe('<Dashboard />', () => {
  it('addStrike will add 1 to strike', () => {
    expect(addStrike(1)).toBe(2)
  })
  it('addBall will add 1 to ball', () => {
    expect(addBall(1)).toBe(2)
  })
  it('addHits will add 1 to hit', () => {
    expect(addHit(1)).toBe(2)
  })
  it('addFoul adds 1 to foul', () => {
    expect(addFoul(1)).toBe(2)
  })
})
