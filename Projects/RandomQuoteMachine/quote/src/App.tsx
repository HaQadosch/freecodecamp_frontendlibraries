import React, { useEffect, useState } from 'react';
import './App.css';
import { QuoteText } from './QuoteBox/QuoteText';
import { QuoteAuthor } from './QuoteBox/QuoteAuthor';
import { NewQuote } from './CTAs/NewQuote';
import { TweetQuote } from './CTAs/TweetQuote';
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

  let { quote: text, author } = shuffledQuotes[index]

  useEffect(() => {
    console.table(shuffledQuotes)
    // eslint-disable-next-line
  }, [index])

  return (
    <main id="quote-box">
      <QuoteText text={ text } />
      <QuoteAuthor author={ author } />
      <NewQuote onNext={ setIndex } curIndex={ index } />
      <TweetQuote />
    </main>
  );
}

export default App;
