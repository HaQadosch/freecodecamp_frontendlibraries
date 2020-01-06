import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { pushHistory, RootState, clear } from "../Store/rootReducer"
import { AppDispatch } from "../Store/store"

interface IOperatorButton {
  operator: string
  id: string
}

const OperatorButton: React.FC<IOperatorButton> = ({ id, operator }) => {
  const dispatch: AppDispatch = useDispatch()
  const { value: total } = useSelector(({ total }: RootState) => total)

  return (
    <button id={ id } onClick={ handleClick }>
      { operator }
    </button>
  )

  function handleClick (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(pushHistory({
      prevValue: total,
      operator
    }))
    dispatch(clear())
  }
}

export const OpAdd: React.FC = () => <OperatorButton id="add" operator="+" />
export const OpSubstract: React.FC = () => <OperatorButton id="substract" operator="-" />
export const OpMultiply: React.FC = () => <OperatorButton id="multiply" operator="*" />
export const OpDivide: React.FC = () => <OperatorButton id="divide" operator="/" />
