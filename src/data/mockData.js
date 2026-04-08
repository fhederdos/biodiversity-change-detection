export const users = [{ username: 'admin', password: 'password' }];

export const dashboardKPIs = [
  { label: 'Sites analyzed', value: 21 },
  { label: 'Hazards found', value: 2 },
  { label: 'Recently changed sites', value: 5 },
  { label: 'New location pending review', value: 1 },
];

export const sites = [
  {
    id: 'apfelhain-nord',
    name: 'Apfelhain Nord',
    region: 'Upper Austria',
    risk: 'high',
    status: 'Monoculture expansion plan requires mitigation adjustments',
    summary:
      'Planned monoculture apple expansion raises habitat simplification and pollinator pressure concerns.',
  },
  {
    id: 'ausbaugebiet-muehlviertel',
    name: 'Ausbaugebiet Mühlviertel',
    region: 'Mühlviertel, Austria',
    risk: 'medium',
    status: 'Landscape transition area with moderate ecosystem sensitivity',
    summary: 'Edge habitat partially retained; dependency on nearby stream remains relevant.',
  },
  {
    id: 'anlage-traunfeld',
    name: 'Anlage Traunfeld',
    region: 'Traunfeld, Austria',
    risk: 'low',
    status: 'Legacy mixed-use site with stable biodiversity indicators',
    summary: 'Diversified orchard strips and grass margins reduce immediate pressure.',
  },
  {
    id: 'bestandsflaeche-suedhang',
    name: 'Bestandsfläche Südhang',
    region: 'South Slope, Austria',
    risk: 'medium',
    status: 'Slope management and soil retention controls under review',
    summary: 'Erosion sensitivity observed under intensive planting scenarios.',
  },
  {
    id: 'pilotflaeche-streuobst',
    name: 'Pilotfläche Streuobst',
    region: 'Upper Austria',
    risk: 'low',
    status: 'Streuobstwiese pilot demonstrates resilient habitat structure',
    summary: 'Diverse canopy layers support pollinators and ecosystem stability.',
  },
];

export const siteDetail = {
  name: 'Apfelhain Nord',
  region: 'Upper Austria',
  coordinates: '48.2875, 14.2551',
  lat: 48.2875,
  lng: 14.2551,
  activity: 'Landwirtschaftlicher Ausbau von Apfelbäumen (Monokultur)',
  overallRisk: 'high',
  executiveSummary:
    'The planned apple monoculture expansion can deliver production efficiency but introduces elevated biodiversity risk versus a Streuobstwiese model. Key concerns include lower habitat heterogeneity, stronger pollinator dependency concentration, and higher ecological sensitivity around nearby hedgerow and stream-adjacent habitats.',
  contextLabels: [
    'Agricultural land (existing)',
    'Hedgerow corridor (west)',
    'Small stream (south-east)',
    'Settlement edge (north)',
    'Protected habitat nearby (fictional demo note)',
  ],
};

export const summaryCards = [
  { label: 'Overall Biodiversity Risk', value: 'high' },
  { label: 'Habitat Sensitivity', value: 'high' },
  { label: 'Water Dependency', value: 'medium' },
  { label: 'Pollination Dependency', value: 'high' },
  { label: 'Recommended Land Use Model', value: 'Streuobstwiese recommended over monoculture' },
];

const categories = [
  'Site & Sensitivity',
  'Biodiversity Impacts',
  'Dependencies',
  'Risk & Resilience',
  'Policies',
  'Actions & Mitigation',
  'Targets & Metrics',
];

const questionTemplates = [
  'Does the planned activity overlap ecologically sensitive landscape features?',
  'How does the planned apple monoculture affect habitat diversity?',
  'What is the expected impact on pollinator abundance and variety?',
  'How exposed is the site to water stress under intensified cultivation?',
  'Are there existing biodiversity policies applied to this expansion project?',
  'What mitigation actions are defined for habitat and species protection?',
  'Are measurable biodiversity targets and tracking metrics in place?',
  'How does soil health resilience compare between monoculture and Streuobstwiese?',
  'Does the project design maintain ecological corridors and edge structures?',
  'Is long-term ecosystem resilience addressed in the land-use model?',
];

const scoreCycle = ['high', 'medium', 'low', 'unanswered'];

export const assessmentQuestions = Array.from({ length: 30 }, (_, idx) => {
  const qNum = idx + 1;
  const category = categories[idx % categories.length];
  const question = questionTemplates[idx % questionTemplates.length];
  const score = scoreCycle[idx % scoreCycle.length];

  return {
    id: `E4-${String(qNum).padStart(2, '0')}`,
    category,
    question,
    score,
    shortAnswer:
      score === 'unanswered'
        ? 'Assessment input pending from field validation.'
        : 'Current review indicates monoculture creates higher ecological pressure than a Streuobstwiese alternative.',
    detailedAnswer:
      score === 'unanswered'
        ? 'No validated evidence has been entered for this item. The planned monoculture scenario should be assessed against baseline biodiversity observations before sign-off.'
        : 'For the proposed apple monoculture expansion, projected biodiversity outcomes are less favorable than a Streuobstwiese design. Reduced structural diversity limits nesting and foraging niches, and ecological functions become more concentrated and vulnerable to disturbances.',
    implications:
      score === 'high'
        ? 'High potential for biodiversity degradation if no redesign is implemented.'
        : score === 'medium'
          ? 'Moderate biodiversity pressure requiring targeted mitigation.'
          : score === 'low'
            ? 'Limited pressure observed under current assumptions.'
            : 'Decision confidence remains low until evidence is provided.',
    recommendedAction:
      score === 'unanswered'
        ? 'Collect baseline species and habitat data, then complete scoring.'
        : 'Integrate mixed-structure orchard zones, retain hedgerows, and prioritize a Streuobstwiese layout where feasible.',
  };
});
