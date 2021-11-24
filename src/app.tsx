import React from 'react';
import { Header } from './modules/header';
import { TotalAmount } from './modules/total-amount';
import { SplitTheBill } from './modules/split-the-bill';
import { Tips } from './modules/tips';
import { Checkout } from './modules/checkout';
import './app.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <TotalAmount />
      <SplitTheBill />
      <Tips />
      <Checkout />
    </div>
  );
}

export default App;
