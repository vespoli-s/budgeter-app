import React, { createContext, useState, useEffect } from 'react';

// Create the context object
export const BudgetContext = createContext();

// Provide context to the rest of the app
export const BudgetProvider = ({ children }) => {
  const [budgetData, setBudgetData] = useState(() => {
    // Load from localStorage if available
    const stored = localStorage.getItem('budgetData');
    return stored
      ? JSON.parse(stored)
      : {
          fixedExpenses: [],
          variableExpenses: [],
          subscriptions: [],
          savingsGoal: 20, // default to 20% for 50/30/20
          paycheckHistory: []
        };
  });

  // Auto-save to localStorage when budgetData changes
  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
  }, [budgetData]);

  // Clear budget data (if needed for reset later)
  const resetBudgetData = () => {
    setBudgetData({
      fixedExpenses: [],
      variableExpenses: [],
      subscriptions: [],
      savingsGoal: 20,
      paycheckHistory: []
    });
  };

  return (
    <BudgetContext.Provider value={{ budgetData, setBudgetData, resetBudgetData }}>
      {children}
    </BudgetContext.Provider>
  );
};
