import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Break, BreakDec, BreakInc, BreakLength } from '../Break/Break';

describe('<Break />', () => {
  const { getByText, container } = render(<Break />);

  it.todo('should have the attribute id=break-label'
    // , () => {
    //   const idBreakLabels = container.querySelectorAll('#break-label');
    //   expect(idBreakLabels).toHaveLength(1)
    // }
  );

  it.todo('should display the text "Break Length"'
    // , () => {
    //   const component = getByText(/Break Length/i);
    //   expect(component).toBeInTheDocument();
    // }
  );
})

describe('<BreakDec />', () => {
  const handleClick = jest.fn()
  const { getByText, container } = render(<BreakDec onClick={ handleClick } />)

  it.todo('should have the attribute id="break-decrement"'
    // , () => {
    //   const idBreakDecrements = container.querySelectorAll('#break-decrement')
    //   expect(idBreakDecrements).toHaveLength(1)
    // }
  )

  it.todo('should be clickable'
    // , () => {
    //   fireEvent.click(container)
    //   expect(handleClick).toHaveBeenCalled()
    //   expect(handleClick).toBeCalledTimes(1)
    // }
  )
})

describe('<BreakInc />', () => {
  const handleClick = jest.fn()
  const { getByText, container } = render(<BreakInc onClick={ handleClick } />)

  it.todo('should have id="break-increment"'
    // , () => {
    //   const idBreakIncrements = container.querySelectorAll('#break-increment')
    //   expect(idBreakIncrements).toHaveLength(1)
    // }
  )

  it.todo('should be clickable'
    // , () => {
    //   fireEvent.click(container)
    //   expect(handleClick).toHaveBeenCalled()
    //   expect(handleClick).toBeCalledTimes(1)
    // }
  )
})

describe('<BreakLength />', () => {
  const { getByText, container } = render(<BreakLength />)

  it.todo('should have the attribute id="break-length"')

  it.todo('should display the number 5 by default')

  it.todo('should not display value <= 0')

  it.todo('should not display value >= 60')
})