import React, { useState, useContext } from 'react';
import { BudgetContext } from '../BudgetContext';

const PaycheckEntry = () => {
  const { budgetData, setBudgetData } = useContext(BudgetContext);
  const [paycheck, setPaycheck] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(paycheck);

    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    const needs = amount * 0.5;
    const wants = amount * 0.3;
    const savings = amount * 0.2;

    const newEntry = {
      amount,
      date: new Date().toISOString(),
      breakdown: {
        needs,
        wants,
        savings
      }
    };

    setBudgetData({
      ...budgetData,
      paycheckHistory: [...budgetData.paycheckHistory, newEntry]
    });

    setPaycheck('');
    setError('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Enter Paycheck</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="number"
          value={paycheck}
          onChange={(e) => setPaycheck(e.target.value)}
          placeholder="e.g. 2500"
          className="p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Save Paycheck
        </button>
      </form>
    </div>
  );
};

export default PaycheckEntry;
