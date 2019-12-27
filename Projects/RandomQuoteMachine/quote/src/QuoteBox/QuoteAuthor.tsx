import React from 'react'

interface IQuoteAuthor {
  author: string
}

export const QuoteAuthor: React.FC<IQuoteAuthor> = ({ author }) => {
  return (
    <p id='author'>
      - { author }
    </p>
  )
}
