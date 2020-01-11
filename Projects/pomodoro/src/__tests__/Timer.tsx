import React from 'react'
import { render } from '@testing-library/react'
import { Timer, TimerReset, TimerStartStop } from '../Timer/Timer'

describe('<Timer />', () => {
  const { container } = render(<Timer />)

  it.todo('should have the attribute id="timer-label"')

  it.todo('should display a string indicating a session is initialised') // e.g. "Session"

  it.todo('should have the attribute id="time-left"')

  it.todo('should display the time left in mm:ss format')

  it.todo('should load with time left 25:00')

  it.todo('should not display time < 00:00')
})

describe('<TimerStartStop />', () => {
  const handleClick = jest.fn()
  const { container } = render(<TimerStartStop onClick={ handleClick } />)

  it.todo('should have the attribute id="start_stop"')

  it.todo('should be clickable')
})

describe('<TimerReset />', () => {
  const handleClick = jest.fn()
  const { container } = render(<TimerReset onClick={ handleClick } />)

  it.todo('should have the attribute id="reset"')

  it.todo('should be clickable')
})