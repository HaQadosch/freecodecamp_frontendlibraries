import { createSlice } from '@reduxjs/toolkit'
import { produce, Draft } from 'immer'


type BeeperState = {
  readonly play: boolean
}

const initialState: BeeperState = {
  play: false
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
    draft.play = true
  })
}
/**
 * { type: 'beeper/stop' }
 * Stops the beeper.
 */
const stopReducer = {
  stop: produce((draft: Draft<BeeperState>) => {
    draft.play = false
  })
}

export const beeperSlice = createSlice({
  name: 'beeper',
  initialState,
  reducers: {
    ...resetReducer,
    ...playReducer,
    ...stopReducer
  }
})
