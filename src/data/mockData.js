export const sites = [
  {
    id: 'apfelhain-nord',
    name: 'Apfelhain Nord',
    region: 'Upper Austria',
    risk: 'high',
    status: 'Monoculture expansion needs redesign before approval.',
    summary: 'Planned apple monoculture near mixed agricultural edge with habitat interfaces.',
    coordinates: [48.322, 14.284],
  },
  {
    id: 'muehlviertel',
    name: 'Ausbaugebiet Mühlviertel',
    region: 'Upper Austria',
    risk: 'medium',
    status: 'Additional habitat buffers requested by assessor.',
    summary: 'Expansion in existing mixed-use area with moderate biodiversity sensitivity.',
    coordinates: [48.59, 14.52],
  },
  {
    id: 'traunfeld',
    name: 'Anlage Traunfeld',
    region: 'Upper Austria',
    risk: 'low',
    status: 'Low sensitivity area; proceeding with monitoring conditions.',
    summary: 'Site mostly in previously intensified cropland.',
    coordinates: [48.229, 14.233],
  },
  {
    id: 'suedhang',
    name: 'Bestandsfläche Südhang',
    region: 'Styria',
    risk: 'medium',
    status: 'Slope erosion and water runoff controls under review.',
    summary: 'Topography increases resilience and soil management requirements.',
    coordinates: [47.079, 15.438],
  },
  {
    id: 'streuobst-pilot',
    name: 'Pilotfläche Streuobst',
    region: 'Lower Austria',
    risk: 'low',
    status: 'Pilot showcases biodiversity-friendly orchard design.',
    summary: 'Diversified orchard with flowering strips and habitat corridors.',
    coordinates: [48.208, 15.624],
  },
];

const baseRecommendation = 'Transition from monoculture rows to a Streuobstwiese model with mixed age trees, meadow understory, and habitat corridors.';

