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

export type RideItem = {
  name: string;
  desc: string;
};

export type RidesData = {
  water: RideItem[];
  dry: RideItem[];
  new: RideItem[];
};

export const ridesData: RidesData = {
  water: [
    { name: "Tornado", desc: "A giant swirling funnel built for dramatic entries and high-energy splash exits." },
    { name: "Typhoon Tunnel", desc: "A dark enclosed tunnel ride with surging water and unexpected twists." },
    { name: "Crazy Cruise", desc: "A thrilling water cruise with twists, turns and guaranteed soaking." },
    { name: "Crazy Cruise Wavy", desc: "The wavy variant of the fan-favourite Crazy Cruise — more dips, more splash." },
    { name: "Aqua Trail", desc: "A flowing trail ride that winds through the heart of the water zone." },
    { name: "Thunder Cruise", desc: "High-speed cruise with thunderous water impact at every bend." },
    { name: "Rapid River Ride", desc: "A fast-moving channel that turns the park into a flowing water circuit." },
    { name: "Kids Pool", desc: "A calmer splash setting built for younger visitors and easy family supervision." },
    { name: "Harakkiri", desc: "One of the park's most heart-pounding vertical water slides — not for the faint-hearted." },
    { name: "Pendulam", desc: "A swinging pendulum water experience that pushes every angle of thrill." },
    { name: "Pushpak", desc: "A classic family raft ride with smooth flows and shared adventure." },
    { name: "Mini Crazy Cruise", desc: "The junior version of Crazy Cruise — perfect for kids and first-timers." },
    { name: "Wave Pool", desc: "A broad resort-like water surface for crowd energy, drifting, and all-day replay value." },
    { name: "Rain Dance", desc: "Music, water, and social energy combine into one of the park's most vibrant shared experiences." },
    { name: "50 Feet Water Fall", desc: "A dramatic 50-foot waterfall plunge — the park's most iconic water attraction." },
    { name: "Family Pool", desc: "A broad shared-water space for slower afternoons and group-friendly downtime." },
    { name: "Umbrella Pool", desc: "A sheltered pool with playful umbrella water jets and gentle flow." },
    { name: "Multi Lane (5 Track)", desc: "Five parallel racing lanes — pick yours and race to the bottom." },
    { name: "Multipurpose Water Play System", desc: "A 6-platform interactive play system with jets, buckets, and splash pads for all ages." },
  ],
  dry: [
    { name: "Cyclone Ride", desc: "A spinning cyclone ride with centrifugal force that builds with every rotation." },
    { name: "Vertex", desc: "A high-energy vertical spinning ride with rapid direction changes." },
    { name: "Duck Train", desc: "A charming train ride through the park — beloved by younger visitors." },
    { name: "Enterprises", desc: "A classic circular ride with full-circle rotation and rising intensity." },
    { name: "Striking Car", desc: "Bumper car action for all ages — pure controlled chaos on the track." },
    { name: "D.J. Room", desc: "A music-powered experience where beats and energy collide into one unforgettable atmosphere." },
    { name: "Horror House", desc: "Step inside if you dare — Flora Fantasia's thrilling haunted attraction." },
    { name: "16D Theater", desc: "A fully immersive 16D cinema experience with motion, wind, and sensory effects." },
    { name: "Free Fall", desc: "A clean suspense-and-release drop tower — maximum vertical drama, maximum scream." },
    { name: "Kangaroo", desc: "A bouncing kangaroo ride with rhythmic up-and-down motion loved by kids." },
    { name: "Surf Car", desc: "A surfboard-style ride that mimics ocean wave motion on land." },
    { name: "Giant Wheel", desc: "The park's iconic ferris wheel — panoramic views of Flora Fantasia and beyond." },
    { name: "Motor Bike", desc: "A motorbike simulation ride with realistic tilt and speed sensation." },
    { name: "Bull Ride", desc: "A mechanical bull experience that tests balance, grip, and nerve." },
    { name: "Rain Bow", desc: "A rainbow arc ride sweeping guests through colourful elevation changes." },
    { name: "Dragon Boat", desc: "A swinging dragon boat that builds momentum into a full pendulum arc." },
    { name: "Soft Play", desc: "A dedicated soft-play zone for the youngest visitors — safe, padded, and fun." },
    { name: "Monkey Jump", desc: "A bouncing jump attraction that sends guests soaring in safe, controlled leaps." },
    { name: "Helicopter Ride", desc: "A spinning helicopter ride where young pilots control their own altitude." },
    { name: "Various Types of Children Rides", desc: "A dedicated zone with multiple gentle rides designed for toddlers and young children." },
  ],
  new: [
    { name: "Cyclone Coaster", desc: "Kerala's newest and most thrilling coaster — fast directional changes and maximum adrenaline." },
    { name: "Aquatech Tank", desc: "A cutting-edge aquatic technology tank — one of the most unique experiences in Malabar." },
  ],
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
    stats: ["Wave Pool", "Rapid River Ride", "Rain Dance", "Aqua Trail"],
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
    stats: ["Cyclone Coaster", "Harakkiri", "Free Fall", "D.J. Room"],
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
    stats: ["Kids Pool", "Family Pool", "Duck Train", "Dragon Boat"],
  },
];

