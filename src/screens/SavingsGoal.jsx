import React, { useState } from 'react';

const SavingsGoal = ({ onNext, onBack }) => {
  const [useRule, setUseRule] = useState(true);
  const [customPercent, setCustomPercent] = useState(20); // default 20%

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
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default SavingsGoal;
