import React from 'react';
import { render } from '@testing-library/react';
import { Break, BreakDec, BreakInc } from '../Break/Break';

describe('<Break />', () => {
  const { getByText, getByTestId } = render(<Break />);

  it('should have the right id', () => {
    const component = getByTestId('break-label');
    expect(component).toBeInTheDocument();
  });

  it('should render the right text', () => {
    const component = getByText(/Break Length/i);
    expect(component).toBeInTheDocument();
  });
})
