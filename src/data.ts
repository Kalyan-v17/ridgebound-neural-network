export type Trek = {
  name: string;
  region: string;
  days: number;
  elevation: string;
  difficulty: 'Mod' | 'Hard' | 'Severe';
  image: string;
};

export const treks: Trek[] = [
  {
    name: 'Annapurna Circuit',
    region: 'Nepal · Annapurna',
    days: 14,
    elevation: '5,416m',
    difficulty: 'Hard',
    image:
      'https://images.pexels.com/photos/41042397/pexels-photo-41042397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Dolomites Alta Via',
    region: 'Italy · Dolomites',
    days: 9,
    elevation: '3,343m',
    difficulty: 'Mod',
    image:
      'https://images.pexels.com/photos/40041961/pexels-photo-40041961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Everest Base Camp',
    region: 'Nepal · Khumbu',
    days: 16,
    elevation: '5,364m',
    difficulty: 'Hard',
    image:
      'https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Mont Blanc Traverse',
    region: 'France · Alps',
    days: 7,
    elevation: '4,810m',
    difficulty: 'Severe',
    image:
      'https://images.pexels.com/photos/34125807/pexels-photo-34125807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Cordillera Blanca',
    region: 'Peru · Andes',
    days: 12,
    elevation: '4,760m',
    difficulty: 'Hard',
    image:
      'https://images.pexels.com/photos/14265677/pexels-photo-14265677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Lofoten Traverse',
    region: 'Norway · Arctic',
    days: 8,
    elevation: '1,161m',
    difficulty: 'Mod',
    image:
      'https://images.pexels.com/photos/10908706/pexels-photo-10908706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const stats = [
  { value: '500+', label: 'Summits' },
  { value: '12K+', label: 'Trekkers' },
  { value: '8,848m', label: 'Highest' },
  { value: '15', label: 'Years' },
];

export const pillars = [
  {
    title: 'Expert Guides',
    body: 'IFMGA-certified leads with a decade each on the routes we run. They know every col, every storm sign, every shortcut home.',
  },
  {
    title: 'Small Groups',
    body: 'Eight trekkers max. No cattle drives, no microphone briefings. Just a tight team that moves fast and looks after its own.',
  },
  {
    title: 'Safety First',
    body: 'Satellite comms, evacuation plans rehearsed yearly, and a hard rule: we turn around when the mountain says so. Always.',
  },
];

export const itinerary = [
  { day: 'Day 01', title: 'Arrive · Lukla', desc: 'Land at 2,860m. Briefing, gear check, first night in a tea house.' },
  { day: 'Day 02', title: 'Trek · Phakding', desc: 'Descend to the Dudh Koshi valley. Easy pace, 8km on the trail.' },
  { day: 'Day 03', title: 'Climb · Namche', desc: 'Steep ascent to 3,440m. Acclimatization begins in earnest.' },
  { day: 'Day 04', title: 'Rest · Namche', desc: 'Acclimatization hike to Everest View Hotel. Heart-rate checks.' },
  { day: 'Day 05', title: 'Trek · Tengboche', desc: 'Cross the Hillary suspension bridge. First clear sight of Everest.' },
  { day: 'Day 06', title: 'Push · Dingboche', desc: 'Tree line ends. Above 4,000m now. Wind gets sharp, pace slows.' },
  { day: 'Day 07', title: 'Rest · Dingboche', desc: 'Second acclimatization. Short climb to Nangkartshang Peak.' },
  { day: 'Day 08', title: 'Reach · Base Camp', desc: '5,364m. Touch the glacier. Photos, then descent the same day.' },
];

export const testimonials = [
  {
    quote: 'Hardest two weeks of my life. Also the only ones I think about every single day.',
    name: 'Mara Lindqvist',
    detail: 'Annapurna Circuit · 2024',
  },
  {
    quote: 'Our guide read the weather like a book. Turned us around at 4,900m. Storm hit an hour later. That\'s the difference.',
    name: 'Theo Okafor',
    detail: 'Mont Blanc Traverse · 2023',
  },
  {
    quote: 'Six strangers on day one. Family by day five. Small groups aren\'t a marketing line here — they\'re the whole point.',
    name: 'Priya Raman',
    detail: 'Everest Base Camp · 2024',
  },
];
