import React, { useEffect, useState } from 'react';
import './App.css';
import { QuoteText } from './QuoteBox/QuoteText';
import { QuoteAuthor } from './QuoteBox/QuoteAuthor';
import { QuoteSource } from "./QuoteBox/QuoteSource";
import { NewQuote } from './CTAs/NewQuote';
import { StarWars } from './assets/quotes.json'
import { shuffle } from './utils/shuffle';

interface IQuote {
  quote: string
  author: string
  source: string
}

const shuffledQuotes = shuffle<IQuote>(StarWars)

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0)

  let { quote: text, author, source } = shuffledQuotes[index]

  useEffect(() => {
    console.table(shuffledQuotes)
    // eslint-disable-next-line
  }, [index])

  return (
    <main id="quote-box">
      <QuoteText text={ text } />
      <QuoteAuthor author={ author } />
      <QuoteSource source={ source } />
      <NewQuote onNext={ setIndex } curIndex={ index } />
    </main>
  );
}

export default App;
