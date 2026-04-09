import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const username = localStorage.getItem('bio-demo-username') || 'admin';

  const handleLogout = () => {
    localStorage.setItem('bio-demo-auth', 'false');
    navigate('/');
  };

  return (
    <header className="top-nav top-nav-white">
      <Link className="brand brand-dark" to="/dashboard">
        <span className="brand-mark" aria-hidden="true">◌</span>
        <span>Biodiversity Change Detection</span>
      </Link>
      <div className="header-user-actions">
        <div className="header-user-chip" title={username}>
          <span className="header-user-icon" aria-hidden="true">👤</span>
          <span>{username}</span>
        </div>
        <button className="ghost-btn" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}
