import React, { createContext, useState, useEffect } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgetData, setBudgetData] = useState(() => {
    const stored = localStorage.getItem('budgetData');
    return stored ? JSON.parse(stored) : {
      fixedExpenses: [],
      variableExpenses: [],
      paycheckHistory: [],
      subscriptions: []
    };
  });

  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
  }, [budgetData]);

  return (
    <BudgetContext.Provider value={{ budgetData, setBudgetData }}>
      {children}
    </BudgetContext.Provider>
  );
};