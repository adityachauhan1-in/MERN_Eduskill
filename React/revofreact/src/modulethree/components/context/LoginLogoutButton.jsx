import React, { useContext, useState } from 'react';
import AuthContext, { useAuth } from './AuthContext';

function LoginLogoutButton() {
  const { isAuthenticated, login, logout } = useContext(AuthContext)
  const [userNameInput, setUserNameInput] = useState('');

  const handleLogin = () => {
    if (userNameInput.trim()) {
      login(userNameInput);
      setUserNameInput('');
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <input
            type="text"
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
            placeholder="Enter your username"
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <button onClick={handleLogin} style={{ padding: '8px 15px' }}>Login</button>
        </div>
      ) : (
        <button onClick={handleLogout} style={{ padding: '8px 15px' }}>Logout</button>
      )}
    </div>
  );
}

export default LoginLogoutButton;