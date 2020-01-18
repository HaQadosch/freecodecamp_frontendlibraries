import React from 'react'

import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { Break, BreakInc, BreakDec, BreakLength } from '../Break/Break'

export default {
  title: 'Break',
  component: Break,
  subcomponents: { BreakLength, BreakInc, BreakDec },
  decorators: [withA11y],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'galaxys9'
    },
    backgrounds: [
      { name: 'white', value: '#EFEEEE', default: true },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' }
    ]
  }
}

export const Timer = () => <BreakLength duration={5} />
export const Increment = () => <BreakInc onClick={action('clicked')} />
export const Decrement = () => <BreakDec onClick={action('clicked')} />
export const Full = () => <Break onClick={action('clicked')} />

Full.story = {
  parameters: {
    notes: 'A small component'
  }
}
