import { createSlice } from '@reduxjs/toolkit'
import { produce, Draft } from 'immer'


type BeeperState = {
  readonly play: number
}

const initialState: BeeperState = {
  play: 0
}

const resetReducer = {
  reset: produce((_: Draft<BeeperState>) => initialState)
}
/**
 * { type: 'beeper/play' }
 * Starts the beeper.
 */
const playReducer = {
  play: produce((draft: Draft<BeeperState>) => {
    draft.play++
  })
}
/**
 * { type: 'beeper/stop' }
 * Stops the beeper.
 */
const pauseReducer = {
  pause: produce((draft: Draft<BeeperState>) => {
    draft.play = 0
  })
}
/**
 * { type: 'beeper/stop' }
 * Stops the beeper.
 */
const stopReducer = {
  stop: produce((draft: Draft<BeeperState>) => {
    draft.play = -1
  })
}

export const beeperSlice = createSlice({
  name: 'beeper',
  initialState,
  reducers: {
    ...resetReducer,
    ...playReducer,
    ...stopReducer,
    ...pauseReducer
  }
})
