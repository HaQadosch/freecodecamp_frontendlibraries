import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Timer, TimerReset, TimerStartStop, SessionType } from '../Timer/Timer'

const _25minutes = 25 * 60

const defaultTimerProps = {
  timeLeft: _25minutes,
  sessionType: SessionType.Session,
  reset: () => { },
  running: false,
  setRunning: () => { }
}
describe('<Timer />', () => {

  it('should have the attribute id="timer-label"', () => {
    const { container } = render(<Timer { ...defaultTimerProps } />)
    const idTimerLabels = container.querySelectorAll('#timer-label')
    expect(idTimerLabels).toHaveLength(1)
  })

  it('should display a string indicating a session is initialised', () => {
    const { getByText } = render(<Timer { ...defaultTimerProps } />)
    const component = getByText(/Session/i)
    expect(component).toBeInTheDocument()
  })

  it('should have the attribute id="time-left"', () => {
    const { container } = render(<Timer { ...defaultTimerProps } />)
    const idTimerLefts = container.querySelectorAll('#time-left')
    expect(idTimerLefts).toHaveLength(1)
  })

  it('should display the time left in mm:ss format', () => {
    const { getByText } = render(<Timer { ...defaultTimerProps } />)
    const component = getByText(/\d\d:\d\d/i)
    expect(component).toBeInTheDocument()
  })

  it('should load with time left 25:00', () => {
    const { getByText } = render(<Timer { ...defaultTimerProps } />)
    const component = getByText(/25:00/i)
    expect(component).toBeInTheDocument()
  })

  it('should not display time < 00:00', () => {
    const { getByText } = render(<Timer { ...defaultTimerProps } timeLeft={ -1 } />)
    const component = getByText(/00:00/i)
    expect(component).toBeInTheDocument()
  })
})

describe('<TimerStartStop />', () => {
  const handleClick = jest.fn()

  it('should have the attribute id="start_stop"', () => {
    const { container } = render(<TimerStartStop onClick={ handleClick } />)
    const idStartStops = container.querySelectorAll('#start_stop')
    expect(idStartStops).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<TimerStartStop onClick={ handleClick } />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})

describe('<TimerReset />', () => {
  const handleClick = jest.fn()

  it('should have the attribute id="reset"', () => {
    const { container } = render(<TimerReset onClick={ handleClick } />)
    const idResets = container.querySelectorAll('#reset')
    expect(idResets).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<TimerReset onClick={ handleClick } />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})