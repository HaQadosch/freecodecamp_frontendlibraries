import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Session, SessionDec, SessionInc, SessionLength } from '../Session/Session';

describe('<Session />', () => {
  const { getByText, container } = render(<Session />);

  it.todo('should have the attribute id=session-label'
    // , () => {
    //   const idSessionLabels = container.querySelectorAll('#session-label')
    //   expect(idSessionLabels).toHaveLength(1);
    // }
  );

  it.todo('should display the text "Session Length"'
    // , () => {
    //   const component = getByText(/Session Length/i);
    //   expect(component).toBeInTheDocument();
    // }
  );
})

describe('<SessionDec />', () => {
  const handleClick = jest.fn()
  const { getByText, container } = render(<SessionDec onClick={ handleClick } />)

  it.todo('should have the attribute id="session-decrement"'
    // , () => {
    //   const idSessionDecrements = container.querySelectorAll('#session-decrement')
    //   expect(idSessionDecrements).toHaveLength(1)
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

describe('<SessionInc />', () => {
  const handleClick = jest.fn()
  const { getByText, container } = render(<SessionInc onClick={ handleClick } />)

  it.todo('should have the attribute id="session-increment"'
    // , () => {
    //   const idSessionIncrements = container.querySelectorAll('#session-increment')
    //   expect(idSessionIncrements).toHaveLength(1)
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

describe('<SessionLength />', () => {
  const { getByText, container } = render(<SessionLength />)

  it.todo('should have the attribute id="session-length"'
    // , () => {

    // }
  )
  it.todo('should display the number 25 by default')

  it.todo('should not display value <= 0')

  it.todo('should not display value >= 60')
})