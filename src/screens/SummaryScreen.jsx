import React from 'react';
import { Link } from 'react-router-dom';

const SummaryScreen = () => {
  return (
    <div className="onboarding-screen">
      <h2>You're All Set!</h2>
      <p>Your budget profile has been created.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default SummaryScreen;
