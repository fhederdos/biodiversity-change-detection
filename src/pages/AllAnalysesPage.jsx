import { Link } from 'react-router-dom';
import RiskBadge from '../components/RiskBadge';
import { sites } from '../data/mockData';

export default function AllAnalysesPage() {
  return (
    <main className="page-container page-with-header analyses-page">
      <section className="section-header">
        <div>
          <p className="eyebrow">Analysis inventory</p>
          <h1>All analyses</h1>
          <p className="section-copy">Overview of all biodiversity assessments currently available in the demo workspace.</p>
        </div>
        <Link to="/dashboard" className="ghost-btn back-link-btn">Back to dashboard</Link>
      </section>

      <section className="site-grid">
        {sites.map((site) => (
          <article key={site.id} className="card site-card analysis-card">
            <div className="site-title-row">
              <h3>{site.name}</h3>
              <RiskBadge level={site.risk} />
            </div>
            <div className="site-card-body">
              <p><strong>Region:</strong> {site.region}</p>
              <p>{site.summary}</p>
              <p className="status-line">{site.status}</p>
            </div>
            <Link to={`/site/${site.id}`} className="text-link">View details →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
