import  { useState } from 'react';

function AuthForms({ onSubmit, isRegistering }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // For registration

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      onSubmit({ username, email, password });
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <h3>{isRegistering ? 'Register' : 'Login'}</h3>
      {isRegistering && (
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      )}
      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {isRegistering ? 'Register' : 'Login'}
      </button>
    </form>
  );
}

export default AuthForms;