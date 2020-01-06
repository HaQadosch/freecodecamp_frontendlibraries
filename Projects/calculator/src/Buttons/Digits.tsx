import React from 'react'

import { useDispatch } from 'react-redux'
import { appendTotal } from "../Store/rootReducer"
import { AppDispatch } from "../Store/store";


interface IDigit {
  id: string
  value: number
  onClick: (value: number) => void
}

const digits: Pick<IDigit, 'id' | 'value'>[] = [
  { id: 'zero', value: 0 },
  { id: 'one', value: 1 },
  { id: 'two', value: 2 },
  { id: 'three', value: 3 },
  { id: 'four', value: 4 },
  { id: 'five', value: 5 },
  { id: 'six', value: 6 },
  { id: 'seven', value: 7 },
  { id: 'eight', value: 8 },
  { id: 'nine', value: 9 },
]

const Digit: React.FC<IDigit> = ({ value, id, onClick }) => {
  return (
    <button id={ id } onClick={ (_: React.MouseEvent<HTMLButtonElement>) => onClick(value) }>
      { value }
    </button>
  )
}

export const Digits: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      { digits.map(({ value, id }) => <Digit value={ value } id={ id } key={ id } onClick={ handleClick } />) }
    </>
  )

  function handleClick (value: number) {
    dispatch(appendTotal({ value }))
  }
}