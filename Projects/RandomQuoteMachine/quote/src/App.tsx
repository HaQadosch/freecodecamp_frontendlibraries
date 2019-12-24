import React from 'react';
import './App.css';
import { QuoteText } from './QuoteBox/QuoteText';
import { QuoteAuthor } from './QuoteBox/QuoteAuthor';
import { NewQuote } from './CTAs/NewQuote';
import { TweetQuote } from './CTAs/TweetQuote';

const App: React.FC = () => {
  return (
    <main id="quote-box">
      <QuoteText />
      <QuoteAuthor />
      <NewQuote />
      <TweetQuote />
    </main>
  );
}

export default App;
