import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Circle, MapContainer, Marker, Popup, Polygon, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import AssessmentAccordion from '../components/AssessmentAccordion';
import RiskBadge from '../components/RiskBadge';
import { esrsQuestions, sites } from '../data/mockData';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const summaryCards = [
  ['Overall Biodiversity Risk', 'high'],
  ['Habitat Sensitivity', 'high'],
  ['Water Dependency', 'medium'],
  ['Pollination Dependency', 'high'],
  ['Recommended Land Use Model', 'low'],
];

export default function SiteDetailPage() {
  const { siteId } = useParams();
  const site = useMemo(() => sites.find((entry) => entry.id === siteId) ?? sites[0], [siteId]);

  const assessmentItems = esrsQuestions.map(([category, question, score, shortAnswer, detailedAnswer, implications, recommendedAction], index) => ({
    id: `Q${index + 1}`,
    category,
    question,
    score,
    shortAnswer,
    detailedAnswer,
    implications,
    recommendedAction,
  }));

  const polygon = [
    [48.3228, 14.281],
    [48.3248, 14.286],
    [48.3212, 14.289],
    [48.3197, 14.284],
  ];

  return (
    <main className="page-container">
      <section className="card site-header">
        <div>
          <p className="eyebrow">Site Assessment</p>
          <h1>{site.name}</h1>
          <p><strong>Planned activity:</strong> Landwirtschaftlicher Ausbau von Apfelbäumen (Monokultur)</p>
          <p><strong>Region:</strong> Upper Austria</p>
          <p><strong>Coordinates:</strong> 48.3220, 14.2840</p>
        </div>
        <div>
          <RiskBadge level="high" />
          <p className="exec-summary">
            Executive Summary: The proposed apple monoculture expansion presents elevated biodiversity risk due to
            habitat simplification, pollinator dependency exposure, and moderate water-pressure interactions. A
            Streuobstwiese model is recommended for stronger ecological resilience.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Geospatial Context (OpenStreetMap)</h2>
        <div className="map-wrap">
          <MapContainer center={site.coordinates} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={site.coordinates} icon={markerIcon}>
              <Popup>Apfelhain Nord assessment point</Popup>
            </Marker>
            <Circle center={[48.322, 14.284]} radius={550} pathOptions={{ color: '#10b981' }} />
            <Polygon positions={polygon} pathOptions={{ color: '#047857' }} />
          </MapContainer>
        </div>
        <div className="context-tags">
          {['agricultural land', 'hedgerow', 'stream', 'settlement edge', 'protected habitat nearby'].map((label) => (
            <span key={label} className="pill">{label}</span>
          ))}
        </div>
      </section>

      <section className="summary-grid">
        {summaryCards.map(([title, level]) => (
          <article key={title} className="card">
            <h3>{title}</h3>
            {title === 'Recommended Land Use Model' ? (
              <p className="recommendation">Streuobstwiese recommended over monoculture</p>
            ) : (
              <RiskBadge level={level} />
            )}
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
        <h2>Accordion with ESRS E4 Analysis (30 Q/A)</h2>
        <AssessmentAccordion items={assessmentItems} />
      </section>
    </main>
  );
}
