import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaycheckEntry from './components/PaycheckEntry';

import FixedExpenses from './screens/FixedExpenses';
import SubscriptionScreen from './screens/SubscriptionScreen';
import VariableExpenses from './screens/VariableExpenses';
import SavingsGoal from './screens/SavingsGoal';
import SummaryScreen from './screens/SummaryScreen';
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/fixed" element={<FixedExpenses />} />
        <Route path="/subscriptions" element={<SubscriptionScreen />} />
        <Route path="/variable" element={<VariableExpenses />} />
        <Route path="/savings" element={<SavingsGoal />} />
        <Route path="/summary" element={<SummaryScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/paycheck" element={<PaycheckEntry />} />
      </Routes>
    </Router>
  );
};

const WelcomeScreen = () => (
  <div className="onboarding-screen">
    <h1>Welcome to Budgeter</h1>
    <p>Let’s set up your budget step by step.</p>
    <a href="/fixed"><button>Get Started</button></a>
  </div>
);

export default App;
