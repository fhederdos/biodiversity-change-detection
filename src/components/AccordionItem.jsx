import { useState } from 'react';
import Badge from './Badge';

export default function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="accordion-item">
      <button className="accordion-header" onClick={() => setOpen((v) => !v)}>
        <div>
          <p className="item-id">{item.id}</p>
          <h4>{item.question}</h4>
        </div>
        <div className="item-right">
          <Badge value={item.score} />
          <span className="chevron">{open ? '−' : '+'}</span>
        </div>
      </button>
      {open && (
        <div className="accordion-content">
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Summary:</strong> {item.shortAnswer}
          </p>
          <p>
            <strong>Detailed answer:</strong> {item.detailedAnswer}
          </p>
          <p>
            <strong>Implications:</strong> {item.implications}
          </p>
          <p>
            <strong>Recommended next step:</strong> {item.recommendedAction}
          </p>
        </div>
      )}
    </article>
  );
}
