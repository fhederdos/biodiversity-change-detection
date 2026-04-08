import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Geospatial Screening',
    text: 'Visualize land-use change risk across agricultural sites with contextual biodiversity layers.',
  },
  {
    title: 'Biodiversity Risk Scoring',
    text: 'Evaluate high, medium, low, and unanswered exposures using transparent assessment logic.',
  },
  {
    title: 'ESRS E4 Documentation Support',
    text: 'Structure evidence and narrative outputs for sustainability reporting and internal governance.',
  },
];

export default function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <p className="eyebrow">Biodiversity Intelligence Platform</p>
          <h1>Geo Spatial Biodiversity Change Detection</h1>
          <p>
            A modern ESG and geospatial prototype for screening agricultural expansion, identifying biodiversity
            pressure points, and preparing ESRS E4-aligned evidence.
          </p>
          <Link to="/login" className="primary-btn">Go to Login</Link>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
