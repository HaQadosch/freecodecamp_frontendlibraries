import React from 'react'

import './App.css'
import './reset.css'

import { Editor } from './Editor/Editor'
import { Preview } from './Preview/Preview'

const App: React.FC = () => {
  return (
    <main id="app">
      <Editor />
      <Preview />
    </main>
  );
}

export default App
