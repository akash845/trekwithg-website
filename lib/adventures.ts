export type AdventureCategory = 'water' | 'air' | 'land';

export interface AdventureStat {
  value: string;
  label: string;
}

export interface ExperienceStep {
  day: string;
  title: string;
  body: string;
}

export interface Adventure {
  slug: string;
  title: string;
  category: AdventureCategory;
  categoryLabel: string;
  region: string;
  levelLabel: string;
  cardStats: AdventureStat[];
  detailStats: AdventureStat[];
  desc: string;
  note: string;
  season?: string;
  experienceHeading?: string;
  experienceNote?: string;
  experience: ExperienceStep[];
  included?: string[];
  excluded?: string[];
}

const CATEGORY_GRADE: Record<AdventureCategory, string> = {
  water: 'grade-easy',
  air: 'grade-mod',
  land: 'grade-hard',
};

export function categoryGrade(category: AdventureCategory) {
  return CATEGORY_GRADE[category];
}

export const ADVENTURES: Record<string, Adventure> = {
  'scuba-diving': {
    slug: 'scuba-diving',
    title: 'Scuba Diving',
    category: 'water',
    categoryLabel: 'Water',
    region: 'Havelock & Neil Island, Andamans · also Netrani, Karnataka',
    levelLabel: 'No experience needed for Discover Scuba',
    cardStats: [
      { value: '2 dives', label: 'Discover Scuba' },
      { value: '12m', label: 'Max depth' },
      { value: 'Oct–May', label: 'Season' },
    ],
    detailStats: [
      { value: '2 dives', label: 'Discover Scuba' },
      { value: '12m', label: 'Max depth' },
      { value: 'Oct–May', label: 'Season' },
    ],
    desc: 'Two shore-boat dives off Havelock with a PADI instructor — coral gardens, reef fish and, on a good day, a turtle. No certification required for the Discover Scuba package; PADI Open Water available for those who want to get certified.',
    note: 'Batches run most weekends · DM @trekwith_g',
    season: 'Oct–May',
    experienceHeading: 'How the day runs',
    experience: [
      { day: 'Step 1', title: 'Briefing & pool session', body: 'Land briefing on hand signals, equalizing and the gear, followed by a shallow confined-water run-through before the boat leaves.' },
      { day: 'Step 2', title: 'Dive 1 — reef introduction', body: 'A guided dive to 6–8m along a coral wall, instructor within arm\'s reach the whole time.' },
      { day: 'Step 3', title: 'Dive 2 — deeper reef', body: 'A second dive to 10–12m at a different site, once you\'re comfortable with buoyancy and breathing.' },
      { day: 'Step 4', title: 'Logbook & photos', body: 'Dive log stamped, and if you want to continue toward PADI Open Water, we\'ll scope the extra pool/theory sessions needed.' },
    ],
    included: [
      'All gear — BCD, regulator, wetsuit, weights',
      'PADI-certified instructor, max 1:4 ratio',
      'Boat transfer to dive sites',
      'Dive insurance for the day',
    ],
    excluded: ['Transport to Havelock/Port Blair', 'Accommodation', 'GoPro/underwater photo package (available on request)'],
  },
  snorkeling: {
    slug: 'snorkeling',
    title: 'Snorkeling',
    category: 'water',
    categoryLabel: 'Water',
    region: 'Havelock & Neil Island, Andamans · Netrani Island, Karnataka · Grande Island, Goa',
    levelLabel: 'No experience needed · swimming helpful, not required',
    cardStats: [
      { value: '45–60 min', label: 'In water' },
      { value: 'Surface', label: 'Depth' },
      { value: 'Oct–May', label: 'Season' },
    ],
    detailStats: [
      { value: '45–60 min', label: 'In water' },
      { value: 'Surface', label: 'Depth' },
      { value: 'Oct–May', label: 'Season' },
    ],
    desc: 'The lowest-barrier way to see a reef — a life jacket, a mask and fins, and a guide swimming next to you the whole time. Good for kids, non-swimmers and anyone easing in before a scuba try-dive.',
    note: 'Runs alongside our scuba batches · DM @trekwith_g',
    season: 'Oct–May',
    experienceHeading: 'How the session runs',
    experience: [
      { day: 'Step 1', title: 'Gear fit & briefing', body: 'Mask, snorkel, fins and a life jacket fitted on the boat, plus a quick briefing on breathing through the tube and clearing water from the mask.' },
      { day: 'Step 2', title: 'In the water', body: 'A guide swims alongside the group over a shallow reef — usually 1–4m — pointing out fish, coral and the occasional turtle.' },
      { day: 'Step 3', title: 'Second spot (if calm)', body: 'Weather permitting, a short boat hop to a second reef patch for the last stretch of the session.' },
    ],
    included: ['Mask, snorkel, fins, life jacket', 'In-water guide', 'Boat transfer to the reef'],
    excluded: ['Transport to the base town', 'Underwater camera rental'],
  },
  surfing: {
    slug: 'surfing',
    title: 'Surfing',
    category: 'water',
    categoryLabel: 'Water',
    region: 'Varkala & Kovalam, Kerala · Mulki, Karnataka · Puducherry',
    levelLabel: 'Beginner-friendly · board & instructor included',
    cardStats: [
      { value: '3D / 2N', label: 'Standard camp' },
      { value: '2 sessions/day', label: 'In water' },
      { value: 'Sep–Feb', label: 'Season' },
    ],
    detailStats: [
      { value: '3D / 2N', label: 'Standard camp' },
      { value: '2 sessions/day', label: 'In water' },
      { value: 'Sep–Feb', label: 'Season' },
    ],
    desc: 'A short surf camp on India\'s most consistent beginner breaks — soft-top boards, small whitewash waves to start, and a coach who\'ll get you standing up by the second session. Single-day try-outs also available.',
    note: 'Next camp forming · DM @trekwith_g',
    season: 'Sep–Feb',
    experienceHeading: 'Camp itinerary',
    experience: [
      { day: 'Day 1', title: 'Arrival & land drills', body: 'Check-in, board fitting, and pop-up practice on the sand before the first paddle-out.' },
      { day: 'Day 2', title: 'Two sessions in the whitewash', body: 'Morning and evening sessions timed to the tide, focused on catching and standing on small breaking waves.' },
      { day: 'Day 3', title: 'Green-wave session & wrap', body: 'Strongest swimmers move to unbroken waves; everyone else keeps stacking whitewash rides. Board return and checkout by noon.' },
    ],
    included: ['Soft-top board & leash for every session', 'Certified surf coach, small group ratio', 'Basic homestay/camp accommodation'],
    excluded: ['Meals outside what\'s listed at booking', 'Travel to the surf town', 'Wetsuit rental (rarely needed in India)'],
  },
  'white-water-rafting': {
    slug: 'white-water-rafting',
    title: 'White-Water Rafting',
    category: 'water',
    categoryLabel: 'Water',
    region: 'Rishikesh, Uttarakhand (Ganga) · Zanskar, Ladakh (expedition-grade)',
    levelLabel: 'Beginner-friendly on Grade II–III · fitness needed for Zanskar',
    cardStats: [
      { value: '16 km / 26 km', label: 'Standard runs' },
      { value: 'Grade II–IV', label: 'Rapids' },
      { value: 'Mar–Jun, Sep–Nov', label: 'Season' },
    ],
    detailStats: [
      { value: '16 km / 26 km', label: 'Standard runs' },
      { value: 'Grade II–IV', label: 'Rapids' },
      { value: 'Mar–Jun, Sep–Nov', label: 'Season' },
    ],
    desc: 'The Ganga at Rishikesh — Grade II to IV rapids depending on the stretch and season, with a cliff-jump stop and a calm-water swim built into the standard run. A multi-day Zanskar expedition is available for groups wanting something bigger.',
    note: 'Runs daily in season · DM @trekwith_g',
    season: 'Mar–Jun, Sep–Nov',
    experienceHeading: 'How the run works',
    experience: [
      { day: 'Step 1', title: 'Safety briefing', body: 'Paddle commands, what to do if you fall out, and how the raft flips back over — covered on the bank before anyone gets in.' },
      { day: 'Step 2', title: 'The run', body: 'A guided descent through named rapids (Roller Coaster, Golf Course, Club House on the standard stretch), with a cliff-jump and float break in a calm section.' },
      { day: 'Step 3', title: 'Take-out & photos', body: 'Raft pulled out downstream, gear collected, and any action-cam footage handed over if you booked it.' },
    ],
    included: ['Raft, paddle, helmet & life jacket', 'Certified river guide per raft', 'Safety kayaker cover on the run'],
    excluded: ['Transport to/from the put-in point', 'Action-camera footage (add-on)', 'Zanskar expedition permits (quoted separately)'],
  },
  kayaking: {
    slug: 'kayaking',
    title: 'Kayaking',
    category: 'water',
    categoryLabel: 'Water',
    region: 'Rishikesh (Ganga flatwater) · Gokarna & Netrani coast, Karnataka',
    levelLabel: 'No experience needed for guided flatwater sessions',
    cardStats: [
      { value: '1.5–2 hrs', label: 'Session' },
      { value: 'Flatwater', label: 'Grade' },
      { value: 'Year-round (coast)', label: 'Season' },
    ],
    detailStats: [
      { value: '1.5–2 hrs', label: 'Session' },
      { value: 'Flatwater', label: 'Grade' },
      { value: 'Year-round (coast)', label: 'Season' },
    ],
    desc: 'Sit-on-top kayaks on calm water — the Ganga backwaters near Rishikesh or a sheltered cove on the Karnataka coast. A relaxed paddle rather than a workout, with a guide alongside for currents and wildlife spotting.',
    note: 'Slots most days · DM @trekwith_g',
    season: 'Year-round (coast) · Mar–Jun, Sep–Nov (river)',
    experienceHeading: 'How the session runs',
    experience: [
      { day: 'Step 1', title: 'Paddle briefing', body: 'Strokes, steering and what to do if the kayak tips — five minutes on the shore before launch.' },
      { day: 'Step 2', title: 'Guided paddle', body: 'A guide leads the group along the shoreline or backwater, pointing out birdlife and, on the coast, the reef below.' },
      { day: 'Step 3', title: 'Return & swap', body: 'Optional swim break mid-session before paddling back to the put-in point.' },
    ],
    included: ['Sit-on-top kayak & paddle', 'Life jacket', 'Guide accompanying the group'],
    excluded: ['Transport to the launch point', 'Dry bag rental for phones/cameras'],
  },
  skydiving: {
    slug: 'skydiving',
    title: 'Skydiving',
    category: 'air',
    categoryLabel: 'Air',
    region: 'Mysore, Karnataka · Deesa, Gujarat — India\'s licensed drop zones',
    levelLabel: 'No experience needed · tandem with a certified jumpmaster',
    cardStats: [
      { value: '~4,000m', label: 'Exit altitude' },
      { value: '~35 sec', label: 'Freefall' },
      { value: 'Oct–Mar', label: 'Best season' },
    ],
    detailStats: [
      { value: '~4,000m', label: 'Exit altitude' },
      { value: '~35 sec', label: 'Freefall' },
      { value: 'Oct–Mar', label: 'Best season' },
    ],
    desc: 'A tandem jump strapped to a certified jumpmaster — around 35 seconds of freefall from roughly 4,000m before the canopy opens for a 5–7 minute drift down. India\'s only licensed civilian drop zones, so this is booked through the operator directly, not run by our own crew.',
    note: 'Booked via India\'s licensed drop zone · DM @trekwith_g to arrange',
    season: 'Oct–Mar',
    experienceHeading: 'How the day runs',
    experience: [
      { day: 'Step 1', title: 'Ground briefing', body: 'Harness fitting, body position for exit and landing, and what to expect in freefall — covered by the drop zone\'s certified staff.' },
      { day: 'Step 2', title: 'The climb & exit', body: 'A ~20-minute climb to altitude in a fixed-wing aircraft, then the exit — tandem, strapped to your jumpmaster the entire time.' },
      { day: 'Step 3', title: 'Freefall & canopy', body: 'Roughly 35 seconds of freefall, then a smooth 5–7 minute canopy ride down with full views of the drop zone.' },
      { day: 'Step 4', title: 'Landing & certificate', body: 'A guided tandem landing, followed by a jump certificate and video/photo package if booked in advance.' },
    ],
    included: ['Tandem jump with a certified jumpmaster', 'Full gear — harness, jumpsuit, altimeter', 'Ground briefing & training'],
    excluded: ['Video/photo package (add-on at the drop zone)', 'Travel to Mysore/Deesa', 'Medical fitness certificate, where required by the drop zone'],
  },
  paragliding: {
    slug: 'paragliding',
    title: 'Paragliding',
    category: 'air',
    categoryLabel: 'Air',
    region: 'Bir Billing, Himachal Pradesh · Kamshet, Maharashtra',
    levelLabel: 'No experience needed for tandem flights',
    cardStats: [
      { value: '15–25 min', label: 'Tandem flight' },
      { value: '2,400m+', label: 'Take-off alt.' },
      { value: 'Oct–Jun', label: 'Season' },
    ],
    detailStats: [
      { value: '15–25 min', label: 'Tandem flight' },
      { value: '2,400m+', label: 'Take-off alt.' },
      { value: 'Oct–Jun', label: 'Season' },
    ],
    desc: 'A tandem flight off Billing, one of the world\'s highest-altitude paragliding sites — a running take-off, then 15–25 minutes riding thermals over the Kangra valley before landing at Chougan. Kamshet is the go-to when Bir\'s season is closed.',
    note: 'Flies most clear-weather days · DM @trekwith_g',
    season: 'Oct–Jun',
    experienceHeading: 'How the flight runs',
    experience: [
      { day: 'Step 1', title: 'Take-off briefing', body: 'Harness fitting and a walk-through of the running take-off with your tandem pilot.' },
      { day: 'Step 2', title: 'Launch & climb', body: 'A short running launch off the ridge at Billing, then catching thermals to gain height over the valley.' },
      { day: 'Step 3', title: 'The flight', body: '15–25 minutes airborne, pilot doing the flying — ask for gentle spirals or a calmer glide depending on your stomach.' },
      { day: 'Step 4', title: 'Landing', body: 'A guided touchdown at the Chougan landing site, roughly a 20–30 minute taxi ride from the take-off point.' },
    ],
    included: ['Tandem flight with a licensed pilot', 'Full gear — harness, helmet', 'Landing-site pickup coordination'],
    excluded: ['Take-off point transport (shared taxi arranged locally)', 'GoPro footage (add-on with most operators)'],
  },
  'bungee-jumping': {
    slug: 'bungee-jumping',
    title: 'Bungee Jumping',
    category: 'air',
    categoryLabel: 'Air',
    region: 'Rishikesh, Uttarakhand (India\'s highest fixed platform) · Della Adventure, Lonavala',
    levelLabel: 'No experience needed · basic fitness/weight limits apply',
    cardStats: [
      { value: '83m', label: 'Rishikesh drop' },
      { value: '~5 sec', label: 'Freefall' },
      { value: 'Year-round', label: 'Season' },
    ],
    detailStats: [
      { value: '83m', label: 'Rishikesh drop' },
      { value: '~5 sec', label: 'Freefall' },
      { value: 'Year-round', label: 'Season' },
    ],
    desc: 'India\'s highest fixed-platform bungee, over a gorge outside Rishikesh — an 83m drop with a few seconds of genuine freefall before the cord catches. Booked directly with the certified jump operator; we help coordinate timing around a rafting or trek trip.',
    note: 'Booked via the certified jump operator · DM @trekwith_g to arrange',
    season: 'Year-round',
    experienceHeading: 'How the jump runs',
    experience: [
      { day: 'Step 1', title: 'Weigh-in & harness', body: 'Weight check (required for cord calibration), then full-body harness fitted by trained staff.' },
      { day: 'Step 2', title: 'Platform walk & briefing', body: 'A short walk onto the platform with a countdown briefing on body position for the jump.' },
      { day: 'Step 3', title: 'The jump', body: 'The drop itself — around 5 seconds of freefall before the cord engages, followed by a few rebounds.' },
      { day: 'Step 4', title: 'Lower-down & certificate', body: 'Lowered to the ground by the recovery team, with a jump certificate and video available on the spot.' },
    ],
    included: ['Certified jump with trained operator staff', 'Full safety harness & cord system', 'Weight check & briefing'],
    excluded: ['Video/photo package (paid add-on)', 'Travel to the jump site'],
  },
  'rock-climbing': {
    slug: 'rock-climbing',
    title: 'Rock Climbing & Bouldering',
    category: 'land',
    categoryLabel: 'Land',
    region: 'Hampi, Karnataka · Badami, Karnataka',
    levelLabel: 'Beginner-friendly top-rope routes; boulder problems up to advanced',
    cardStats: [
      { value: '2D / 1N', label: 'Standard trip' },
      { value: 'V0–V8', label: 'Boulder grades' },
      { value: 'Oct–Feb', label: 'Season' },
    ],
    detailStats: [
      { value: '2D / 1N', label: 'Standard trip' },
      { value: 'V0–V8', label: 'Boulder grades' },
      { value: 'Oct–Feb', label: 'Season' },
    ],
    desc: 'Hampi\'s granite boulder fields — one of the world\'s best bouldering destinations, largely undocumented until climbers started putting up routes in the 2000s. We run both top-rope routes for first-timers and guided sessions on established boulder problems for anyone already climbing.',
    note: 'Next trip forming · DM @trekwith_g',
    season: 'Oct–Feb',
    experienceHeading: 'Trip itinerary',
    experience: [
      { day: 'Day 1', title: 'Arrival & top-rope intro', body: 'Gear fitting, knot-tying and belay basics, then top-rope climbs on beginner-grade boulders through the afternoon.' },
      { day: 'Day 2', title: 'Guided bouldering session', body: 'A full day moving between boulder fields with a local guide, problems picked to match the group\'s grade — from V0 up to V8 for stronger climbers.' },
    ],
    included: ['Climbing shoes, harness, chalk & crash pads', 'Certified climbing guide', 'Local transport between boulder fields'],
    excluded: ['Accommodation in Hampi', 'Meals', 'Travel to Hampi/Hospet'],
  },
  'desert-safari': {
    slug: 'desert-safari',
    title: 'Desert Safari & Camping',
    category: 'land',
    categoryLabel: 'Land',
    region: 'Rann of Kutch, Gujarat · Jaisalmer, Rajasthan',
    levelLabel: 'No experience needed · all fitness levels',
    cardStats: [
      { value: '2D / 1N', label: 'Standard trip' },
      { value: 'Dune camp', label: 'Stay' },
      { value: 'Nov–Feb', label: 'Season' },
    ],
    detailStats: [
      { value: '2D / 1N', label: 'Standard trip' },
      { value: 'Dune camp', label: 'Stay' },
      { value: 'Nov–Feb', label: 'Season' },
    ],
    desc: 'A dune-camp night under some of India\'s clearest skies — camel or 4x4 dune-bashing by day, a desert camp with a bonfire and local folk music by night. Kutch during the White Rann full-moon window, or Jaisalmer\'s Sam dunes as the more accessible option.',
    note: 'Next batch forming · DM @trekwith_g',
    season: 'Nov–Feb',
    experienceHeading: 'Trip itinerary',
    experience: [
      { day: 'Day 1', title: 'Arrival & dune activity', body: 'Check into the desert camp, then camel ride or 4x4 dune-bashing out to the sunset point.' },
      { day: 'Day 2', title: 'Camp night & departure', body: 'Bonfire, folk performance and stargazing at camp overnight; onward transport after breakfast.' },
    ],
    included: ['Desert camp accommodation (tents)', 'Camel ride or dune-bashing session', 'Dinner, bonfire & folk performance'],
    excluded: ['Transport to/from the base town', 'Alcohol', 'Optional hot-air balloon add-on (Jaisalmer, seasonal)'],
  },
  'mountain-biking': {
    slug: 'mountain-biking',
    title: 'Mountain Biking',
    category: 'land',
    categoryLabel: 'Land',
    region: 'Manali–Leh Highway, Himachal–Ladakh · Spiti Valley',
    levelLabel: 'Intermediate fitness required · prior riding experience recommended',
    cardStats: [
      { value: '7D / 6N', label: 'Manali–Leh' },
      { value: '5,300m', label: 'Highest pass' },
      { value: 'Jul–Sep', label: 'Season' },
    ],
    detailStats: [
      { value: '7D / 6N', label: 'Manali–Leh' },
      { value: '5,300m', label: 'Highest pass' },
      { value: 'Jul–Sep', label: 'Season' },
    ],
    desc: 'One of the world\'s highest motorable roads, ridden on a mountain bike instead of a motorcycle — three passes over 4,900m including Taglang La, a support vehicle carrying gear, and long descents that make the climbs worth it.',
    note: 'Next batch forming · DM @trekwith_g',
    season: 'Jul–Sep',
    experienceHeading: 'Sample itinerary',
    experience: [
      { day: 'Day 1', title: 'Manali → Jispa', body: 'Acclimatization ride over Rohtang/the Atal Tunnel, easing into the altitude before the big climbs start.' },
      { day: 'Day 2', title: 'Jispa → Sarchu', body: 'Long climbing day with the support vehicle sweeping riders who need a break from the altitude.' },
      { day: 'Day 3', title: 'Sarchu → Pang via Baralacha La', body: 'The first big pass of the route, followed by a long, fast descent onto the Moore Plains.' },
      { day: 'Day 4', title: 'Pang → Debring via Taglang La (5,328m)', body: 'The highest point of the route — a slow grind up, then one of the best descents in the Himalaya.' },
      { day: 'Day 5', title: 'Debring → Leh', body: 'A rolling, mostly-downhill finish into the Indus valley.' },
      { day: 'Day 6', title: 'Rest day, Leh', body: 'Bike servicing and recovery before the ride out or onward travel.' },
      { day: 'Day 7', title: 'Departure', body: 'Buffer day built in for weather or altitude delays en route.' },
    ],
    included: ['Mountain bike rental (or bring your own)', 'Support vehicle carrying luggage & spares', 'Camping/guesthouse stay each night', 'Mechanic support on the route'],
    excluded: ['Flights/transport to Manali or from Leh', 'Personal riding gear (helmet, gloves rentable)', 'Inner Line Permits (arranged, billed at cost)'],
  },
};

export const ADVENTURE_SLUGS = Object.keys(ADVENTURES);

export function getAdventure(slug: string): Adventure | undefined {
  return ADVENTURES[slug];
}

export function getAllAdventures(): Adventure[] {
  return ADVENTURE_SLUGS.map((slug) => ADVENTURES[slug]);
}
