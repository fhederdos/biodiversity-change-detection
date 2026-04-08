import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('bio-demo-auth', 'true');
      navigate(location.state?.from || '/dashboard');
      return;
    }
    setError('Invalid credentials. Use admin / password.');
  };

  return (
    <main className="login-page">
      <form className="card login-card" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        <p>Sign in to continue biodiversity risk assessment review.</p>
        <label>Username<input value={username} onChange={(e) => setUsername(e.target.value)} /></label>
        <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="primary-btn">Login</button>
      </form>
    </main>
  );
}
