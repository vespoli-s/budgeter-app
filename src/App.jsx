import React, { useState } from 'react';
import FixedExpenses from './screens/FixedExpenses';
import VariableExpenses from './screens/VariableExpenses';
import SubscriptionScreen from './screens/SubscriptionScreen';
import SavingsGoal from './screens/SavingsGoal';
import SummaryScreen from './screens/SummaryScreen';

const App = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const screens = [
    <WelcomeScreen onNext={next} />,
    <FixedExpenses onNext={next} onBack={back} />,
    <SubscriptionScreen onNext={next} onBack={back} />,
    <VariableExpenses onNext={next} onBack={back} />,
    <SavingsGoal onNext={next} onBack={back} />,
    <SummaryScreen />
  ];

  return (
    <div className="app-container">
      {screens[step]}
    </div>
  );
};

const WelcomeScreen = ({ onNext }) => (
  <div className="onboarding-screen">
    <h1>Welcome to Budgeter</h1>
    <p>Let’s set up your budget step by step.</p>
    <button onClick={onNext}>Get Started</button>
  </div>
);

export default App;
