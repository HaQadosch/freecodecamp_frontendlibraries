import React from 'react'
import './QuoteText.css'

interface IQuoteText {
  text: string
}

export const QuoteText: React.FC<IQuoteText> = ({ text }) => {
  return (
    <q id='text'>
      <em>
        { text }
      </em>
    </q>
  )
}
