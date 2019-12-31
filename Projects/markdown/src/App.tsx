import React, { useState } from 'react'

import './App.css'
import './reset.css'

import { Editor } from './Editor/Editor'
import { Preview } from './Preview/Preview'

import { preview } from "./Assets/texts.json";

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>(preview)

  return (
    <main id="app">
      <Editor textValue={ markdownText } updateAction={ setMarkdownText } />
      <Preview textValue={ markdownText } />
    </main>
  );
}

export default App
