import React, { useContext } from 'react';
import { BudgetContext } from '../BudgetContext';

const Dashboard = () => {
  const { budgetData } = useContext(BudgetContext);
  const latestPaycheck = budgetData.paycheckHistory.at(-1);

  if (!latestPaycheck) {
    return <div className="p-4">No paycheck data available yet.</div>;
  }

  const { amount, fixedTotal, variableTotal, subscriptionTotal, leftover } = latestPaycheck;

  const needs = ((fixedTotal / amount) * 100).toFixed(1);
  const wants = ((variableTotal / amount) * 100).toFixed(1);
  const savings = ((leftover / amount) * 100).toFixed(1);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Latest Paycheck Overview</h2>
      <ul className="space-y-1">
        <li>💵 Net Pay: ${amount}</li>
        <li>🏠 Fixed: ${fixedTotal} ({needs}%)</li>
        <li>🛍️ Variable: ${variableTotal} ({wants}%)</li>
        <li>📺 Subscriptions: ${subscriptionTotal}</li>
        <li>💰 Remaining: ${leftover} ({savings}%)</li>
      </ul>

      <div className="mt-4">
        <h3 className="font-medium">50/30/20 Check</h3>
        <ul className="text-sm list-disc ml-5">
          <li className={needs <= 50 ? 'text-green-600' : 'text-red-600'}>
            Needs {needs}% {needs <= 50 ? '✅' : '❌'}
          </li>
          <li className={wants <= 30 ? 'text-green-600' : 'text-red-600'}>
            Wants {wants}% {wants <= 30 ? '✅' : '❌'}
          </li>
          <li className={savings >= 20 ? 'text-green-600' : 'text-red-600'}>
            Savings {savings}% {savings >= 20 ? '✅' : '❌'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
