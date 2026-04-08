import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/mockData';

export default function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = users.some((u) => u.username === username && u.password === password);
    if (valid) {
      navigate('/dashboard');
      return;
    }
    setError('Invalid credentials. Use admin / password for this demo.');
  };

  return (
    <section className="auth-wrap">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login to Biodiversity Change Detection</h2>
        <p>Demo credentials: admin / password</p>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
    </section>
  );
}
