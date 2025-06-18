import React, { useState, useContext } from 'react';
import { BudgetContext } from '../BudgetContext';

const FixedExpenses = ({ onNext, onBack }) => {
  const { budgetData, setBudgetData } = useContext(BudgetContext);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState(budgetData.fixedExpenses || []);

  const addExpense = () => {
    if (!expenseName || !expenseAmount) return;
    setExpenses([
      ...expenses,
      { name: expenseName, amount: parseFloat(expenseAmount) }
    ]);
    setExpenseName('');
    setExpenseAmount('');
  };

  const handleNext = () => {
    setBudgetData({ ...budgetData, fixedExpenses: expenses });
    onNext();
  };

  return (
    <div className="onboarding-screen">
      <h2>Fixed Monthly Expenses</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount ($)"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>

      <ul>
        {expenses.map((exp, i) => (
          <li key={i}>
            {exp.name}: ${exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FixedExpenses;
