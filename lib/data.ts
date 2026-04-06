export const WHATSAPP_LINK = "https://wa.me/919745239003";
export const DIRECTIONS_LINK = "https://maps.app.goo.gl/wx1f5aV62VQBFDqz6";
export const BOOKING_EMAIL = "florafantasiapark@gmail.com";
export const HERO_IMAGE = "/gallery-real/drone-overview.jpeg";

export type Zone = {
  id: string;
  label: string;
  title: string;
  description: string;
  storyLead: string;
  momentTitle: string;
  accent: string;
  ambient: string;
  gradient: string;
  stats: string[];
};

export type RideCategory = "Water Rides" | "Thrill Rides" | "Family Rides";

export type Ride = {
  title: string;
  category: RideCategory;
  image: string;
  blurb: string;
};

export const zones: Zone[] = [
  {
    id: "water-world",
    label: "Water World",
    title: "A drifting blue world of waves, slides, and splash trails.",
    description:
      "The journey opens inside a cooler palette with glassy reflections, fluid motion, and a slower pulse that feels like crossing into a tropical water district.",
    storyLead: "The day begins with water, laughter, and the first feeling of escape.",
    momentTitle: "Arrival Story",
    accent: "#59d0ff",
    ambient: "rgba(89, 208, 255, 0.24)",
    gradient:
      "linear-gradient(180deg, rgba(242,250,255,0.98) 0%, rgba(221,244,255,0.92) 58%, rgba(239,250,255,0.98) 100%)",
    stats: ["Wave Pool", "Rapid River", "Rain Dance", "Aqua Play"],
  },
  {
    id: "thrill-zone",
    label: "Thrill Zone",
    title: "The pulse sharpens with speed, drop, and dark kinetic light.",
    description:
      "Transitions hit faster here. Motion tightens, shadows deepen, and every reveal is framed to feel like the build-up before a launch.",
    storyLead: "Then the energy rises and the park turns into pure momentum.",
    momentTitle: "Pulse Story",
    accent: "#ff7a18",
    ambient: "rgba(255, 180, 92, 0.22)",
    gradient:
      "linear-gradient(180deg, rgba(255,247,240,0.98) 0%, rgba(255,236,220,0.92) 48%, rgba(255,249,242,0.98) 100%)",
    stats: ["Rush Coaster", "Sky Spin", "Drop Orbit", "Night Energy"],
  },
  {
    id: "family-zone",
    label: "Family Zone",
    title: "The story softens into warm light, play, and shared moments.",
    description:
      "The final zone opens up. Space breathes, tones warm up, and the pace becomes more welcoming for families exploring the park together.",
    storyLead: "Finally, the park opens into memory-making spaces for everyone together.",
    momentTitle: "Memory Story",
    accent: "#ffcf73",
    ambient: "rgba(255, 222, 154, 0.24)",
    gradient:
      "linear-gradient(180deg, rgba(255,252,241,0.98) 0%, rgba(255,244,215,0.92) 52%, rgba(255,250,238,0.98) 100%)",
    stats: ["Kids Pool", "Family Pool", "Carousel", "Junior Wheels"],
  },
];

export const rides: Ride[] = [
  {
    title: "Tornado",
    category: "Water Rides",
    image: "/rides/tornado.svg",
    blurb: "A giant swirling funnel built for dramatic entries and high-energy splash exits.",
  },
  {
    title: "Wave Pool",
    category: "Water Rides",
    image: "/rides/wave-pool.svg",
    blurb: "A broad resort-like water surface for crowd energy, drifting moments, and all-day replay value.",
  },
  {
    title: "Rapid River",
    category: "Water Rides",
    image: "/rides/rapid-river.svg",
    blurb: "A faster moving channel that turns the park into a flowing water circuit.",
  },
  {
    title: "Rain Dance",
    category: "Water Rides",
    image: "/rides/rain-dance.svg",
    blurb: "Music, water, and social energy combine into one of the park’s most vibrant shared experiences.",
  },
  {
    title: "Kids Pool",
    category: "Water Rides",
    image: "/rides/kids-pool.svg",
    blurb: "A calmer splash setting built for younger visitors and easy family supervision.",
  },
  {
    title: "Sky Spin",
    category: "Thrill Rides",
    image: "/rides/sky-spin.svg",
    blurb: "High-elevation motion, sweeping arcs, and a skyline-first thrill profile.",
  },
  {
    title: "Drop Orbit",
    category: "Thrill Rides",
    image: "/rides/drop-orbit.svg",
    blurb: "A clean suspense-and-release ride experience with strong vertical drama.",
  },
  {
    title: "Rush Coaster",
    category: "Thrill Rides",
    image: "/rides/rush-coaster.svg",
    blurb: "Fast directional changes and coaster energy for guests chasing pure adrenaline.",
  },
  {
    title: "Family Pool",
    category: "Family Rides",
    image: "/rides/family-pool.svg",
    blurb: "A broad shared-water space for slower afternoons and group-friendly downtime.",
  },
  {
    title: "Fantasy Carousel",
    category: "Family Rides",
    image: "/rides/fantasy-carousel.svg",
    blurb: "A nostalgic centerpiece ride with softer pacing and classic visual charm.",
  },
  {
    title: "Junior Wheels",
    category: "Family Rides",
    image: "/rides/junior-wheels.svg",
    blurb: "A playful lower-intensity attraction designed for younger explorers.",
  },
  {
    title: "Waterfall Plaza",
    category: "Family Rides",
    image: "/rides/waterfall.svg",
    blurb: "A cooling visual landmark that anchors the park with a tropical, destination feel.",
  },
];

