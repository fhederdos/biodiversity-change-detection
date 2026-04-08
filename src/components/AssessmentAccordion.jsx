import { useMemo, useState } from 'react';
import RiskBadge from './RiskBadge';

const scoreFilters = ['all', 'high', 'medium', 'low', 'unanswered'];

export default function AssessmentAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id);
  const [activeScore, setActiveScore] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(
    () => ['all', ...new Set(items.map((item) => item.category))],
    [items],
  );

  const filteredItems = useMemo(
    () => items.filter((item) => (activeScore === 'all' || item.score === activeScore)
      && (activeCategory === 'all' || item.category === activeCategory)),
    [items, activeScore, activeCategory],
  );

  return (
    <div className="accordion-shell">
      <div className="accordion-filters">
        <div className="score-filters">
          {scoreFilters.map((status) => (
            <button
              key={status}
              className={`filter-chip ${activeScore === status ? 'active' : ''}`}
              onClick={() => setActiveScore(status)}
            >
              {status === 'all' ? 'All' : status[0].toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        <label className="category-filter">
          Category filter
          <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All categories' : category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="accordion-list">
        {filteredItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article key={item.id} className="accordion-item">
              <button className="accordion-trigger" onClick={() => setOpenId(isOpen ? null : item.id)}>
                <div>
                  <p className="item-category">{item.category}</p>
                  <h4>{item.question}</h4>
                </div>
                <RiskBadge level={item.score} />
              </button>
              {isOpen && (
                <div className="accordion-content">
                  <p><strong>shortAnswer:</strong> {item.shortAnswer}</p>
                  <p><strong>detailedAnswer:</strong> {item.detailedAnswer}</p>
                  <p><strong>recommendedAction:</strong> {item.recommendedAction}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
