/**
 * Facts checked on 6 October 2026.
 * Google place: Hurley Electrical, place id ChIJO3pzLl-xd0gRmLYza3oqAIk.
 * Companies House: 06389639. BSI licence KM 689027.
 * Old site copy from the archived hurleyltd.co.uk homepage image.
 * Do not add services, awards, or job photos that are not in these sources.
 */

export const site = {
  name: 'Hurley Electrical',
  legalName: 'Hurley Electrical Contractors Limited',
  companyNumber: '06389639',
  incorporated: '4 October 2007',
  sic: '43210',
  sicLabel: 'Electrical installation',
  url: 'https://creativemkstudios.github.io/HurleyElectrical',
  email: 'info@hurleyltd.co.uk',
  bsiEmail: 'kenton@hurleyltd.co.uk',
  phoneDisplay: '01234 857772',
  phoneTel: '+441234857772',
  fax: '01234 857234',
  tagline: 'A reputation for quality workmanship and excellent customer service.',
  description:
    'Hurley Electrical is based at 18 Singer Way, Kempston. We install, repair, and service electrical systems, including emergency lighting. Call 01234 857772.',
  googleRating: 3.5,
  googleRatingCount: 15,
  googleMaps: 'https://maps.app.goo.gl/UXtQSKNerUE2RTHZ8',
  googleCid: 'https://www.google.com/maps?cid=9871937088469055128',
  placeId: 'ChIJO3pzLl-xd0gRmLYza3oqAIk',
  companiesHouse: 'https://find-and-update.company-information.service.gov.uk/company/06389639',
  bsiListing:
    'https://www.bsigroup.com/en-GB/products-and-services/assessment-and-certification/validation-and-verification/product-directory-details/?license=KM%2B689027&productid=71452',
  bsiLicence: 'KM 689027',
  geo: { lat: 52.1070794, lng: -0.4998111 },
} as const;

export const address = {
  street: '18 Singer Way',
  estate: 'Woburn Road Industrial Estate',
  locality: 'Kempston',
  town: 'Bedford',
  region: 'Bedfordshire',
  postcode: 'MK42 7AE',
  country: 'United Kingdom',
  countryCode: 'GB',
} as const;

export const registeredOffice = {
  lines: ['Ground Floor, Baird House', 'Seebeck Place, Knowlhill', 'Milton Keynes', 'MK5 8FR'],
  oneLine: 'Ground Floor, Baird House, Seebeck Place, Knowlhill, Milton Keynes, MK5 8FR',
} as const;

export const hours = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/areas', label: 'Areas' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  points: string[];
  lede: string;
  paragraphs: string[];
};

