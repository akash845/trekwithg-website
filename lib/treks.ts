export type TrekGrade = 'grade-easy' | 'grade-mod' | 'grade-hard';

export interface TrekStat {
  value: string;
  label: string;
}

export interface ItineraryStep {
  day: string;
  title: string;
  body: string;
}

export interface Trek {
  slug: string;
  title: string;
  region: string;
  lat?: number;
  lng?: number;
  grade: TrekGrade;
  gradeLabel: string;
  image: string;
  imageAlt: string;
  images: string[];
  distanceKm?: string;
  cardStats: TrekStat[];
  detailStats: TrekStat[];
  desc: string;
  note: string;
  itineraryHeading?: string;
  itineraryEyebrow?: string;
  itineraryNote?: string;
  itinerary: ItineraryStep[];
  durationDays?: number;
  maxAltitudeM?: number;
  season?: string;
  batchDates?: string[];
  included?: string[];
  excluded?: string[];
}

const DEFAULT_INCLUDED = [
  'Camping & stay through the trek',
  'All meals from Day 1 dinner to the last breakfast',
  'Trek permits & forest fees',
  'Experienced trek leader & support crew',
  'First-aid kit & daily oximeter checks',
];

const DEFAULT_EXCLUDED = [
  'Transport to/from the base village',
  'Personal trekking gear (rentable on request)',
  'Travel insurance',
  'Anything outside the day-by-day itinerary',
];

