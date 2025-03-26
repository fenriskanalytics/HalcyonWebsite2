'use client';

import React, { useState, useEffect } from 'react';
import MarianaIntegration from './marianaIntegration'; // Adjust the path if needed

const AuthButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <MarianaIntegration
      path="/account"
      login={!isLoggedIn}
      loggedInText="My Account"
      loggedOutText="Login"
    />
  );
};

export default AuthButton;
