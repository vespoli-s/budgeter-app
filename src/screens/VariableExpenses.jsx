import React, { useState } from 'react';

const VariableExpenses = ({ onNext, onBack }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    if (!category || !amount) return;
    setCategories([...categories, { category, amount: parseFloat(amount) }]);
    setCategory('');
    setAmount('');
  };

  return (
    <div className="onboarding-screen">
      <h2>Variable Weekly Expenses</h2>
      <input
        type="text"
        placeholder="Category (e.g., groceries)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Weekly Budget ($)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addCategory}>Add Category</button>

      <ul>
        {categories.map((item, i) => (
          <li key={i}>
            {item.category}: ${item.amount.toFixed(2)} / week
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

export default VariableExpenses;
