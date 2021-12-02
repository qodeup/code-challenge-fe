import React from 'react';
import { Header } from './modules/header';
import { TotalAmount } from './modules/total-amount';

import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalAmount />
    </div>
  );
}

export default App;
