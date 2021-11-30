import React from 'react';
import { Header } from './modules/header';
import { Opening } from './modules/opening-bill';
import { TotalAmount } from './modules/total-amount';
import { SplitTheBill } from './modules/split-the-bill';
import { Tips } from './modules/tips';
import { Checkout } from './modules/checkout';
import { ThankYou } from './modules/thank-you';
import { PaymentError } from './modules/payment-error';
import { AlreadyPaid } from './modules/already-paid';

import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TotalAmount />
      <SplitTheBill />
      <Tips />
      <Checkout /> */}
      {/* <Opening /> */}
      {/* <ThankYou /> */}
      <PaymentError />
      {/* <AlreadyPaid /> */}
    </div>
  );
}

export default App;
