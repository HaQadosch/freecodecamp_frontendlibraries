import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Session, SessionDec, SessionInc, SessionLength } from '../Session/Session';

describe('<Session />', () => {

  it('should have the attribute id="session-label"', () => {
    const { container } = render(<Session />)
    const idSessionLabels = container.querySelectorAll('#session-label')
    expect(idSessionLabels).toHaveLength(1)
  })

  it('should display the text "Session Length"', () => {
    const { getByText } = render(<Session />)
    const component = getByText(/Session Length/i)
    expect(component).toBeInTheDocument()
  })
})

describe('<SessionDec />', () => {
  const handleClick = jest.fn()

  it('should have the attribute id="session-decrement"', () => {
    const { container } = render(<SessionDec onClick={handleClick} />)
    const idSessionDecrements = container.querySelectorAll('#session-decrement')
    expect(idSessionDecrements).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<SessionDec onClick={handleClick} />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})

describe('<SessionInc />', () => {
  const handleClick = jest.fn()

  it('should have the attribute id="session-increment"', () => {
    const { container } = render(<SessionInc onClick={handleClick} />)
    const idSessionIncrements = container.querySelectorAll('#session-increment')
    expect(idSessionIncrements).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<SessionInc onClick={handleClick} />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})

describe('<SessionLength />', () => {
  const duration = 25 * 60

  it('should have the attribute id="session-length"', () => {
    const { container } = render(<SessionLength duration={duration} />)
    const idSessionLength = container.querySelectorAll('#session-length')
    expect(idSessionLength).toHaveLength(1)
  })

  it('should display the number 25 by default', () => {
    const { container } = render(<SessionLength duration={duration} />)
    const elt = container.querySelector('#session-length')
    expect(elt).toHaveTextContent('25:00')
  })

  it('should not display value <= 0 secondes', () => {
    const { container } = render(<SessionLength duration={-1} />)
    const elt = container.querySelector('#session-length')
    expect(elt).toHaveTextContent('00:00')
  })

  it('should not display value >= 60 minutes', () => {
    const _60minutes = 60 * 60
    const { container } = render(<SessionLength duration={_60minutes + 1} />)
    const elt = container.querySelector('#session-length')
    expect(elt).toHaveTextContent('60:00')
  })
})