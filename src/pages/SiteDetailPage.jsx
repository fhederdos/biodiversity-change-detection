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

const categoryCards = [
  'Habitat Sensitivity',
  'Biodiversity Impacts',
  'Dependencies',
  'Risk & Resilience',
  'Policies & Governance',
  'Actions & Mitigation',
  'Targets & Metrics',
];

export default function SiteDetailPage() {
  const { siteId } = useParams();
  const site = useMemo(() => sites.find((entry) => entry.id === siteId) ?? sites[0], [siteId]);

  const mapPointer = [site.coordinates[0] + 0.108, site.coordinates[1]];
  const polygon = [
    [mapPointer[0] - 0.008, mapPointer[1] - 0.008],
    [mapPointer[0] - 0.008, mapPointer[1] + 0.008],
    [mapPointer[0] + 0.008, mapPointer[1] + 0.008],
    [mapPointer[0] + 0.008, mapPointer[1] - 0.008],
  ];

  const countsByCategory = useMemo(() => assessmentQuestions.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {}), []);

  return (
    <main className="page-container site-detail-page">
      <section className="card site-header premium">
        <div>
          <p className="eyebrow">Site URL: /site/apfelhain-nord</p>
          <h1>{site.name}</h1>
          <p><strong>Region:</strong> {site.region}</p>
          <p><strong>Planned activity:</strong> Expansion of apple farming as an intensive monoculture orchard</p>
          <p><strong>Nearby context:</strong> seasonal stream approx. 180 m away, hedgerow network within 300–400 m, settlement edge within 500 m, remnant orchard-meadow elements in the wider landscape</p>
          <p><strong>Coordinates (assessment unit):</strong> 48.4526, 14.5321</p>
          <p><strong>Area:</strong> 12.4 ha</p>
        </div>
        <div className="header-right">
          <div className="overall-risk">
            <p>overallRisk</p>
            <RiskBadge level="medium" />
          </div>
          <p><strong>currentPlan:</strong> Apple Monoculture</p>
          <p><strong>recommendedAlternative:</strong> Streuobstwiese</p>
          <p className="exec-summary"><strong>executiveSummary:</strong> The current monoculture plan has elevated biodiversity and ecosystem risk because it increases habitat uniformity, depends strongly on pollination and water, and reduces ecological resilience. A Streuobstwiese is the preferred option because it supports higher structural diversity, better pollinator habitat, and stronger long-term ecosystem performance.</p>
        </div>
      </section>

      <section className="recommendation-panel card">
        <article>
          <p className="eyebrow">Current plan</p>
          <h3>Apple Monoculture</h3>
          <RiskBadge level="medium" />
        </article>
        <article>
          <p className="eyebrow">Biodiversity recommendation</p>
          <h3>Streuobstwiese</h3>
          <p>Alternative recommendation: Streuobstwiese with mixed local varieties, flowering meadow understory, hedgerow retention, lower chemical intensity</p>
        </article>
      </section>

      <section className="card map-card">
        <div className="map-wrap">
          <MapContainer center={mapPointer} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPointer} icon={markerIcon}>
              <Tooltip permanent direction="top">Apfelhain Nord pointer (+12km north)</Tooltip>
            </Marker>
            <Circle center={mapPointer} radius={550} pathOptions={{ color: '#0284c7', fillColor: '#38bdf8', fillOpacity: 0.12 }} />
            <Polygon positions={polygon} pathOptions={{ color: '#1d4ed8', fillOpacity: 0.08 }} />
            <Marker position={[mapPointer[0] - 0.0014, mapPointer[1] - 0.0022]} icon={markerIcon}><Tooltip permanent>stream corridor</Tooltip></Marker>
            <Marker position={[mapPointer[0] + 0.0026, mapPointer[1] - 0.001]} icon={markerIcon}><Tooltip permanent>hedgerow network</Tooltip></Marker>
            <Marker position={[mapPointer[0] + 0.0012, mapPointer[1] + 0.003]} icon={markerIcon}><Tooltip permanent>settlement edge</Tooltip></Marker>
            <Marker position={[mapPointer[0] - 0.0025, mapPointer[1] + 0.002]} icon={markerIcon}><Tooltip permanent>agricultural matrix</Tooltip></Marker>
          </MapContainer>
        </div>
        <div className="context-tags">
          {['stream corridor', 'hedgerow network', 'settlement edge', 'agricultural matrix'].map((label) => (
            <span key={label} className="pill">{label}</span>
          ))}
        </div>
      </section>

      <section className="summary-grid">
        {categoryCards.map((title) => (
          <article key={title} className="card category-card">
            <h3>{title}</h3>
            <p>{countsByCategory[title] ?? 0} items</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>SCORING LEGEND</h2>
        <div className="legend-row">
          {['high', 'medium', 'low', 'unanswered'].map((status) => <RiskBadge key={status} level={status} />)}
        </div>
      </section>

      <section className="card">
        <h2>Assessment detail</h2>
        <AssessmentAccordion items={assessmentQuestions} />
      </section>
    </main>
  );
}
