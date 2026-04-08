import { useState } from 'react';
import RiskBadge from './RiskBadge';

export default function AssessmentAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id);

  return (
    <div className="accordion-list">
      {items.map((item) => {
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
                <p><strong>Summary:</strong> {item.shortAnswer}</p>
                <p><strong>Detailed Answer:</strong> {item.detailedAnswer}</p>
                <p><strong>Implications:</strong> {item.implications}</p>
                <p><strong>Recommended Action:</strong> {item.recommendedAction}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
