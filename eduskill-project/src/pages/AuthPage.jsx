import  { useState } from 'react';
import AuthForms from './AuthForms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuthSubmit = async (userData) => {
    const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
    try {
      const response = await axios.post(endpoint, userData);
      console.log('Authentication successful:', response.data);
      // Handle token storage and redirection here
      alert('Success!');
      navigate('/dashboard'); // Example redirection
    } catch (error) {
      console.error(
        'Authentication failed:',
        error.response?.data?.message || error.message
      );
      alert(
        `Authentication failed: ${
          error.response?.data?.message || 'Please check your credentials.'
        }`
      );
    }
  };

  return (
    <div className='auth-page'>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering
          ? 'Already have an account? Login'
          : 'Need an account? Register'}
      </button>
      <AuthForms onSubmit={handleAuthSubmit} isRegistering={isRegistering} />
    </div>
  );
}

export default AuthPage;