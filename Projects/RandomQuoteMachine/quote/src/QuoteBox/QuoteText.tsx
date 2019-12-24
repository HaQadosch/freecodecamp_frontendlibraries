import React from 'react'

interface IQuoteText {
  text: string
}

export const QuoteText: React.FC<IQuoteText> = ({ text }) => {
  return (
    <p id='text'>
      { text }
    </p>
  )
}
