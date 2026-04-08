import { useMemo, useState } from 'react';
import RiskBadge from './RiskBadge';

const scoreFilters = ['all', 'high', 'medium', 'low', 'unanswered'];

export default function AssessmentAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id);
  const [scoreFilter, setScoreFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(
    () => ['all', ...new Set(items.map((item) => item.category))],
    [items],
  );

  const filteredItems = useMemo(
    () => items.filter((item) => (scoreFilter === 'all' || item.score === scoreFilter)
      && (categoryFilter === 'all' || item.category === categoryFilter)),
    [items, scoreFilter, categoryFilter],
  );

  return (
    <div>
      <div className="accordion-filters">
        {scoreFilters.map((filter) => (
          <button
            key={filter}
            className={`filter-chip ${scoreFilter === filter ? 'active' : ''}`}
            onClick={() => setScoreFilter(filter)}
          >
            {filter === 'all' ? 'All' : filter[0].toUpperCase() + filter.slice(1)}
          </button>
        ))}
        <select
          className="category-select"
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'Category filter' : category}
            </option>
          ))}
        </select>
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
                  <p><strong>Short answer:</strong> {item.shortAnswer}</p>
                  <p><strong>Detailed answer:</strong> {item.detailedAnswer}</p>
                  <p><strong>Recommended action:</strong> {item.recommendedAction}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