export const rideCategories: RideCategory[] = [
  "Water Rides",
  "Thrill Rides",
  "Family Rides",
];

export const galleryItems = [
  {
    src: "/gallery-real/drone-overview.jpeg",
    title: "Park overview",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: "/gallery-real/coaster-couple.jpeg", title: "Coaster thrill", span: "" },
  { src: "/gallery-real/aquarium-kids.jpeg", title: "Family discovery", span: "" },
  { src: "/gallery-real/drop-tower-group.jpeg", title: "Sky drop view", span: "" },
  { src: "/gallery-real/yellow-slide-top.jpeg", title: "Water geometry", span: "" },
  { src: "/gallery-real/yellow-slide-pool.jpeg", title: "Splash pattern", span: "" },
  {
    src: "/gallery-real/tube-slide-action.jpeg",
    title: "Tube ride action",
    span: "md:col-span-2",
  },
  { src: "/gallery-real/family-slide-front.jpeg", title: "Slide rush", span: "" },
  {
    src: "/gallery-real/slide-lanes-aerial.jpeg",
    title: "Lanes and river edge",
    span: "md:col-span-2",
  },
  { src: "/gallery-real/splash-raft.jpeg", title: "Splash landing", span: "" },
  { src: "/gallery-real/family-raft-corner.jpeg", title: "Family raft", span: "" },
  { src: "/gallery-real/green-slide-raft.jpeg", title: "Green slide ride", span: "" },
  { src: "/gallery-real/pic1.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic2.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic3.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic4.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic5.jpg", title: "Park moments", span: "" },
  { src: "/gallery-real/pic6.jpg", title: "Park moments", span: "" },
  { src: "/gallery-real/pic7.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic8.JPG", title: "Park moments", span: "" },
  { src: "/gallery-real/pic9.JPG", title: "Park moments", span: "" },
];

export const pricingTiers = [
  {
    label: "Children",
    price: "₹600",
    note: "Play-first access for younger visitors and family splash days.",
  },
  {
    label: "Adult",
    price: "₹800",
    note: "The full park ticket with the strongest value for an all-zone day.",
    featured: true,
  },
  {
    label: "Senior",
    price: "₹600",
    note: "Comfortable entry for multi-generation outings and slower explorations.",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/florafantasiaamusementpark_",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/florafantasiavengaad/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@florafantasiaamusementpark",
  },
];

export const parkStats = [
  { value: "13+", label: "Years Running" },
  { value: "40+", label: "Rides & Zones" },
  { value: "#1", label: "Kerala Footfall" },
  { value: "5M+", label: "Happy Visitors" },
];

export const testimonials = [
  {
    text: "Best amusement park in Kerala - hands down. We've been coming here for 6 years straight and it just keeps getting better. The water zone alone is worth every rupee.",
    name: "Rahul M.",
    location: "Kozhikode",
  },
  {
    text: "Took our school group of 80 students here and everything was so well organized. The staff were incredibly helpful and the rides are maintained so well. Will definitely return.",
    name: "Priya Teacher",
    location: "Tirur, Malappuram",
  },
  {
    text: "The aquarium section genuinely surprised us - we didn't expect it to be that good. Kids absolutely loved it. Flora Fantasia is the complete package for a family day out.",
    name: "Santhosh K.",
    location: "Manjeri",
  },
  {
    text: "Came all the way from Thrissur for this. Totally worth the drive. The park is clean, the rides are exciting, and the food options are good too. The wave pool is fantastic.",
    name: "Anitha V.",
    location: "Thrissur",
  },
  {
    text: "Our family trip here was one of our best holidays. My parents enjoyed the family zone while my kids went crazy on the water slides. Something for everyone - literally.",
    name: "Mohammed F.",
    location: "Malappuram",
  },
];

export const footerCta = {
  eyebrow: "Book Now",
  title: "Make your holidays unforgettable.",
  subtitle: "Flora Fantasia — Valancheri, Malappuram. Open daily 11am - 6pm.",
  note: "Instant WhatsApp confirmation · No booking fee",
};

