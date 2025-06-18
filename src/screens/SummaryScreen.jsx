import React from 'react';

const SummaryScreen = () => {
  return (
    <div className="onboarding-screen">
      <h2>You're All Set!</h2>
      <p>Your budget profile has been created.</p>
      <p>From here, you’ll be able to enter new paychecks, track spending, and get 50/30/20 insights.</p>

      <button onClick={() => alert('Dashboard coming soon!')}>Go to Dashboard</button>
    </div>
  );
};

export default SummaryScreen;
