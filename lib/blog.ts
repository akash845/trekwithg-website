export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  'winter-himalayan-trek-packing-list': {
    slug: 'winter-himalayan-trek-packing-list',
    title: 'The Winter Himalayan Packing List We Actually Use',
    excerpt:
      'What goes in the kit bag for Kedarkantha, Brahmatal and Chadar — layering logic, the gear people over-pack, and the two things we\'ve seen ruin more treks than altitude ever does.',
    image: 'images/brahmatal-campsite.jpg',
    imageAlt: 'Snow campsite on the Brahmatal trek at dusk',
    date: '2026-01-08',
    readTime: '7 min read',
    tags: ['Gear', 'Winter treks'],
    content: [
      "Every winter batch, the same two items sink someone's trek: wet cotton socks and a headlamp with dying batteries. Neither is dramatic. Both are completely avoidable, and both are the actual reason people turn back — not altitude, not fitness.",
      "Layering on a winter Himalayan trek is three systems, not one big jacket. A moisture-wicking base layer against skin, an insulating mid layer (fleece or a light down), and a windproof, water-resistant outer shell. The mistake we see constantly is one thick jacket doing all three jobs — you overheat on the climb, sweat into the insulation, then freeze the moment you stop at camp.",
      "Feet matter more than anything else on the packing list. Two pairs of trekking socks (wool, never cotton) rotated daily, gaiters if there's fresh snow, and boots broken in weeks before the trek — not the week of. Blisters at 3,500m in sub-zero temperatures are a genuinely different problem than blisters on a weekend hike.",
      "For Chadar specifically, add a sleeping bag rated well below the stated night temperature (caves and tents on the ice run colder than the number on the label suggests), a full change of thermals kept dry in a drybag for emergencies, and micro-spikes even where the crew provides them — having your own means one less thing to queue for.",
      "The gear people over-pack: a second pair of trekking poles, guidebooks, a camp chair. The gear people under-pack: a power bank rated for cold (lithium batteries drain fast below freezing), lip balm with SPF, and a headlamp with fresh batteries plus one spare set carried on your body, not in the duffel that lags behind on the mule.",
    ],
  },
  'monsoon-trekking-valley-of-flowers': {
    slug: 'monsoon-trekking-valley-of-flowers',
    title: 'Why We Only Run Valley of Flowers in the Monsoon Window',
    excerpt:
      'The bloom at Valley of Flowers is a six-week accident of weather, altitude and rainfall — miss the window by two weeks either side and you\'re looking at a green meadow instead of 600 flowering species.',
    image: 'images/valley-of-flowers-bloom.jpg',
    imageAlt: 'Wildflowers in full bloom at Valley of Flowers National Park',
    date: '2026-06-02',
    readTime: '5 min read',
    tags: ['Uttarakhand', 'Trip planning'],
    content: [
      "Most Himalayan treks avoid the monsoon entirely — landslide risk on hill roads, leeches in the lower forest sections, trails turned to slush. Valley of Flowers is the one trek where the monsoon is the entire point.",
      "The national park sits at roughly 3,300–3,650m in a bowl shaped by glacial melt and monsoon rainfall, and the flowering season is short: mid-July through early September, peaking in the first half of August depending on how the monsoon arrives that year. Outside that window, you're walking the same valley floor looking at grass.",
      "We build the trip around a slow middle day deliberately. Day one is the walk-in to Ghangaria, day two is the valley itself — an 8km round trip through the bloom with no fixed pace, because the point isn't covering distance, it's the blue poppies, cobra lilies and wild orchids at your feet. Day three is Hemkund Sahib, a steeper pull to the glacial lake and gurudwara, weather permitting.",
      "The tradeoff for timing the bloom is accepting monsoon logistics: road access to Govindghat can be disrupted by rain, so we always build in a buffer day, and rain gear is non-negotiable even on a day that starts clear. It's the one Himalayan trek on our list where the itinerary bends around a flower, not a summit — and it's worth the compromise.",
    ],
  },
  'first-himalayan-trek-what-to-expect': {
    slug: 'first-himalayan-trek-what-to-expect',
    title: "Your First Himalayan Trek: What Nobody Tells You Beforehand",
    excerpt:
      'Altitude sickness isn\'t about fitness, the food is better than you\'d expect, and the hardest part of most first treks isn\'t a summit push — it\'s the cold at 4am. A straight answer to what first-timers actually ask us.',
    image: 'images/kedarkantha-harkidun.jpg',
    imageAlt: 'First light over the Har Ki Dun valley from the Kedarkantha ridge',
    date: '2026-02-14',
    readTime: '6 min read',
    tags: ['Beginners', 'Trip planning'],
    content: [
      "The question we get most from first-timers is some version of \"am I fit enough?\" The honest answer: general fitness helps, but altitude sickness has almost nothing to do with how many kilometres you can run at sea level. It's about ascent rate and hydration, which is why treks like Kedarkantha build in a deliberately short, easy second day — not because the trail demands it, but because your body needs time at altitude before it climbs higher.",
      "Nobody mentions how cold camp gets relative to the daytime trek. You'll be sweating on the trail by 10am and layering up in a down jacket by 6pm at the same campsite. Pack for both extremes, not the average.",
      "The food surprises most people. Trek cooks on Himalayan routes are genuinely good at what they do with a two-burner stove and basic supplies — dal, rice, sabzi, and usually something fried and unreasonable for morale on the last night. Nobody is eating trail bars for six days.",
      "The actual hardest part of a first trek is rarely the summit push itself — it's the 4am wake-up in sub-zero cold to start it. Mentally preparing for that specific fifteen minutes, not the six hours of walking after, is what most first-timers underestimate.",
      "Last thing worth knowing: a good trek leader will make a hard turn-back call before you'd make it yourself. If your group is asked to skip a summit attempt because of weather or pace, that's the system working, not a failure.",
    ],
  },
  'chadar-trek-what-it-is-really-like': {
    slug: 'chadar-trek-what-it-is-really-like',
    title: "Chadar: What Walking on a Frozen River Is Actually Like",
    excerpt:
      'Eight days on the ice sheet of the Zanskar river, sleeping in caves, sub -20°C nights, and a route that changes shape every year depending on how the river froze. Notes from our most demanding departure.',
    image: 'images/chadar-trek-01.jpg',
    imageAlt: 'Trekkers crossing the frozen Zanskar river on the Chadar trek',
    date: '2026-01-22',
    readTime: '8 min read',
    tags: ['Ladakh', 'Expedition'],
    content: [
      "Chadar isn't a trek in the usual sense — there's no trail. The route is the river itself, frozen into a sheet that shifts every season depending on temperature and flow. What was solid ice last year might be open water this year, which is why the route is scouted by local guides days ahead, not fixed on a map.",
      "The acclimatization day in Leh before any trekking starts is non-negotiable, and we mean that literally — landing at 3,500m and starting to walk the next day is how people get sent home early. A full rest day at altitude first, no exceptions.",
      "Nights are spent in caves used by trekkers and traders for decades, not tents — the rock holds a little more warmth than canvas, though \"warmer\" at -20°C is a relative term. You sleep in every layer you own.",
      "The ice itself has a sound. Cracks and groans travel along the sheet as it shifts, which is unsettling the first night and background noise by the third. Guides read the ice constantly — colour, thickness, the sound it makes underfoot — and reroute around sections that don't look right rather than testing them.",
      "Our standard batch turns around at Naerak, past the frozen waterfall, rather than pushing to Lingshed. It's a deliberate choice: the extra distance adds real risk for a marginal gain in scenery, and turning back with the group still strong beats pushing to a harder finish line.",
      "What surprises people most isn't the cold — everyone arrives braced for that. It's the silence. No wind funnel like a mountain pass, no river sound because the river is silent under the ice. Just footsteps and, occasionally, the ice itself.",
    ],
  },
  'best-time-to-trek-himachal-uttarakhand-ladakh': {
    slug: 'best-time-to-trek-himachal-uttarakhand-ladakh',
    title: 'Best Time to Trek: Himachal, Uttarakhand and Ladakh Compared',
    excerpt:
      'Three regions, three completely different calendars. A region-by-region breakdown of when to go, when to avoid, and why "best time to trek in the Himalayas" is the wrong question to ask.',
    image: 'images/hampta-chandratal.jpg',
    imageAlt: 'Chandratal lake near the Hampta Pass crossing in Himachal Pradesh',
    date: '2026-03-20',
    readTime: '6 min read',
    tags: ['Trip planning', 'Regions'],
    content: [
      "\"When's the best time to trek in the Himalayas?\" is a question we can't answer without knowing the region, because Himachal, Uttarakhand and Ladakh run on three different calendars entirely.",
      "Himachal Pradesh treks like Hampta Pass open once the winter snow clears the pass, typically June, and run through October before the first serious snowfall closes it again. Peak season is July–September, which unfortunately overlaps with monsoon lower down — the trail itself sits high enough to mostly avoid it, but road access can get disrupted.",
      "Uttarakhand splits into two very different seasons depending on the trek. Kedarkantha and Brahmatal are winter treks, December through April, built entirely around snow — the frozen lakes and summit snow are the draw, not an obstacle. Valley of Flowers runs the opposite calendar: July to September only, timed to the monsoon bloom, with the trek genuinely not worth doing outside that window.",
      "Ladakh runs on the most extreme split of any region we operate in. Chadar happens only in January–February when the Zanskar freezes solid enough to walk on. Every other Ladakh trek and the region's road-accessible circuits run June through September, once winter snow clears the high passes into Leh.",
      "The practical takeaway: pick the trek first, then let its region dictate your dates — not the other way around. Trying to fit Chadar into a June holiday, or Valley of Flowers into October, isn't a scheduling inconvenience, it's a different trek that doesn't exist yet.",
    ],
  },
};

export const BLOG_SLUGS = Object.keys(BLOG_POSTS);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS[slug];
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_SLUGS.map((slug) => BLOG_POSTS[slug]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
