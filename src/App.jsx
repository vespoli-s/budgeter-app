import React from 'react';
import { BudgetProvider } from './BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="app-container">
        <h1>Budgeter App Starter</h1>
        <p>This is the starting point for your CashApp-style budget tracker.</p>
      </div>
    </BudgetProvider>
  );
}

export default App;