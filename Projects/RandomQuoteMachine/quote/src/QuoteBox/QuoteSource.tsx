import React from 'react'

interface IQuoteSouce {
  source: string
}

export const QuoteSource: React.FC<IQuoteSouce> = ({ source }) => {
  return (
    <p>
      { source }
    </p>
  )
}