export const editorialPanels = [
  {
    eyebrow: "Brand Story",
    title: "13 Years of Pure Excitement in a World of Wonder…",
    text: "In Kerala’s evolving tourism landscape, Flora Fantasia has carved a path of its own. Over the years, it has grown into one of the state’s most loved amusement destinations, where joy, safety, and unforgettable memories come together. Designed for both children and families, the mission is simple: create moments that stay with you forever. With complete entertainment experiences and thoughtfully designed attractions, every visit becomes a story worth remembering.",
    image: "/gallery-real/family-slide-front.jpeg",
  },
  {
    eyebrow: "Recognition",
    title: "Among the Highest in Visitor Footfall — Ranked #1 in Government Records.",
    text: "In the financial year 2024–25, Flora Fantasia stood out as one of Kerala’s top-performing tourism destinations. With a significant rise in visitors, the park continues to set new benchmarks in experience and engagement. World-class safety systems, modern rides, and a truly family-friendly environment have made Flora Fantasia a preferred choice for thousands.",
    image: "/gallery-real/drone-overview.jpeg",
  },
  {
    eyebrow: "Aquarium Experience",
    title: "A World of Wonders Beneath the Surface.",
    text: "Step into a beautifully curated aquatic world featuring a vibrant collection of marine life. Designed with modern facilities, this immersive space brings families closer to the magic of underwater ecosystems. From exotic fish to fascinating aquatic species, every corner invites curiosity, discovery, and awe.",
    image: "/gallery-real/aquarium-kids.jpeg",
  },
];

export const parkHours = [
  { day: "Friday", hours: "11 am–6 pm" },
  { day: "Saturday", hours: "11 am–6 pm" },
  { day: "Sunday (Easter)", hours: "11 am–6 pm" },
  { day: "Monday", hours: "11 am–6 pm" },
  { day: "Tuesday", hours: "11 am–6 pm" },
  { day: "Wednesday", hours: "11 am–6 pm" },
  { day: "Thursday", hours: "11 am–6 pm" },
];

export const bookingCategories = [
  "General Visit",
  "Family Outing",
  "School Trip",
  "Corporate Event",
  "Tourist Group",
];

export const featureHighlights = [
  "Family-friendly environment",
  "Locker and changing room facilities",
  "Clean and well-maintained environment",
  "Exciting wave pools and water rides",
  "Relaxing and adventurous activities",
  "Safety measures and trained lifeguards",
  "Variety of food and beverage options",
];

export const aboutExperience = {
  title: "Your Perfect Destination for Family Fun and Adventure!",
  subtitle: "You will remember this wonderful holiday!",
  paragraphs: [
    "Welcome to Flora Fantasia, the ultimate family amusement park located in the heart of Malappuram. Our park offers a wide range of thrilling rides and attractions for visitors of all ages.",
    "At Flora Fantasia, we pride ourselves on being an eco-friendly amusement park, surrounded by lush greenery and beautiful landscapes. We strive to provide a fun and safe environment for our visitors while also preserving the natural beauty of our surroundings.",
    "Our park features a variety of exciting rides, including water slides, roller coasters, and carnival games. We also offer a range of dining options, including local cuisine and international favorites.",
    "Visitors can store their personal belongings in our secure locker facilities, ensuring a worry-free experience. Children must be accompanied by adults at all times, and minimal height requirements must be met for some rides. Swimwear is mandatory while using the pools, and visitors are requested to take care of waste and maintain the park’s eco-friendly environment.",
    "Join us at Flora Fantasia for a day filled with fun, adventure, and unforgettable memories. Book your tickets today and experience the thrill of our rides and attractions.",
  ],
};

export const destinationCopy = {
  title: "Unleash Your Inner Child!",
  subtitle: "At Flora Fantasia Amusement Park, best tourist spot in Malappuram.",
  text: "As a top tourist destination in Malappuram, Flora Fantasia offers an unforgettable experience for visitors from near and far. Whether you’re planning a family outing, a school trip, or a corporate event, we have the perfect setting to create lasting memories. Located in the heart of Malabar, Flora Fantasia Amusement Park is the perfect place for tourists and locals alike to enjoy a day of fun with family and friends.",
  closing:
    "Make your holidays unforgettable with Flora Fantasia. Our commitment to sustainable practices and environmental stewardship means every visit supports a responsible and eco-friendly destination.",
};

export const faqs = [
  {
    question: "What are the park's hours of operation?",
    answer:
      "The working hours of Flora Fantasia amusement park in Malappuram are from 11 am to 6 pm.",
  },
  {
    question: "How much is admission to the park?",
    answer:
      "Ticket prices and admission details can be found in the Tickets section. The current website experience also highlights the main pricing options for children, adults, and seniors.",
  },
  {
    question: "Are there any discounts available for admission, such as for children or seniors?",
    answer:
      "Yes. Flora Fantasia offers discounts on admission for children and seniors.",
  },
  {
    question: "Are there lockers available to store personal belongings while on rides?",
    answer:
      "Yes. Flora Fantasia provides lockers in varying sizes so guests can safely store personal belongings while enjoying rides and attractions.",
  },
  {
    question: "What forms of payment are accepted at the park?",
    answer:
      "Flora Fantasia accepts cash, credit cards, mobile payments like Google Pay and Apple Pay, and other UPI payments.",
  },
  {
    question: "Are there any age restrictions for entering the park or riding certain rides?",
    answer:
      "There are no specific age restrictions for entering the park, but some rides do have minimum height requirements to ensure guest safety.",
  },
];
