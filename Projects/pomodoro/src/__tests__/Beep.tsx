import React from 'react'
import { render } from '@testing-library/react'
import { Beep } from '../Beep/Beep'

describe('<Beep />', () => {
  const { container } = render(<Beep />)

  it.todo('should have the attribute id="beep"')

  it.todo('should be an <audio /> tag')

  it.todo('should produce a sound that is at least 1s long')
})