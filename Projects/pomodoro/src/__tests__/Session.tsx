import React from 'react';
import { render } from '@testing-library/react';
import { Session, SessionDec, SessionInc } from '../Session/Session';

describe('<Session />', () => {
  const { getByText, getByTestId } = render(<Session />);

  it('should have the right id', () => {
    const component = getByTestId('session-label');
    expect(component).toBeInTheDocument();
  });

  it('should render the right text', () => {
    const component = getByText(/Session Length/i);
    expect(component).toBeInTheDocument();
  });
})