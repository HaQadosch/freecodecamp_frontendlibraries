import React from 'react'

interface INewQuote {
  onNext: React.Dispatch<React.SetStateAction<number>>
  curIndex: number
}

export const NewQuote: React.FC<INewQuote> = ({ onNext, curIndex }) => {
  return (
    <button onClick={ () => onNext(curIndex + 1) } id='new-quote'>
      New Quote
    </button>
  )
}