export const galleryItems = [
  {
    src: "/gallery-real/drone-overview.jpeg",
    title: "Park overview",
    alt: "Flora Fantasia amusement park full aerial view Malappuram Kerala",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: "/gallery-real/coaster-couple.jpeg", title: "Coaster thrill", alt: "Couple on coaster ride at Flora Fantasia amusement park", span: "" },
  { src: "/gallery-real/aquarium-kids.jpeg", title: "Family discovery", alt: "Children at Flora Fantasia Fish Aquarium Malappuram Kerala", span: "" },
  { src: "/gallery-real/drop-tower-group.jpeg", title: "Sky drop view", alt: "Group on drop tower ride at Flora Fantasia Kerala", span: "" },
  { src: "/gallery-real/yellow-slide-top.jpeg", title: "Water geometry", alt: "Yellow water slide at Flora Fantasia water park Malappuram", span: "" },
  { src: "/gallery-real/yellow-slide-pool.jpeg", title: "Splash pattern", alt: "Water slide splash pool at Flora Fantasia amusement park", span: "" },
  {
    src: "/gallery-real/tube-slide-action.jpeg",
    title: "Tube ride action",
    alt: "Tube water slide ride at Flora Fantasia Kerala",
    span: "md:col-span-2",
  },
  { src: "/gallery-real/family-slide-front.jpeg", title: "Slide rush", alt: "Family enjoying water slides at Flora Fantasia amusement park Kerala", span: "" },
  {
    src: "/gallery-real/slide-lanes-aerial.jpeg",
    title: "Lanes and river edge",
    alt: "Multi-lane water slides aerial view at Flora Fantasia park",
    span: "md:col-span-2",
  },
  { src: "/gallery-real/splash-raft.jpeg", title: "Splash landing", alt: "Splash raft water ride at Flora Fantasia Valancheri", span: "" },
  { src: "/gallery-real/family-raft-corner.jpeg", title: "Family raft", alt: "Family on raft water ride at Flora Fantasia amusement park", span: "" },
  { src: "/gallery-real/green-slide-raft.jpeg", title: "Green slide ride", alt: "Green water slide raft ride at Flora Fantasia Kerala", span: "" },
  { src: "/gallery-real/pic1.JPG", title: "Park moments", alt: "Flora Fantasia amusement park moments Valancheri Kerala", span: "" },
  { src: "/gallery-real/pic2.JPG", title: "Park moments", alt: "Flora Fantasia amusement park rides Malappuram", span: "" },
  { src: "/gallery-real/pic3.JPG", title: "Park moments", alt: "Flora Fantasia family fun park Kerala", span: "" },
  { src: "/gallery-real/pic4.JPG", title: "Park moments", alt: "Flora Fantasia water park attractions Kerala", span: "" },
  { src: "/gallery-real/pic5.jpg", title: "Park moments", alt: "Flora Fantasia thrill rides Malappuram", span: "" },
  { src: "/gallery-real/pic6.jpg", title: "Park moments", alt: "Flora Fantasia park experience Valancheri", span: "" },
  { src: "/gallery-real/pic7.JPG", title: "Park moments", alt: "Flora Fantasia amusement park Kerala visitors", span: "" },
  { src: "/gallery-real/pic8.JPG", title: "Park moments", alt: "Flora Fantasia family outing Malappuram Kerala", span: "" },
  { src: "/gallery-real/pic9.JPG", title: "Park moments", alt: "Flora Fantasia best amusement park Malabar", span: "" },
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
  { value: "500K+", label: "Happy Visitors" },
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
    text: "The Fish Aquarium genuinely surprised us - we didn't expect it to be that good. Kids absolutely loved it. Flora Fantasia is the complete package for a family day out.",
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
    text: "In Kerala's evolving tourism landscape, Flora Fantasia has carved a path of its own. Over the years, it has grown into one of the state's most loved amusement destinations, where joy, safety, and unforgettable memories come together. Designed for both children and families, the mission is simple: create moments that stay with you forever. With complete entertainment experiences and thoughtfully designed attractions, every visit becomes a story worth remembering.",
    image: "/gallery-real/family-slide-front.jpeg",
    imageAlt: "Family enjoying water slides at Flora Fantasia amusement park Kerala",
  },
  {
    eyebrow: "Recognition",
    title: "Among the Highest in Visitor Footfall — Ranked #1 in Government Records.",
    text: "In the financial year 2024–25, Flora Fantasia stood out as one of Kerala's top-performing tourism destinations. With a significant rise in visitors, the park continues to set new benchmarks in experience and engagement. World-class safety systems, modern rides, and a truly family-friendly environment have made Flora Fantasia a preferred choice for thousands.",
    image: "/gallery-real/drone-overview.jpeg",
    imageAlt: "Flora Fantasia amusement park aerial view from drone Valancheri Kerala",
  },
  {
    eyebrow: "Aquarium Experience",
    title: "A World of Wonders Beneath the Surface.",
    text: "Step into a beautifully curated aquatic world featuring a vibrant collection of marine life. Designed with modern facilities, this immersive space brings families closer to the magic of underwater ecosystems. From exotic fish to fascinating aquatic species, every corner invites curiosity, discovery, and awe.",
    image: "/gallery-real/aquarium-kids.jpeg",
    imageAlt: "Children at Flora Fantasia Fish Aquarium Malappuram Kerala",
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
    "Visitors can store their personal belongings in our secure locker facilities, ensuring a worry-free experience. Children must be accompanied by adults at all times, and minimal height requirements must be met for some rides. Swimwear is mandatory while using the pools, and visitors are requested to take care of waste and maintain the park's eco-friendly environment.",
    "Join us at Flora Fantasia for a day filled with fun, adventure, and unforgettable memories. Book your tickets today and experience the thrill of our rides and attractions.",
  ],
};

export const destinationCopy = {
  title: "Unleash Your Inner Child!",
  subtitle: "At Flora Fantasia Amusement Park, best tourist spot in Malappuram.",
  text: "As a top tourist destination in Malappuram, Flora Fantasia offers an unforgettable experience for visitors from near and far. Whether you're planning a family outing, a school trip, or a corporate event, we have the perfect setting to create lasting memories. Located in the heart of Malabar, Flora Fantasia Amusement Park is the perfect place for tourists and locals alike to enjoy a day of fun with family and friends.",
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
