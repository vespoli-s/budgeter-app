import React, { useState, useContext } from 'react';
import { BudgetContext } from '../BudgetContext';

const Dashboard = () => {
  const { budgetData, setBudgetData } = useContext(BudgetContext);
  const [payAmount, setPayAmount] = useState('');
  const [payDate, setPayDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = () => {
    const netPay = parseFloat(payAmount);
    if (!netPay || netPay <= 0) return;

    // Save paycheck to history
    const newPay = { amount: netPay, date: payDate };
    const updatedHistory = [...budgetData.paycheckHistory, newPay];
    setBudgetData({ ...budgetData, paycheckHistory: updatedHistory });
  };

  const fixedTotal = [
    ...budgetData.fixedExpenses,
    ...budgetData.subscriptions
  ].reduce((sum, exp) => sum + exp.amount || exp.cost || 0, 0);

  const remaining = payAmount ? parseFloat(payAmount) - fixedTotal : 0;
  const savingsTarget = (payAmount * (budgetData.savingsGoal / 100)).toFixed(2);
  const flagged = remaining < savingsTarget;

  return (
    <div className="dashboard-screen">
      <h2>Paycheck Breakdown</h2>

      <input
        type="number"
        placeholder="Enter net paycheck ($)"
        value={payAmount}
        onChange={(e) => setPayAmount(e.target.value)}
      />
      <input
        type="date"
        value={payDate}
        onChange={(e) => setPayDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Save Paycheck</button>

      {payAmount && (
        <div className="breakdown">
          <p><strong>Fixed Expenses:</strong> ${fixedTotal.toFixed(2)}</p>
          <p><strong>Remaining:</strong> ${remaining.toFixed(2)}</p>
          <p><strong>Savings Goal ({budgetData.savingsGoal}%):</strong> ${savingsTarget}</p>
          <p>
            <strong>Status:</strong> {flagged ? '⚠️ Below target' : '✅ On track'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