export const esrsQuestions = [
  ['Site & Sensitivity', 'Is the activity located near sensitive biodiversity features?', 'high', 'The site borders hedgerow and stream-adjacent habitat.', 'Mapping indicates immediate proximity to semi-natural edges used by birds and invertebrates. Expanding monoculture rows would reduce transition zones and increase edge disturbance.', 'Higher likelihood of habitat fragmentation and species displacement at the site boundary.', 'Define a no-conversion buffer and keep structural habitat elements intact.'],
  ['Site & Sensitivity', 'Does baseline habitat mapping show structural diversity?', 'medium', 'Current landscape has moderate structural diversity that monoculture would simplify.', 'The pre-project area includes mixed grass strips, scattered trees, and hedgerow segments. Monoculture conversion would remove part of this mosaic and lower niche availability.', 'Reduced ecological heterogeneity weakens adaptive capacity for local species.', baseRecommendation],
  ['Site & Sensitivity', 'Are protected or priority habitats present nearby?', 'medium', 'A protected habitat is noted nearby in regional screening data.', 'No direct encroachment is planned, but intensified management and spray drift from monoculture could affect ecological quality at the margin.', 'Potential regulatory scrutiny and reputational exposure if indirect effects are unmanaged.', 'Implement drift mitigation and increase setback distances toward the protected patch.'],
  ['Site & Sensitivity', 'Has seasonal biodiversity sensitivity been assessed?', 'unanswered', 'Seasonal survey data has not yet been completed.', 'The current dossier lacks spring and early summer field verification for nesting, pollinators, and ephemeral flora.', 'Uncertainty elevates decision risk and may understate impacts.', 'Complete a seasonal survey campaign before final land-use approval.'],

  ['Biodiversity Impacts', 'Will the activity reduce habitat diversity compared with current land use?', 'high', 'Yes, monoculture design reduces habitat variability.', 'Replacing mixed cover with uniform apple rows and managed bare strips decreases vertical and horizontal structure available to fauna.', 'Long-term biodiversity decline and reduced ecological resilience are probable.', baseRecommendation],
  ['Biodiversity Impacts', 'Is there a risk of pollinator community simplification?', 'high', 'Pollinator diversity is likely to decline under monoculture management.', 'Bloom periods become concentrated and understory flora is often suppressed, limiting nectar continuity and nesting opportunities.', 'Pollination service stability may deteriorate over time.', 'Maintain diverse flowering understory and hedgerow continuity across the site.'],
  ['Biodiversity Impacts', 'Could the project increase pressure from agrochemical use?', 'medium', 'Monoculture systems often require tighter pest control regimes.', 'Uniform crop stands can amplify pest cycles and trigger more frequent interventions, increasing pressure on non-target species.', 'Potential impairment of soil biota and nearby aquatic communities.', 'Apply integrated pest management with reduced-input thresholds and monitoring triggers.'],
  ['Biodiversity Impacts', 'Does the plan include habitat connectivity measures?', 'low', 'A draft corridor strip is included but not fully specified.', 'The current concept includes two cross-site meadow strips. Final dimensions and maintenance protocols remain to be formalized.', 'Connectivity benefits are possible if implemented rigorously.', 'Set minimum corridor widths and long-term mowing protocols in the management plan.'],

  ['Dependencies', 'How dependent is the activity on healthy pollination services?', 'high', 'Apple production is strongly pollination-dependent.', 'Yield quality and consistency rely on robust pollinator abundance and species diversity, which monoculture design can undermine.', 'Business performance is exposed to biodiversity degradation risks.', 'Use pollinator-supportive design as a core production strategy rather than optional mitigation.'],
  ['Dependencies', 'How dependent is the activity on soil ecosystem functions?', 'high', 'Soil function dependency is high for orchard productivity.', 'Soil organisms drive nutrient cycling, water infiltration, and root health. Intensive uniform cultivation can reduce biological complexity.', 'Declining soil function can increase input costs and climate sensitivity.', 'Increase organic ground cover and reduce soil disturbance frequency.'],
  ['Dependencies', 'Is water availability a critical dependency for the site?', 'medium', 'Irrigation dependency is moderate and may increase in dry years.', 'Projected climate variability for Upper Austria suggests higher summer moisture stress risk for monoculture blocks.', 'Water stress can intensify production volatility and ecosystem pressure.', 'Adopt mixed canopy and ground vegetation to improve moisture retention.'],
  ['Dependencies', 'Does the site rely on surrounding ecological infrastructure?', 'medium', 'Yes, surrounding hedgerows and semi-natural areas support ecosystem services.', 'Adjacent habitat contributes natural pest control, pollinator spillover, and microclimate moderation.', 'Removing interfaces weakens service flows into the production area.', 'Preserve and widen ecological edges instead of maximizing planted row area.'],

  ['Risk & Resilience', 'Is monoculture increasing ecological vulnerability to pests and disease?', 'high', 'Yes, biological uniformity increases vulnerability.', 'Large single-species blocks create favorable conditions for rapid pest spread and synchronized stress response.', 'Higher crop protection costs and disturbance to non-target species likely.', 'Introduce varietal diversity and patch-based orchard structuring.'],
  ['Risk & Resilience', 'How resilient is the proposed design to climate variability?', 'medium', 'Current design has moderate-to-low resilience.', 'Limited structural diversity reduces buffering capacity against drought, heat, and extreme rainfall events.', 'Climate-driven yield volatility may increase over time.', baseRecommendation],
  ['Risk & Resilience', 'Are flood and runoff pathways adequately considered?', 'medium', 'Runoff controls are partially addressed.', 'The plan includes drainage lines but lacks fully vegetated infiltration margins near the stream corridor.', 'Sediment and nutrient transfer risk remains material.', 'Add permanent vegetated strips and contour-based runoff controls.'],
  ['Risk & Resilience', 'Is long-term biodiversity monitoring integrated into risk management?', 'low', 'A monitoring framework is included at a basic level.', 'Annual indicator tracking is proposed, but taxonomic coverage is narrow and should be expanded.', 'Risk signals may be detected late if indicator set remains minimal.', 'Extend monitoring to pollinators, birds, and soil biological indicators.'],

  ['Policies', 'Is there an explicit biodiversity policy aligned with ESRS E4?', 'medium', 'Policy exists but operational detail is limited.', 'The company policy references biodiversity protection, yet implementation standards for orchard conversion are not specific enough.', 'Policy-to-practice gap can reduce audit confidence.', 'Define conversion criteria that prioritize no-net-loss design principles.'],
  ['Policies', 'Are no-go areas and buffers formally codified?', 'medium', 'Some constraints are defined but not comprehensive.', 'Draft documents mark stream offsets and settlement boundaries, but hedgerow safeguards are not clearly mandatory.', 'Inconsistent implementation risk across projects.', 'Formalize mandatory biodiversity buffer templates for site planning.'],
  ['Policies', 'Do procurement standards support biodiversity-positive inputs?', 'unanswered', 'Supplier biodiversity criteria are not documented.', 'No verified evidence was provided that nurseries and input suppliers are screened for biodiversity-related performance.', 'Upstream risk may undermine site-level commitments.', 'Introduce procurement due diligence clauses linked to biodiversity standards.'],
  ['Policies', 'Is governance accountability assigned for biodiversity outcomes?', 'low', 'Responsibility is assigned to the environmental risk manager.', 'Role ownership is clearly named, with escalation paths to site management and sustainability leadership.', 'Governance baseline is positive if performance metrics are enforced.', 'Tie managerial incentives to biodiversity KPIs and mitigation milestones.'],

  ['Actions & Mitigation', 'Does the project evaluate alternatives to monoculture expansion?', 'high', 'Alternative analysis indicates Streuobstwiese is ecologically stronger.', 'Scenario comparison shows diversified orchard systems retain higher habitat value and ecosystem-function stability.', 'Proceeding with monoculture would represent a weaker risk posture.', 'Adopt Streuobstwiese as the preferred land-use model.'],
  ['Actions & Mitigation', 'Are mitigation actions specific, measurable, and time-bound?', 'medium', 'Partially; some actions lack completion milestones.', 'The plan lists buffer strips and flowering zones but not all actions include measurable thresholds or delivery dates.', 'Mitigation execution quality may vary and reduce effectiveness.', 'Add SMART milestones with yearly compliance checks.'],
  ['Actions & Mitigation', 'Is restoration included for areas already degraded?', 'low', 'Yes, targeted restoration strips are proposed.', 'The concept includes reinstating meadow habitat at plot margins and along access tracks.', 'Restoration can partially offset historical simplification if maintained.', 'Set 5-year ecological maintenance commitments with annual review.'],
  ['Actions & Mitigation', 'Is cumulative impact with nearby farms considered?', 'unanswered', 'Cumulative assessment has not been finalized.', 'No aggregated landscape model was presented to evaluate combined impacts of neighboring agricultural intensification.', 'Total ecosystem pressure could be materially underestimated.', 'Conduct landscape-level cumulative assessment before final decision.'],

  ['Targets & Metrics', 'Are biodiversity targets quantified for this site?', 'medium', 'Targets exist but are not yet ambitious.', 'Current targets focus on minimum compliance indicators rather than net improvement in habitat quality.', 'Limited target ambition may fail to offset monoculture pressures.', 'Increase target thresholds for habitat extent and species indicator recovery.'],
  ['Targets & Metrics', 'Are indicators linked to decision thresholds?', 'low', 'Most indicators are tied to action triggers.', 'Pollinator counts, buffer integrity, and soil cover metrics are mapped to management responses.', 'Decision-ready metrics improve adaptive management reliability.', 'Keep threshold logic and audit trail in the monitoring dashboard.'],
  ['Targets & Metrics', 'Is there a timeline for demonstrating biodiversity improvement?', 'medium', 'A 3-year timeline is defined with annual checkpoints.', 'The timeframe is credible for early trend detection but may be short for some ecological responses.', 'Short horizons can miss slower ecosystem recovery signals.', 'Maintain long-term tracking beyond year three.'],
  ['Targets & Metrics', 'Is disclosure readiness aligned with ESRS E4 reporting needs?', 'low', 'Documentation structure is largely aligned with ESRS categories.', 'The dataset captures site context, impacts, dependencies, and actions in a format suitable for sustainability reporting.', 'Reporting readiness is good, provided unanswered items are completed.', 'Close unanswered items and attach verification evidence before disclosure.'],
  ['Targets & Metrics', 'Does the recommended land-use model support long-term resilience?', 'low', 'Yes, Streuobstwiese offers stronger resilience than monoculture.', 'Diversified orchard-meadow systems provide multiple habitats, improve ecological redundancy, and stabilize ecosystem services.', 'Resilience benefits improve both biodiversity outcomes and operational continuity.', 'Transition implementation plan to Streuobstwiese with phased conversion.'],
  ['Biodiversity Impacts', 'Could monoculture expansion affect nearby stream ecological quality?', 'medium', 'There is moderate risk via runoff and input pathways.', 'Without robust vegetated buffers, nutrients and residues may enter drainage routes connected to the local stream corridor.', 'Aquatic habitat quality and downstream compliance may be affected.', 'Install riparian buffers and monitor water quality indicators quarterly.'],
];
