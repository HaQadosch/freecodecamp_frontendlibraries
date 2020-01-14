import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { Break, BreakDec, BreakInc, BreakLength } from '../Break/Break';

describe('<Break />', () => {
  it('should have the attribute id=break-label', () => {
    const { container } = render(<Break />);
    const idBreakLabels = container.querySelectorAll('#break-label');
    expect(idBreakLabels).toHaveLength(1)
  })

  it('should display the text "Break Length"', () => {
    const { getByText } = render(<Break />);
    const component = getByText(/Break Length/i);
    expect(component).toBeInTheDocument();
  })
})

describe('<BreakDec />', () => {
  const handleClick = jest.fn()

  it('should have the attribute id="break-decrement"', () => {
    const { container } = render(<BreakDec onClick={ handleClick } />)
    const idBreakDecrements = container.querySelectorAll('#break-decrement')
    expect(idBreakDecrements).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<BreakDec onClick={ handleClick } />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})

describe('<BreakInc />', () => {
  const handleClick = jest.fn()

  it('should have id="break-increment"', () => {
    const { container } = render(<BreakInc onClick={ handleClick } />)
    const idBreakIncrements = container.querySelectorAll('#break-increment')
    expect(idBreakIncrements).toHaveLength(1)
  })

  it('should be clickable', () => {
    const { container } = render(<BreakInc onClick={ handleClick } />)
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})

describe('<BreakLength />', () => {
  const duration = 5 * 60

  it('should have the attribute id="break-length"', () => {
    const { container } = render(<BreakLength duration={ duration } />)
    const idBreakLength = container.querySelectorAll('#break-length')
    expect(idBreakLength).toHaveLength(1)
  })

  it('should display the number 5 by default', () => {
    const { container } = render(<BreakLength duration={ duration } />)
    const elt = container.querySelector('#break-length')
    expect(elt).toHaveTextContent('05:00')
  })

  it('should not display value <= 0 secondes', () => {
    const { container } = render(<BreakLength duration={ -1 } />)
    const elt = container.querySelector('#break-length')
    expect(elt).toHaveTextContent('00:00')
  })

  it('should not display value >= 60 minutes', () => {
    const _60minutes = 60 * 60
    const { container } = render(<BreakLength duration={ _60minutes + 1 } />)
    const elt = container.querySelector('#break-length')
    expect(elt).toHaveTextContent('60:00')
  })
})