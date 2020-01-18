import React from 'react'
import { render, fireEvent, waitForElement, within, waitForDomChange } from '@testing-library/react'
import { App } from "../App";

describe('<App />', () => {
  describe('Reset', () => {
    /**
     * When I click the element with the id of reset, 
     * - any running timer should be stopped, 
     * - the value within id="break-length" should return to 5, 
     * - the value within id="session-length" should return to 25, 
     * - and the element with id="time-left" should reset to it's default state.
     */

    it('should be reset when I click on the reset button', async () => {
      const { getByText } = render(<App />)

      fireEvent.click(getByText(/Reset/i))
      const timerNode = await waitForElement(() => getByText(/stopped/i))

      const breakNode = getByText(/Break Length/i)
      within(breakNode).getByText('5')

      const sessionNode = getByText(/Session Length/i)
      within(sessionNode).getByText('25')

      within(timerNode).getByText(/Session/i)
      within(timerNode.parentElement as HTMLElement).getByText('25:00')
    })
  })

  describe('Break Length Actions', () => {
    it('should reduce the break length by 1 minute when I click the Dec Break button', async () => {
      const { getByText } = render(<App />)

      const breakLengthNode = getByText(/Break Length/i)
      within(breakLengthNode).getByText('5')

      fireEvent.click(getByText(/Dec Break/i))
      within(breakLengthNode).getByText('4')
    });

    it('should not be able to set Break Length to less than 1 minute', () => {
      const { getByText } = render(<App />)

      const breakLengthNode = getByText(/Break Length/i)
      within(breakLengthNode).getByText('5')

      let count = 6
      while (count > 0) {
        fireEvent.click(getByText(/Dec Break/i))
        count--
      }
      within(breakLengthNode).getByText('1')
    })

    it('should increase the break length by 1 minute when I click the Inc Break button', async () => {
      const { getByText } = render(<App />)

      const breakLengthNode = getByText(/Break Length/i)
      within(breakLengthNode).getByText('5')

      fireEvent.click(getByText(/Inc Break/i))
      within(breakLengthNode).getByText('6')
    })

    it('should not be able to set Break Length to More than 60 minute', () => {
      const { getByText } = render(<App />)

      const breakLengthNode = getByText(/Break Length/i)
      within(breakLengthNode).getByText('5')

      let count = 60 - 5 + 1 // Max - Default + 1 
      while (count > 0) {
        fireEvent.click(getByText(/Inc Break/i))
        count--
      }
      within(breakLengthNode).getByText('60')
    })
  })

  describe('Session Length Actions', () => {
    it('should reduce the session length by 1 minute when I click the Dec Session button', async () => {
      const { getByText } = render(<App />)

      const sessionLengthNode = getByText(/Session Length/i)
      within(sessionLengthNode).getByText('25')

      fireEvent.click(getByText(/Dec Session/i))
      within(sessionLengthNode).getByText('24')
    });

    it('should not be able to set Session Length to less than 1 minute', () => {
      const { getByText } = render(<App />)

      const sessionLengthNode = getByText(/Session Length/i)
      within(sessionLengthNode).getByText('25')

      let count = 26
      while (count > 0) {
        fireEvent.click(getByText(/Dec Session/i))
        count--
      }
      within(sessionLengthNode).getByText('1')
    })

    it('should increase the session length by 1 minute when I click the Inc Session button', async () => {
      const { getByText } = render(<App />)

      const sessionLengthNode = getByText(/Session Length/i)
      within(sessionLengthNode).getByText('25')

      fireEvent.click(getByText(/Inc Session/i))
      within(sessionLengthNode).getByText('26')
    })

    it('should not be able to set Session Length to more than 60 minute', () => {
      const { getByText } = render(<App />)

      const sessionLengthNode = getByText(/Session Length/i)
      within(sessionLengthNode).getByText('25')

      let count = 60 - 25 + 1 // Max - Default + 1
      while (count > 0) {
        fireEvent.click(getByText(/Inc Session/i))
        count--
      }
      within(sessionLengthNode).getByText('60')
    })
  })
});
