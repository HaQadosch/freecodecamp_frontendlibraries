import React from 'react'
import { action } from '@storybook/addon-actions'
import { Break, BreakInc, BreakDec, BreakLength } from '../Break/Break'

export default {
  title: 'Break',
  component: Break
}

export const Timer = () => <BreakLength />
export const Increment = () => <BreakInc onClick={action('clicked')} />
export const Decrement = () => <BreakDec onClick={action('clicked')} />
export const Full = () => <Break onClick={action('clicked')} />
