import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('bio-demo-auth');
    navigate('/login');
  };

  return (
    <header className="top-nav">
      <Link className="brand" to="/dashboard">
        Biodiversity Change Detection
      </Link>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <button className="ghost-btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
