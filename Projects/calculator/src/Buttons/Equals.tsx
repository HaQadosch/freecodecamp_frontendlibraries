import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { pushHistory, RootState, setTotal, setTemp } from "../Store/rootReducer"
import { AppDispatch } from "../Store/store"

import { operate } from "../Utils/ops";

export const Equals: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const history = useSelector(({ history }: RootState) => history)
  const { value: lastValue } = useSelector(({ total }: RootState) => total)
  const { tempValue: tempTotal } = useSelector(({ temp }: RootState) => temp)

  return (
    <button id="equals" onClick={ handleClick }>
      =
    </button>
  )

  function handleClick (_: React.MouseEvent<HTMLButtonElement>): void {
    // compute sum
    dispatch(pushHistory({
      prevValue: lastValue,
      operator: '='
    }))
    const lastOperator = history[history.length - 1].operator
    const total = operate(lastOperator)(tempTotal, lastValue)
    dispatch(setTemp({ tempValue: total }))
    dispatch(setTotal({ value: total }))
    // display
    // reset?
  }
}
