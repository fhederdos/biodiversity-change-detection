import { Link, NavLink } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <Link className="brand" to="/dashboard">
          Biodiversity Change Detection
        </Link>
        <nav>
          <NavLink to="/" className="nav-link">
            Landing
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/site/apfelhain-nord" className="nav-link">
            Site Detail
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
