import React from 'react';
import './App.css';

import { Display } from './Display/Display';
import { Pads } from "./Pads/Pads";

export const App: React.FC = () => {
  return (
    <main className="App" id="drum-machine" >
      <Display />
      <Pads />
    </main>
  );
}
