import React from 'react';
import './App.css';
import './reset.css'

import { Equals } from "./Buttons/Equals";
import { Digits } from "./Buttons/Digits";
import { OpAdd, OpDivide, OpMultiply, OpSubstract } from "./Buttons/Ops";
import { Decimal } from "./Buttons/Decimal";
import { Clear } from "./Buttons/Clear";
import { Display } from "./Display/Display";

export const App: React.FC = () => {
  return (
    <main className="App">
      <Display />
      <Digits />
      <Decimal />
      <OpAdd />
      <OpSubstract />
      <OpMultiply />
      <OpDivide />
      <Clear />
      <Equals />
    </main>
  );
}
