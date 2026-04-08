const classByRisk = {
  high: 'badge high',
  medium: 'badge medium',
  low: 'badge low',
  unanswered: 'badge unanswered',
};

export default function RiskBadge({ level }) {
  return <span className={classByRisk[level] ?? classByRisk.unanswered}>{level}</span>;
}
