import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Circle, MapContainer, Marker, Polygon, TileLayer, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import AssessmentAccordion from '../components/AssessmentAccordion';
import RiskBadge from '../components/RiskBadge';
import { assessmentQuestions, sites } from '../data/mockData';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const summaryCategories = [
  'Habitat Sensitivity',
  'Biodiversity Impacts',
  'Dependencies',
  'Risk & Resilience',
  'Policies & Governance',
  'Actions & Mitigation',
  'Targets & Metrics',
];

const polygon = [
  [48.3228, 14.281],
  [48.3248, 14.286],
  [48.3212, 14.289],
  [48.3197, 14.284],
];

export default function SiteDetailPage() {
  const { siteId } = useParams();
  const site = useMemo(() => sites.find((entry) => entry.id === siteId) ?? sites[0], [siteId]);

  return (
    <main className="page-container">
      <section className="card site-header premium-header">
        <div>
          <p className="eyebrow">Site Assessment</p>
          <h1>{site.name}</h1>
          <p><strong>Site URL:</strong> /site/apfelhain-nord</p>
          <p><strong>Region:</strong> {site.region}</p>
          <p><strong>Planned activity:</strong> {site.plannedActivity}</p>
          <p><strong>Area:</strong> {site.areaHa} ha</p>
          <p><strong>Nearby context:</strong> {site.nearbyContext}</p>
        </div>
        <div className="hero-risk-panel">
          <p className="overline">overallRisk</p>
          <RiskBadge level={site.overallRisk} />
          <p><strong>currentPlan:</strong> {site.currentPlan}</p>
          <p><strong>recommendedAlternative:</strong> {site.recommendedAlternative}</p>
          <p className="exec-summary"><strong>executiveSummary:</strong> {site.executiveSummary}</p>
        </div>
      </section>

      <section className="card recommendation-compare">
        <h2>Recommendation Panel</h2>
        <div className="compare-grid">
          <article className="compare-card current">
            <h3>Current plan</h3>
            <p>{site.currentPlan}</p>
            <RiskBadge level="medium" />
          </article>
          <article className="compare-card recommended">
            <h3>biodiversity recommendation</h3>
            <p>{site.recommendedAlternative}</p>
            <span className="premium-pill">Lower-risk option</span>
          </article>
        </div>
        <p><strong>Alternative recommendation:</strong> {site.alternativeRecommendation}</p>
      </section>

      <section className="card map-card">
        <div className="map-wrap premium-map">
          <MapContainer center={site.coordinates} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={site.coordinates} icon={markerIcon} />
            <Circle center={[48.322, 14.284]} radius={550} pathOptions={{ color: '#10b981', dashArray: '6 4' }} />
            <Polygon positions={polygon} pathOptions={{ color: '#047857', fillOpacity: 0.2 }} />
            <Marker position={[48.3234, 14.2804]} icon={markerIcon}><Tooltip permanent>stream corridor</Tooltip></Marker>
            <Marker position={[48.3242, 14.288]} icon={markerIcon}><Tooltip permanent>hedgerow network</Tooltip></Marker>
            <Marker position={[48.3204, 14.2875]} icon={markerIcon}><Tooltip permanent>settlement edge</Tooltip></Marker>
            <Marker position={[48.3219, 14.2832]} icon={markerIcon}><Tooltip permanent>agricultural matrix</Tooltip></Marker>
          </MapContainer>
        </div>
        <div className="context-tags">
          {['stream corridor', 'hedgerow network', 'settlement edge', 'agricultural matrix'].map((label) => (
            <span key={label} className="pill">{label}</span>
          ))}
        </div>
      </section>

      <section className="summary-grid">
        {summaryCategories.map((title) => (
          <article key={title} className="card category-card">
            <h3>{title}</h3>
            <RiskBadge level={title === 'Targets & Metrics' || title === 'Habitat Sensitivity' ? 'high' : 'medium'} />
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Risk Scoring Legend</h2>
        <div className="legend-row">
          {['high', 'medium', 'low', 'unanswered'].map((status) => <RiskBadge key={status} level={status} />)}
        </div>
      </section>

      <section className="card">
        <h2>Assessment Detail</h2>
        <AssessmentAccordion items={assessmentQuestions} />
      </section>
    </main>
  );
}
