import React from 'react';
import { Header } from './modules/header';
import { Opening } from './modules/opening-bill';
import { TotalAmount } from './modules/total-amount';
import { SplitTheBill } from './modules/split-the-bill';
import { Tips } from './modules/tips';
import { Checkout } from './modules/checkout';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalAmount />
      <SplitTheBill />
      <Tips />
      <Checkout />
      <Opening />
    </div>
  );
}

export default App;
