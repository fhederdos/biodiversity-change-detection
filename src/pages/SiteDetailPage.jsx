import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import Badge from '../components/Badge';
import AccordionItem from '../components/AccordionItem';
import { assessmentQuestions, siteDetail, summaryCards } from '../data/mockData';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function SiteDetailPage() {
  return (
    <div className="detail-page">
      <section className="detail-header card">
        <div>
          <h2>{siteDetail.name}</h2>
          <p>
            <strong>Region:</strong> {siteDetail.region}
          </p>
          <p>
            <strong>Coordinates:</strong> {siteDetail.coordinates}
          </p>
          <p>
            <strong>Planned activity:</strong> {siteDetail.activity}
          </p>
        </div>
        <div>
          <h4>Overall risk</h4>
          <Badge value={siteDetail.overallRisk} />
        </div>
        <p>{siteDetail.executiveSummary}</p>
      </section>

      <section className="map-card card">
        <h3>Site Context Map (OpenStreetMap)</h3>
        <MapContainer center={[siteDetail.lat, siteDetail.lng]} zoom={13} scrollWheelZoom className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[siteDetail.lat, siteDetail.lng]} icon={customIcon}>
            <Popup>{siteDetail.name}</Popup>
          </Marker>
          <Circle center={[siteDetail.lat, siteDetail.lng]} radius={700} pathOptions={{ color: '#10b981', fillOpacity: 0.15 }} />
        </MapContainer>
        <ul className="context-labels">
          {siteDetail.contextLabels.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </section>

      <section className="summary-grid">
        {summaryCards.map((card) => (
          <article className="summary-card card" key={card.label}>
            <p>{card.label}</p>
            {['high', 'medium', 'low', 'unanswered'].includes(card.value) ? (
              <Badge value={card.value} />
            ) : (
              <h4>{card.value}</h4>
            )}
          </article>
        ))}
      </section>

      <section className="card">
        <h3>Risk Scoring Legend</h3>
        <div className="legend-row">
          {['high', 'medium', 'low', 'unanswered'].map((status) => (
            <Badge key={status} value={status} />
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Accordion with ESRS E4 Analysis (30 Question / Answers)</h3>
        <p className="muted">
          All answers below are mocked for the planned monoculture apple expansion and benchmarked against a
          Streuobstwiese-oriented alternative.
        </p>
        <div className="accordion-list">
          {assessmentQuestions.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
