import React from 'react';
import { Header } from './components/header.js';
import { Balance } from './components/balance.js';
import { IncomeExpenses } from './components/incomeExpenses.js';
import { TransactionList } from './components/transactionList.js';
import { AddTransaction } from './components/AddTransaction.js';


import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