export const TREKS: Record<string, Trek> = {
  kedarkantha: {
    slug: 'kedarkantha',
    title: 'Kedarkantha',
    region: 'Uttarakhand · Govind Wildlife Sanctuary',
    lat: 31.05,
    lng: 78.25,
    grade: 'grade-easy',
    gradeLabel: 'Easy – Moderate',
    image: 'images/kedarkantha-region.jpg',
    imageAlt: 'Snow-covered Himalayan valley near Sankri, the Kedarkantha trailhead',
    images: [
      'images/kedarkantha-region.jpg',
      'images/kedarkantha-harkidun.jpg',
      'images/kedarkantha-supin-valley.jpg',
    ],
    distanceKm: '~20 km',
    cardStats: [
      { value: '3800m', label: 'Summit alt.' },
      { value: '5D / 4N', label: 'Duration' },
      { value: 'Dec–Apr', label: 'Season' },
    ],
    detailStats: [
      { value: '3800m', label: 'Summit alt.' },
      { value: '5D / 4N', label: 'Duration' },
      { value: 'Dec–Apr', label: 'Season' },
    ],
    desc: 'A snow-guaranteed winter summit and the most reliable first Himalayan trek we run — forest camps, a frozen lake at Juda Ka Talab, then a ridge walk to a 360° summit.',
    note: 'Next batch forming · DM @trekwith_g',
    durationDays: 5,
    maxAltitudeM: 3800,
    season: 'Dec–Apr',
    batchDates: ['Dec 12–16, 2026', 'Jan 9–13, 2027', 'Feb 13–17, 2027'],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      { day: 'Day 1', title: 'Sankri → Juda Ka Talab', body: 'A steady 4 km climb out of Sankri through oak and pine forest to a frozen lake campsite at roughly 3,350m.' },
      { day: 'Day 2', title: 'Juda Ka Talab → Kedarkantha Base', body: 'A short, deliberately easy 4 km day so the group acclimatizes before the summit push. Camp sits right at the treeline with the first clear view of the summit ridge.' },
      { day: 'Day 3', title: 'Base → Summit (3,800m) → Hargaon', body: 'Pre-dawn start for the ridge walk and 360° summit, then a long ~10 km descent to a lower, warmer camp the same day.' },
      { day: 'Day 4', title: 'Hargaon → Sankri', body: 'Easy 6 km descent back through forest to the roadhead.' },
      { day: 'Day 5', title: 'Buffer day', body: 'Held in reserve for weather or pace — used for the drive back to Dehradun if the trail runs on schedule.' },
    ],
  },
  'hampta-pass': {
    slug: 'hampta-pass',
    title: 'Hampta Pass',
    region: 'Himachal Pradesh · Kullu–Lahaul crossing',
    lat: 32.24,
    lng: 77.28,
    grade: 'grade-mod',
    gradeLabel: 'Moderate',
    image: 'images/hampta-pass.jpg',
    imageAlt: 'Hampta Pass ridgeline, Himachal Pradesh',
    images: [
      'images/hampta-pass.jpg',
      'images/hampta-shepherd.jpg',
      'images/hampta-chandratal.jpg',
    ],
    distanceKm: '~26 km',
    cardStats: [
      { value: '4287m', label: 'Pass alt.' },
      { value: '5D / 4N', label: 'Duration' },
      { value: 'Jun–Oct', label: 'Season' },
    ],
    detailStats: [
      { value: '4287m', label: 'Pass alt.' },
      { value: '5D / 4N', label: 'Duration' },
      { value: 'Jun–Oct', label: 'Season' },
    ],
    desc: 'Crosses from pine-forest Kullu into the stark brown Lahaul valley in one pass — the most dramatic landscape shift of any short trek we lead. Often paired with a Chandratal add-on.',
    note: 'Next batch forming · DM @trekwith_g',
    durationDays: 5,
    maxAltitudeM: 4287,
    season: 'Jun–Oct',
    batchDates: ['Sep 25–29, 2026', 'Oct 9–13, 2026'],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      { day: 'Day 1', title: 'Jobra → Chika', body: 'A short 3 km walk-in from the roadhead. First night camped by the Rani nallah.' },
      { day: 'Day 2', title: 'Chika → Balu Ka Ghera', body: 'A 7 km climb via Jwara into high meadows, camping right under the pass with the first big peak views.' },
      { day: 'Day 3', title: 'Balu Ka Ghera → Hampta Pass (4,287m) → Shea Goru', body: 'The crossing day: steep to the pass, then a dramatic ~9 km drop into the stark Lahaul valley.' },
      { day: 'Day 4', title: 'Shea Goru → Chatru', body: 'Descend roughly 10 km to the road. Groups doing the Chandratal extension continue by vehicle to the lake for the night.' },
      { day: 'Day 5', title: 'Chatru / Chandratal → Manali', body: 'Return drive over Rohtang / the Atal Tunnel back to Manali.' },
    ],
  },
  'valley-of-flowers': {
    slug: 'valley-of-flowers',
    title: 'Valley of Flowers',
    region: 'Uttarakhand · UNESCO World Heritage Site',
    lat: 30.729,
    lng: 79.605,
    grade: 'grade-easy',
    gradeLabel: 'Easy – Moderate',
    image: 'images/valley-of-flowers.jpg',
    imageAlt: 'Valley of Flowers National Park in full monsoon bloom',
    images: [
      'images/valley-of-flowers.jpg',
      'images/valley-of-flowers-bloom.jpg',
      'images/vof-hemkund-sahib.jpg',
    ],
    distanceKm: '~38 km',
    cardStats: [
      { value: '3658m', label: 'Valley alt.' },
      { value: '6D / 5N', label: 'Duration' },
      { value: 'Jul–Sep', label: 'Season' },
    ],
    detailStats: [
      { value: '3658m', label: 'Valley alt.' },
      { value: '6D / 5N', label: 'Duration' },
      { value: 'Jul–Sep', label: 'Season' },
    ],
    desc: "A monsoon-only window when the alpine meadow floods with 600+ flowering species — Himalayan blue poppy, cobra lily, wild orchids. Slow-paced by design, this one's about the valley floor, not a summit.",
    note: 'Next batch forming · DM @trekwith_g',
    durationDays: 6,
    maxAltitudeM: 3658,
    season: 'Jul–Sep',
    batchDates: ['Jul 10–15, 2027', 'Aug 7–12, 2027'],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      { day: 'Day 1', title: 'Govindghat/Pulna → Ghangaria', body: 'The main trekking day, roughly 9–13 km up the Pushpawati valley to the basecamp village.' },
      { day: 'Day 2', title: 'Ghangaria → Valley of Flowers → Ghangaria', body: 'A full, slow-paced day inside the national park — an 8 km round trip through the bloom.' },
      { day: 'Day 3', title: 'Ghangaria → Hemkund Sahib → Ghangaria', body: 'A steep 12 km round trip to the glacial lake and gurudwara at 4,329m, weather permitting.' },
      { day: 'Day 4', title: 'Ghangaria → Govindghat/Pulna', body: 'Return descent to the roadhead.' },
      { day: 'Day 5', title: 'Buffer day', body: 'Held in reserve for weather at Hemkund or delayed road access.' },
      { day: 'Day 6', title: 'Departure', body: 'Onward drive from Govindghat / Joshimath.' },
    ],
  },
  chadar: {
    slug: 'chadar',
    title: 'Chadar',
    region: 'Ladakh · Frozen Zanskar river',
    lat: 34.05,
    lng: 77.35,
    grade: 'grade-hard',
    gradeLabel: 'Strenuous · Expedition',
    image: 'images/chadar-zanskar.jpg',
    imageAlt: 'Trekkers on the frozen Zanskar river, Chadar trek, Ladakh',
    images: [
      'images/chadar-zanskar.jpg',
      'images/chadar-trek-01.jpg',
      'images/chadar-trek-14.jpg',
    ],
    distanceKm: '~85 km',
    cardStats: [
      { value: '3850m', label: 'Max alt.' },
      { value: '8D / 7N', label: 'Duration' },
      { value: 'Jan–Feb', label: 'Season' },
    ],
    detailStats: [
      { value: '3850m', label: 'Max alt.' },
      { value: '8D / 7N', label: 'Duration' },
      { value: 'Jan–Feb', label: 'Season' },
    ],
    desc: "You walk on the river itself. Sub-zero nights in caves, ice that cracks underfoot, temperatures down to −20°C, and a support crew that's walked this route more times than anyone should. Our most demanding departure.",
    note: 'Limited to 12 trekkers · DM @trekwith_g',
    durationDays: 8,
    maxAltitudeM: 3850,
    season: 'Jan–Feb',
    batchDates: ['Jan 15–22, 2027', 'Feb 5–12, 2027'],
    included: [...DEFAULT_INCLUDED, 'Wilderness Institute / Leh permits', 'Standby oxygen cylinder & cave camps'],
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      { day: 'Day 1', title: 'Arrive Leh', body: 'A full rest day at altitude before any trekking begins — non-negotiable at 3,500m.' },
      { day: 'Day 2', title: 'Leh → Chilling → Shingra Koma', body: 'Drive to the Zanskar confluence, then the first steps onto the Chadar itself.' },
      { day: 'Day 3', title: 'Shingra Koma → Tibb Cave', body: 'A full ~10 km day on the ice, camping in a natural cave used by trekkers for decades.' },
      { day: 'Day 4', title: 'Tibb Cave → Naerak', body: 'Deeper into the gorge, roughly 10–12 km, past the frozen Naerak waterfall.' },
      { day: 'Day 5', title: 'Naerak — turnaround point', body: 'Rest and acclimatize; this is as far as our standard batch goes before starting back.' },
      { day: 'Day 6', title: 'Naerak → Tibb Cave', body: 'Retrace the route back down the frozen river.' },
      { day: 'Day 7', title: 'Tibb Cave → Shingra Koma / Chilling', body: 'Back off the ice and to the roadhead.' },
      { day: 'Day 8', title: 'Drive to Leh, departure', body: 'Buffer built in for ice conditions; used as a rest day if the trek ran to schedule.' },
    ],
  },
  brahmatal: {
    slug: 'brahmatal',
    title: 'Brahmatal',
    region: 'Uttarakhand · Alpine lake circuit',
    lat: 30.28,
    lng: 79.75,
    grade: 'grade-mod',
    gradeLabel: 'Moderate',
    image: 'images/brahmatal-campsite.jpg',
    imageAlt: 'Snow campsite on the Brahmatal trek, Uttarakhand',
    images: [
      'images/brahmatal-campsite.jpg',
      'images/brahmatal-nandaghunti-view.jpg',
      'images/brahmatal-trekker-view.jpg',
    ],
    distanceKm: '~26 km',
    cardStats: [
      { value: '3734m', label: 'Summit alt.' },
      { value: '6D / 5N', label: 'Duration' },
      { value: 'Dec–Apr', label: 'Season' },
    ],
    detailStats: [
      { value: '3734m', label: 'Summit alt.' },
      { value: '6D / 5N', label: 'Duration' },
      { value: 'Dec–Apr', label: 'Season' },
    ],
    desc: 'A winter ridge walk with views of Trishul and Nanda Ghunti most days — and a frozen lake camp that rarely makes it into the usual trek lists.',
    note: 'Next batch forming · DM @trekwith_g',
    durationDays: 6,
    maxAltitudeM: 3734,
    season: 'Dec–Apr',
    batchDates: ['Dec 19–24, 2026', 'Jan 16–21, 2027'],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      { day: 'Day 1', title: 'Lohajung → Bekaltal', body: 'A gentle 5 km forest walk to a small lake camp.' },
      { day: 'Day 2', title: 'Bekaltal → Brahmatal Base', body: 'A 6 km ridge walk with the first big views of Trishul and Nanda Ghunti.' },
      { day: 'Day 3', title: 'Base → Brahmatal Summit (3,734m) → Daldum', body: 'Dawn summit push, then descend roughly 8–9 km to a lower camp the same day.' },
      { day: 'Day 4', title: 'Daldum → Lohajung', body: 'A 7 km descent back to the roadhead.' },
      { day: 'Day 5', title: 'Buffer day', body: 'Reserve for weather or an easier pace on snow.' },
      { day: 'Day 6', title: 'Departure from Lohajung', body: 'Onward drive to Kathgodam or Rishikesh.' },
    ],
  },
  custom: {
    slug: 'custom',
    title: 'Build your own',
    region: 'Any region · with Moksha Adventures on select routes',
    grade: 'grade-hard',
    gradeLabel: 'Custom · Expedition',
    image: 'images/ladakh-basecamp.jpg',
    imageAlt: 'Trekking camp near Tso Kar, Ladakh',
    images: [
      'images/ladakh-basecamp.jpg',
      'images/ladakh-tsokar-reflections.jpg',
      'images/ladakh-tsokar-salt.jpg',
    ],
    cardStats: [
      { value: 'Flexible', label: 'Duration' },
      { value: '4+', label: 'Min. group' },
    ],
    detailStats: [
      { value: 'Flexible', label: 'Duration' },
      { value: '4+', label: 'Min. group' },
    ],
    desc: "Corporate offsites, college groups, or a summit you've had on a list for years — we'll scope route, permits and crew for a private departure.",
    note: 'Start with a DM · @trekwith_g',
    season: 'Any (route-dependent)',
    itineraryHeading: 'How it works',
    itineraryEyebrow: 'Custom departures',
    itineraryNote: 'No fixed dates — every custom trip starts with a call.',
    itinerary: [
      { day: 'Step 1', title: 'Discovery call', body: 'Tell us group size, dates, fitness level and what you actually want out of the trip — summit, scenery, or just time off-grid.' },
      { day: 'Step 2', title: 'Route & permit scoping', body: 'We shortlist 2–3 route options against your dates and sort forest/wildlife permits where the region needs them.' },
      { day: 'Step 3', title: 'Crew & logistics', body: 'Guides, cooks and porters are booked, gear-on-rent sorted, and a day-by-day plan is shared before you pay anything.' },
      { day: 'Step 4', title: 'On trail', body: 'Same small-batch rules as our fixed departures — rest days above 3,200m, a hard turn-back call if pace slips.' },
    ],
  },
};

export const TREK_SLUGS = Object.keys(TREKS);

export function getTrek(slug: string): Trek | undefined {
  return TREKS[slug];
}

export function getAllTreks(): Trek[] {
  return TREK_SLUGS.map((slug) => TREKS[slug]);
}
