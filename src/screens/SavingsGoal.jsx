import React, { useState, useContext } from 'react';
import { BudgetContext } from '../BudgetContext';

const SavingsGoal = ({ onNext, onBack }) => {
  const { budgetData, setBudgetData } = useContext(BudgetContext);
  const [useRule, setUseRule] = useState(true);
  const [customPercent, setCustomPercent] = useState(
    budgetData.savingsGoal !== 20 ? budgetData.savingsGoal : 20
  );

  const handleNext = () => {
    const savingsGoal = useRule ? 20 : parseFloat(customPercent);
    setBudgetData({ ...budgetData, savingsGoal });
    onNext();
  };

  return (
    <div className="onboarding-screen">
      <h2>Savings Goal</h2>

      <label>
        <input
          type="radio"
          name="savings"
          checked={useRule}
          onChange={() => setUseRule(true)}
        />
        Follow 50/30/20 Rule (20% savings)
      </label>

      <label>
        <input
          type="radio"
          name="savings"
          checked={!useRule}
          onChange={() => setUseRule(false)}
        />
        Custom Savings Percentage
      </label>

      {!useRule && (
        <input
          type="number"
          value={customPercent}
          onChange={(e) => setCustomPercent(e.target.value)}
          placeholder="e.g., 25"
        />
      )}

      <div className="nav-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SavingsGoal;
