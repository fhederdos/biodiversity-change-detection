import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Geospatial Screening',
    description: 'Overlay planned land-use changes with ecosystem context, proximity indicators, and sensitivity zones.',
  },
  {
    title: 'Biodiversity Risk Scoring',
    description: 'Translate site observations into clear high / medium / low / unanswered risk statuses.',
  },
  {
    title: 'ESRS E4 Documentation Support',
    description: 'Keep question-by-question traceability for biodiversity and ecosystems disclosures.',
  },
];

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Geo Spatial Biodiversity Change Detection</h1>
          <p>
            Premium biodiversity intelligence for planned agricultural transformation. Combine geospatial signals,
            ecosystem context, and ESRS E4-aligned assessment workflows into one elegant review experience.
          </p>
          <Link to="/login" className="primary-btn">
            Go to Login
          </Link>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