export const services: Service[] = [
  {
    slug: 'electrical-installation',
    title: 'Electrical installation',
    short: 'New and replacement electrical work for homes and other buildings.',
    image: '/images/board.webp',
    width: 1400,
    height: 900,
    alt: 'Illustration of a distribution board with breakers and coloured cables. This is not a photo of a Hurley job.',
    points: [
      'Companies House lists the trade as electrical installation',
      'Homes, housing, and other buildings',
      'Ask what certificate the job will carry',
    ],
    lede: 'The company is set up to install electrical systems. That is the trade named at Companies House, and it is the work the firm has done from Kempston.',
    paragraphs: [
      'Hurley Electrical Contractors Limited was incorporated on 4 October 2007. Companies House lists the nature of the business as electrical installation, code 43210. The workshop customers use is 18 Singer Way, on the Woburn Road Industrial Estate in Kempston.',
      'Installation covers new circuits and replacement work in the buildings we are asked to attend. We do not publish a price list, because the cost depends on the building. Phone us, tell us the address, and we will say if we can look at it.',
      'Our old website showed an NICEIC Approved Contractor logo. A current NICEIC listing was not confirmed when this site was written. Before work starts, ask which certificate you will get, and who signs it.',
      'A customer review on Google names outlet and switch relocation as work we have done. Another review mentions extractor fans. Those are examples, not a full job list.',
    ],
  },
  {
    slug: 'emergency-lighting',
    title: 'Emergency lighting',
    short: 'Servicing of emergency lighting, as listed by BSI for Hurley Ltd in Kempston.',
    image: '/images/workshop.webp',
    width: 1600,
    height: 900,
    alt: 'Google Street View of the industrial units on Singer Way, Kempston, where Hurley Electrical is based.',
    points: [
      'Listed by BSI, licence KM 689027',
      'Servicing to SP203-4 and BS 5266-1',
      'Communal lighting checks have also been part of the work',
    ],
    lede: 'Emergency lights are the fittings that should come on when the mains fail, so people can see the way out. Hurley Ltd of Kempston is listed by BSI for the servicing of those systems.',
    paragraphs: [
      'The BSI product directory lists Hurley Ltd, Kempston, MK42 7AE, phone 01234 857772. The scope on that page is the maintenance, or servicing, of emergency lighting systems to SP203-4 version 2.2, BS 5266-1:2016, BS EN 1838:2013, and BS EN 50172:2004. The licence number shown is KM 689027. The email on that listing is kenton@hurleyltd.co.uk.',
      'In plain words, a service visit checks that the lights still work, that batteries and lamps are fit, and that the records are written up. The exact test depends on the building and on the standard that applies to it. Ask us what the visit will include before you book.',
      'Listings change. If you need this certificate, check the BSI page, or ask us to confirm it, before you rely on it.',
      'A Google review also says we have checked communal lighting in housing. That review is critical: the writer says lights were left off, day and night, after a visit. Read it in full on the reviews page. If you look after a block, ask how we test the lights and how we leave them.',
    ],
  },
  {
    slug: 'repairs',
    title: 'Repairs and small works',
    short: 'Faults, sockets, switches, fans, and repair work customers have written about.',
    image: '/images/checking-board.webp',
    width: 1400,
    height: 933,
    alt: 'Illustration of an electrician checking an open fuse board. This is not a photo of a Hurley engineer or a Hurley job.',
    points: [
      'Sockets and switches, including moves',
      'Extractor fans',
      'Repairs, including work described for bpha',
    ],
    lede: 'A lot of the calls are smaller than a full rewire. Customers have written about sockets, switches, fans, and repair visits.',
    paragraphs: [
      'Teresa Spadaccino’s Google review thanks Matthew Hurley and Jamie Collins, and the review record lists electrical outlet and switch relocation. Katie Dale’s Google review, from October 2021, is logged against outlet and switch installation. Manjit Jakku wrote in February 2022 about extractor fans, and said Jamie explained the work.',
      'Our old website said we work in partnership with bpha, the Bedford housing association. A later Google review from Colin Allen says we are contractors for bpha and that we do repairs and check communal lighting. That review is a complaint, not a thank-you. It is on the reviews page, unedited.',
      'Anish Shah wrote that the team clears up after the job. That is what one customer saw. It is not a slogan we can prove on every visit. If the place needs to be left a certain way, say so when you book.',
      'Google lists the phone line as open 24 hours. That does not mean a van is outside within the hour. Call 01234 857772, say what has failed, and we will tell you when someone can come.',
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  distance: string;
  direction: string;
  lede: string;
  paragraphs: string[];
};

export const areas: Area[] = [
  {
    slug: 'kempston',
    name: 'Kempston',
    distance: 'The workshop is in Kempston',
    direction: 'Woburn Road Industrial Estate',
    lede: 'Singer Way is on the Woburn Road Industrial Estate, on the south side of Kempston. This is the base.',
    paragraphs: [
      'The Google listing, and our old website, both give 18 Singer Way, Kempston, Bedford, MK42 7AE. Kempston High Street is about half a mile north of the unit, in a straight line. The estate sits near the A421, the road that runs along the south of Bedford.',
      'An earlier registered office was also in Kempston, at 2 Woburn Court on Railton Road. That is a filing address, not the workshop. The address to use for a visit or a letter about a job is Singer Way.',
      'Homes, shops, and the units on this estate are the calls we are closest to. Phone us with the street. If we can take it, we will book a time.',
    ],
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    distance: 'About 2.5 miles in a straight line',
    direction: 'North-east of the workshop',
    lede: 'Bedford town centre is a short drive from Singer Way, up through Kempston.',
    paragraphs: [
      'From the workshop to the middle of Bedford is about 2.5 miles in a straight line. The town has older terraces, flats, shops, and small offices. We do not cover every street by default. Tell us the address when you call.',
      'bpha, the housing association, is based in Bedford. Our old website said we work in partnership with them. A Google review also describes repair and communal-lighting work on their homes. If you are a tenant, the housing association is usually the first call. If you manage a building and want us direct, use the phone number on this site.',
      'The drive is local. We still check the diary before we promise a day.',
    ],
  },
  {
    slug: 'great-denham',
    name: 'Great Denham',
    distance: 'About 1.5 miles in a straight line',
    direction: 'West of Kempston',
    lede: 'Great Denham is the newer housing just west of Kempston, close to the workshop.',
    paragraphs: [
      'Great Denham is about 1.5 miles from 18 Singer Way in a straight line. Much of it was built in the last twenty years, so a lot of the houses are newer than the streets in old Kempston.',
      'Calls from estates like this are often sockets, lights, fans, and faults, not a full new supply. We still look at each job on its own. A newer house can have a simple fault or a bigger one.',
      'Say which street you are on. We will tell you if we can come, and when.',
    ],
  },
  {
    slug: 'elstow',
    name: 'Elstow',
    distance: 'About 1.5 miles in a straight line',
    direction: 'East of the workshop',
    lede: 'Elstow is the village to the east, on the south side of Bedford.',
    paragraphs: [
      'Elstow is about 1.5 miles from Singer Way in a straight line. The village has older houses, and newer homes toward the A6 and the southern edge of Bedford.',
      'It is close enough that we treat it as local to the workshop. It is still worth a phone call before you set aside a day. We would rather say no than miss a time.',
      'Tell us if the job is in a house, a flat, or a small commercial unit. The visit is planned around that.',
    ],
  },
  {
    slug: 'biddenham',
    name: 'Biddenham',
    distance: 'About 2.5 miles in a straight line',
    direction: 'North-west of Kempston',
    lede: 'Biddenham is the village west of Bedford, a short drive from Kempston.',
    paragraphs: [
      'Biddenham is about 2.5 miles from the workshop in a straight line. It is mostly houses, with newer streets on the side toward Great Denham.',
      'We can usually reach it without a long trip. “Usually” is not a promise for a set day. Call, and we will look at the diary.',
      'If the house is down a private drive or the parking is tight, say so. It saves a wasted visit.',
    ],
  },
  {
    slug: 'wootton',
    name: 'Wootton',
    distance: 'About 2 miles in a straight line',
    direction: 'South of Kempston',
    lede: 'Wootton is the village south of Kempston, about 2 miles from Singer Way in a straight line.',
    paragraphs: [
      'This is Wootton in Bedfordshire, not the Wootton near Northampton. From the industrial estate you head south. The village has older houses and newer streets.',
      'Two miles is close for us. We still ask you to phone first. Some weeks are full, and some jobs need a longer visit than a quick call-out.',
      'If you are on the edge of the village, toward Kempston or toward the fields, the address is enough. We know the area from the workshop.',
    ],
  },
  {
    slug: 'bromham',
    name: 'Bromham',
    distance: 'About 3 miles in a straight line',
    direction: 'North-west of Bedford',
    lede: 'Bromham is the furthest village on this list, north-west of Bedford.',
    paragraphs: [
      'Bromham is about 3 miles from Singer Way in a straight line, on the far side of Bedford. It is still local, but it is not next door to the workshop.',
      'We do not promise that every Bromham job is one we will take. Phone 01234 857772, say what you need, and we will tell you yes or no.',
      'If we cannot fit it in, you are better off knowing that on the call than waiting on a guess.',
    ],
  },
];

export type Review = {
  name: string;
  stars: number | null;
  date: string;
  text: string;
  note: string;
};

export const reviews: Review[] = [
  {
    name: 'Anish Shah',
    stars: 5,
    date: 'January 2023',
    text: 'The service from this company is truly amazing. Very professional staff who obviously enjoy the work. Never been let down. Always clear up after the job and work done to a gold standard.',
    note: 'Google review. Shown as about 3 years ago when this page was written.',
  },
  {
    name: 'Victor Liburd',
    stars: 5,
    date: 'November 2022',
    text: 'Very helpful staff who always go the extra mile to ensure that you get great service.',
    note: 'Google review, as copied by public directories of the same listing.',
  },
  {
    name: 'Manjit Jakku',
    stars: null,
    date: 'February 2022',
    text: "Good service, learnt about extractor fans, some info I didn't. Kno b4. Jamie was lovely",
    note: 'Google review text from public directories. Those copies did not show a star score, so none is shown here.',
  },
  {
    name: 'S. D.',
    stars: null,
    date: 'Date not shown',
    text: 'Always provides a quality job at a reasonable price!',
    note: 'This line is a highlighted quote on the Google listing. A directory of the same listing gives the initials S. D. No star score was attached to the quote we could read.',
  },
  {
    name: 'Teresa Spadaccino',
    stars: 5,
    date: '6 May 2021',
    text: 'I just wanted to say a Special Thanks to Matthew Hurley and Jamie Collins for a great professional service. Amazing work especially during COVID. More companies need to conduct business like this.',
    note: 'Google review. The review record also lists outlet and switch relocation, and marks responsiveness, punctuality, quality, and professionalism as positive.',
  },
  {
    name: 'Tara Broughton',
    stars: 1,
    date: '4 June 2021',
    text: 'Absolutely awful service provided. The person who carried out the work caused further damage to another room and didn’t even apologise for this was rude and did not care. Do not recommend using this company and definitely ensure you are in the property when work is being completed.',
    note: 'Google review. The review record marks responsiveness, quality, and professionalism as negative.',
  },
  {
    name: 'S S',
    stars: 1,
    date: '7 March 2024',
    text: 'The operator is absolutely rude on the phone. She didn’t let me to finish my word and kept trying to interrupt my word. I shouted at her: PLEASE LET ME FINISH MY WORD , WHY YOU ARE SO RUDE?!\nHorrible manner .\nIn addition, the engineer was not punctual.',
    note: 'Google review. The name on Google is S S. Shown as about 2 years ago when this page was written. The date is the one given by directories of this listing.',
  },
  {
    name: 'Colin Allen',
    stars: 2,
    date: 'About 6 years ago',
    text: 'They are contractors for BPHA  and do the repairs , check the lighting in communal lighting and then in daytime and NIGHTIME  we have no lighting on at all,\nSo having to report this to the housing association to get it repaired once again for there muck up and not leaving things alone when things are working fine and tenants are feeing safe at night,\nIf Hurley will not repair this to the original setting for our safety this will have to be reported to the heath and safety officer and the local  MP to look into for our care and safety',
    note: 'Google review, copied as it was written. Shown as about 6 years ago when this page was written. Google did not show a calendar date on the copy we read.',
  },
];

export const people = [
  {
    name: 'Matthew Hurley',
    role: 'Director',
    note: 'Matthew James Hurley was appointed a director on 31 October 2007. A Google review in 2021 thanks him by name.',
  },
  {
    name: 'Trevor Hurley',
    role: 'Director',
    note: 'Trevor Bernard Hurley is a director of Hurley Electrical Contractors Limited, listed at Companies House.',
  },
  {
    name: 'Kenton McKay',
    role: 'Electrical operations manager',
    note: 'His public LinkedIn profile names this role from April 2015. The BSI listing uses kenton@hurleyltd.co.uk.',
  },
] as const;

export const steps = [
  {
    n: '01',
    title: 'Call or write',
    text: 'Phone 01234 857772 or use the form. Tell us the address and what has gone wrong, or what you want fitted.',
  },
  {
    n: '02',
    title: 'We look at the job',
    text: 'We say if we can take it. If we need to see the building first, we book a time. We do not price a job we have not understood.',
  },
  {
    n: '03',
    title: 'We agree the work',
    text: 'You get a clear yes on what we will do, and when. Ask about the certificate before we start, not after.',
  },
  {
    n: '04',
    title: 'We do the work',
    text: 'We carry out the agreed work. Customers have said we clear up. If you need the place left a certain way, tell us at the start.',
  },
] as const;

export const faqs = [
  {
    q: 'Where are you based?',
    a: 'The workshop is 18 Singer Way, Woburn Road Industrial Estate, Kempston, Bedford, MK42 7AE. That is the address on Google and on our old website. The registered office at Companies House is in Milton Keynes. It is a filing address, not the workshop.',
  },
  {
    q: 'What hours are you open?',
    a: 'Google lists Hurley Electrical as open 24 hours, seven days a week. That is the listing. It is not a promise that someone will arrive within a set time. Phone us and we will tell you when we can come.',
  },
  {
    q: 'Which places do you cover?',
    a: 'The base is Kempston. Bedford, Great Denham, Elstow, Biddenham, Wootton, and Bromham are all a few miles away. Call with your street. If we are too busy, or the job is not one we do, we will say so.',
  },
  {
    q: 'What work do you do?',
    a: 'Electrical installation, repairs, sockets and switches, extractor fans, and servicing of emergency lighting. The emergency lighting servicing is the work named on the BSI listing for Hurley Ltd in Kempston. We do not advertise solar, EV chargers, or other trades we have not published.',
  },
  {
    q: 'What is the company number?',
    a: 'Hurley Electrical Contractors Limited, company number 06389639. It was incorporated on 4 October 2007. You can read the filing on the Companies House website.',
  },
  {
    q: 'What do the Google reviews say?',
    a: 'The Google listing shows 3.5 out of 5, from 15 ratings. Some reviews praise the work and the clear-up. Others complain about phone manner, timekeeping, damage, and communal lights left off. The written reviews we could read are on this site, and the live set is on Google.',
  },
] as const;

export function addressLines() {
  return `${address.street}, ${address.estate}, ${address.locality}, ${address.town} ${address.postcode}`;
}
