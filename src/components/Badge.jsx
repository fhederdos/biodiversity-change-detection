const labelClass = {
  high: 'badge badge-high',
  medium: 'badge badge-medium',
  low: 'badge badge-low',
  unanswered: 'badge badge-unanswered',
};

export default function Badge({ value }) {
  return <span className={labelClass[value] || 'badge'}>{value}</span>;
}
