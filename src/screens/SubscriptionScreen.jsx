import React, { useState } from 'react';

const SubscriptionScreen = ({ onNext, onBack }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const addSubscription = () => {
    if (!name || !cost) return;
    setSubscriptions([...subscriptions, { name, cost: parseFloat(cost) }]);
    setName('');
    setCost('');
  };

  return (
    <div className="onboarding-screen">
      <h2>Subscriptions</h2>

      <input
        type="text"
        placeholder="Subscription Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Cost ($)"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button onClick={addSubscription}>Add Another</button>

      <ul>
        {subscriptions.map((sub, i) => (
          <li key={i}>{sub.name}: ${sub.cost.toFixed(2)}</li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={onNext}>All Done</button>
      </div>
    </div>
  );
};

export default SubscriptionScreen;
