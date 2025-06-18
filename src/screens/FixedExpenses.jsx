import React, { useState } from 'react';

const FixedExpenses = ({ onNext, onBack }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!expenseName || !expenseAmount) return;
    setExpenses([...expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]);
    setExpenseName('');
    setExpenseAmount('');
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
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default FixedExpenses;
