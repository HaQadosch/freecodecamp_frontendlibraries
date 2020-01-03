import React from 'react'

interface IDigit {
  id: string,
  value: number
}

const digits: IDigit[] = [
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

const Digit: React.FC<IDigit> = ({ value, id }) => {
  return (
    <button id={ id }>
      { value }
    </button>
  )
}

export const Digits: React.FC = () => {
  return (
    <>
      { digits.map(({ value, id }) => <Digit value={ value } id={ id } />) }
    </>
  )
}