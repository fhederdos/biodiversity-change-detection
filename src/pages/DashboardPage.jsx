import { Link } from 'react-router-dom';
import RiskBadge from '../components/RiskBadge';
import { sites } from '../data/mockData';

const kpis = [
  { label: 'Sites analyzed', value: 21 },
  { label: 'Hazards found', value: 2 },
  { label: 'Recently changed sites', value: 5 },
  { label: 'New location pending review', value: 1 },
];

export default function DashboardPage() {
  return (
    <main className="page-container page-with-header">
      <section className="dashboard-head">
        <div>
          <p className="eyebrow">ESRS E4 Monitoring</p>
          <h1>Biodiversity Risk Dashboard</h1>
        </div>
        <button className="primary-btn">Analyze new location</button>
      </section>

      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="card kpi-card">
            <p>{kpi.label}</p>
            <h2>{kpi.value}</h2>
          </article>
        ))}
      </section>

      <section>
        <h2>Recently Analyzed</h2>
        <div className="site-grid">
          {sites.map((site) => (
            <article key={site.id} className="card site-card">
              <div className="site-title-row">
                <h3>{site.name}</h3>
                <RiskBadge level={site.risk} />
              </div>
              <p><strong>Region:</strong> {site.region}</p>
              <p>{site.summary}</p>
              <p className="status-line">{site.status}</p>
              <Link to={`/site/${site.id}`} className="text-link">View details →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
