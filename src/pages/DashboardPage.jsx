import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import { dashboardKPIs, sites } from '../data/mockData';

export default function DashboardPage() {
  return (
    <div className="page-grid">
      <section>
        <div className="section-header">
          <h2>Assessment Dashboard</h2>
          <button className="primary-btn">Analyze new location</button>
        </div>

        <div className="kpi-grid">
          {dashboardKPIs.map((kpi) => (
            <article key={kpi.label} className="kpi-card">
              <p>{kpi.label}</p>
              <h3>{kpi.value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="sites-list">
        <h3>Analyzed Sites (Austria)</h3>
        {sites.map((site) => (
          <article key={site.id} className="site-card">
            <div>
              <h4>{site.name}</h4>
              <p>{site.region}</p>
              <p className="muted">{site.summary}</p>
              <p>{site.status}</p>
            </div>
            <div className="site-actions">
              <Badge value={site.risk} />
              <Link to={`/site/${site.id}`}>View details</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
