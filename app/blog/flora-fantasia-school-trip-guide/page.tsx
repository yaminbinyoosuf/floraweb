import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flora Fantasia School Trip Guide 2025 — Everything Teachers Need to Know",
  description:
    "Planning a school trip to Flora Fantasia Malappuram? Complete guide for teachers — group booking, safety rules, ride suitability by age, timings, and tips for a perfect school outing.",
  keywords: ["Flora Fantasia school trip", "school trip Malappuram", "amusement park school trip Kerala", "Flora Fantasia group booking", "school excursion Malappuram"],
  alternates: { canonical: "https://www.florafantasia.in/blog/flora-fantasia-school-trip-guide" },
  openGraph: {
    title: "Flora Fantasia School Trip Guide 2025",
    description: "Complete guide for teachers planning a school trip to Flora Fantasia, Malappuram.",
    images: ["/gallery-real/family-slide-front.jpeg"],
    url: "https://www.florafantasia.in/blog/flora-fantasia-school-trip-guide",
  },
};

const WA_SCHOOL = "https://wa.me/919745239003?text=Hi%2C%20I%20want%20to%20book%20a%20school%20group%20trip%20to%20Flora%20Fantasia!";

const toc = [
  { id: "why-schools", label: "Why Schools Choose Flora Fantasia" },
  { id: "how-to-book", label: "How to Book a School Group" },
  { id: "rides-by-age", label: "Best Rides by Age Group" },
  { id: "safety-rules", label: "Safety Rules" },
  { id: "what-to-bring", label: "What to Bring" },
  { id: "facilities", label: "Facilities Available" },
  { id: "sample-plan", label: "Sample Day Plan" },
  { id: "faq", label: "FAQs" },
];

export default function Post2() {
  return (
    <div className="blog-container">
      <article className="blog-content">
        <span className="blog-eyebrow">School Trip Guide</span>

        <h1>Flora Fantasia School Trip Guide 2025 — Everything Teachers Need to Know</h1>

        <p className="blog-meta">Updated April 2025 · 5 min read · For Schools &amp; Educational Groups</p>

        <Image
          src="/gallery-real/family-slide-front.jpeg"
          alt="School students enjoying water slides at Flora Fantasia amusement park Malappuram Kerala school trip"
          width={900}
          height={506}
          className="blog-hero-img"
          priority
        />

        <p>
          Flora Fantasia Amusement Park in Valancheri, Malappuram is one of Kerala&apos;s most popular school trip destinations. Every year, thousands of students from schools across Malappuram, Kozhikode, Palakkad, and Thrissur visit the park for an unforgettable day of fun, learning, and adventure.
        </p>
        <p>
          If you&apos;re a teacher or school coordinator planning a trip, this guide covers everything you need — from booking and safety to ride recommendations by age group.
        </p>

        <h2 id="why-schools">Why Schools Choose Flora Fantasia</h2>
        <ul>
          <li>Safe, professionally managed environment with trained staff</li>
          <li>Lifeguards on duty at every water ride and pool</li>
          <li>40+ rides suitable for different age groups and abilities</li>
          <li><strong>Fish Aquarium</strong> — an educational and entertaining experience for students</li>
          <li>Clean facilities, changing rooms, and secure locker storage</li>
          <li>Easy group entry management</li>
          <li>Located centrally in Malappuram — accessible from across Malabar</li>
          <li>Affordable pricing from ₹600 per student</li>
        </ul>

        <h2 id="how-to-book">How to Book a School Group Trip</h2>
        <p>Booking for school groups is simple and handled directly via WhatsApp.</p>
        <ul>
          <li><strong>Step 1:</strong> WhatsApp the Flora Fantasia team at <a href="tel:+919745239003">+91 97452 39003</a></li>
          <li><strong>Step 2:</strong> Share your school name, number of students, and preferred date</li>
          <li><strong>Step 3:</strong> Receive confirmation and entry details</li>
          <li><strong>Step 4:</strong> Arrive at the park, present confirmation, and enter</li>
        </ul>

        <div className="tip-box">
          <strong>Tip for Teachers —</strong> Book at least 1 week in advance for large groups of 50+ students. Weekdays are less crowded and easier for group management than weekends.
        </div>

        <div className="blog-cta-box">
          <h3>Book Your School Group Now</h3>
          <p>WhatsApp the team for instant confirmation and group booking assistance.</p>
          <a href={WA_SCHOOL} target="_blank" rel="noopener noreferrer" className="blog-cta-btn">
            WhatsApp for Group Booking →
          </a>
        </div>

        <h2 id="rides-by-age">Best Rides for School Trips by Age Group</h2>

        <h3>Primary School Students (Ages 5–10)</h3>
        <p>Younger students have plenty of age-appropriate rides at Flora Fantasia:</p>
        <ul>
          <li><strong>Duck Train</strong> — A gentle park tour that younger kids love</li>
          <li><strong>Kids Pool</strong> — A safe, shallow splash zone with supervision</li>
          <li><strong>Helicopter Ride</strong> — Kids control their own helicopter ride</li>
          <li><strong>Monkey Jump</strong> — Bouncing fun in a safe environment</li>
          <li><strong>Soft Play Zone</strong> — Padded play area for toddlers and young children</li>
          <li><strong>Mini Crazy Cruise</strong> — Junior version of the popular Crazy Cruise</li>
          <li><strong>Kangaroo</strong> — A gentle bouncing ride loved by young visitors</li>
          <li><strong>Family Pool</strong> — Shallow, supervised pool for group water play</li>
        </ul>

        <h3>High School Students (Ages 11–17)</h3>
        <p>Older students can enjoy the full range of Flora Fantasia&apos;s rides:</p>
        <ul>
          <li><strong>Cyclone Coaster</strong> — The newest and most thrilling ride at the park</li>
          <li><strong>Harakkiri</strong> — Kerala&apos;s most intense vertical water slide</li>
          <li><strong>Free Fall</strong> — A drop tower experience with maximum adrenaline</li>
          <li><strong>Tornado</strong> — Giant swirling funnel slide</li>
          <li><strong>Wave Pool</strong> — Perfect for groups to enjoy together</li>
          <li><strong>Rain Dance</strong> — Music and water — always a student favourite</li>
          <li><strong>50 Feet Water Fall</strong> — The park&apos;s iconic plunge ride</li>
          <li><strong>Horror House</strong> — A must-visit for thrill-seeking students</li>
          <li><strong>16D Theater</strong> — Immersive sensory cinema experience</li>
        </ul>

        <h3>The Fish Aquarium — Educational Value for All Ages</h3>
        <p>
          The Fish Aquarium is one of Flora Fantasia&apos;s most valuable attractions for school trips. Students get to explore a world of exotic marine life in a beautifully designed aquatic environment. For science students especially, the aquarium offers real-world exposure to marine ecosystems, aquatic species, and underwater biology.
        </p>

        <Image
          src="/gallery-real/aquarium-kids.jpeg"
          alt="School children at Flora Fantasia Fish Aquarium Malappuram — educational school trip activity Kerala"
          width={900}
          height={600}
          style={{ width: "100%", borderRadius: "16px", margin: "24px 0" }}
        />

        <h2 id="safety-rules">Safety Rules for School Groups</h2>
        <p>Flora Fantasia maintains strict safety standards. Teachers should brief students on these rules before arrival:</p>
        <ul>
          <li>Students must be accompanied by a teacher or supervisor at all times</li>
          <li>Minimum height requirements apply for certain rides — staff will guide on-site</li>
          <li>Swimwear is mandatory for all water rides and pools</li>
          <li>Personal belongings must be stored in the park&apos;s locker facilities</li>
          <li>No running near pool areas</li>
          <li>Children below a certain height must use the dedicated kids zone rides</li>
          <li>Teachers should divide students into manageable groups with one supervisor per group</li>
        </ul>

        <h2 id="what-to-bring">What to Bring for a School Trip to Flora Fantasia</h2>
        <ul>
          <li>Swimwear (mandatory for water rides)</li>
          <li>Change of dry clothes and towel</li>
          <li>Slippers or sandals (easy to remove and wear)</li>
          <li>Sunscreen for outdoor areas</li>
          <li>Water bottle — stay hydrated</li>
          <li>Small bag for personal items (can be stored in lockers)</li>
          <li>Snacks or meal budget — food is available at the park</li>
        </ul>

        <h2 id="facilities">Facilities Available for School Groups</h2>
        <table className="info-table">
          <thead><tr><th>Facility</th><th>Available</th></tr></thead>
          <tbody>
            <tr><td>Locker rooms</td><td>Yes — multiple sizes</td></tr>
            <tr><td>Changing rooms</td><td>Yes — for both boys and girls</td></tr>
            <tr><td>Food &amp; beverages</td><td>Yes — inside the park</td></tr>
            <tr><td>Drinking water</td><td>Yes</td></tr>
            <tr><td>First aid</td><td>Yes — on-site</td></tr>
            <tr><td>Restrooms</td><td>Yes — throughout the park</td></tr>
            <tr><td>Parking for buses</td><td>Yes</td></tr>
          </tbody>
        </table>

        <h2 id="sample-plan">Flora Fantasia School Trip — Sample Day Plan</h2>
        <table className="info-table">
          <thead><tr><th>Time</th><th>Activity</th></tr></thead>
          <tbody>
            <tr><td>11:00 AM</td><td>Arrival and entry</td></tr>
            <tr><td>11:15 AM</td><td>Group briefing + locker setup</td></tr>
            <tr><td>11:30 AM</td><td>Water rides — Kids Pool, Wave Pool, Rain Dance</td></tr>
            <tr><td>1:00 PM</td><td>Lunch break at park food area</td></tr>
            <tr><td>2:00 PM</td><td>Fish Aquarium visit</td></tr>
            <tr><td>2:45 PM</td><td>Dry rides — 16D Theater, Striking Car, Duck Train</td></tr>
            <tr><td>4:00 PM</td><td>Free time — students choose favourite rides</td></tr>
            <tr><td>5:30 PM</td><td>Group assembly and departure</td></tr>
          </tbody>
        </table>

        <h2 id="faq">Frequently Asked Questions for School Trips</h2>

        <h3>Is Flora Fantasia suitable for primary school students?</h3>
        <p>Yes. Flora Fantasia has a dedicated kids zone with gentle rides suitable for primary school students. Lifeguards are present at all water attractions.</p>

        <h3>Are group discounts available for schools?</h3>
        <p>Contact the Flora Fantasia team directly via WhatsApp for group pricing and arrangements. WhatsApp: <a href="tel:+919745239003">+91 97452 39003</a></p>

        <h3>How far is Flora Fantasia from major cities?</h3>
        <p>Flora Fantasia is located in Valancheri, Malappuram — approximately 20km from Malappuram city, 45km from Kozhikode, 70km from Palakkad, and 110km from Thrissur. <Link href="/blog/best-route-to-flora-fantasia">See complete route guide →</Link></p>

        <h3>Is the park open on weekdays?</h3>
        <p>Yes. Flora Fantasia is open 7 days a week from 11AM to 6PM. Weekdays are ideal for school trips as crowds are smaller and group management is easier.</p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(11,24,34,0.1)", margin: "40px 0" }} />

        <p>
          Flora Fantasia has been a trusted destination for school trips across Kerala for over 13 years. With the perfect mix of educational attractions like the Fish Aquarium, thrilling rides for older students, and safe zones for younger children — it&apos;s the ideal choice for your next school outing in Malappuram.
        </p>

        <div className="blog-cta-box">
          <h3>Plan Your School Trip Today</h3>
          <p>WhatsApp for instant group booking confirmation. Open daily 11AM–6PM.</p>
          <a href={WA_SCHOOL} target="_blank" rel="noopener noreferrer" className="blog-cta-btn">
            Book School Trip via WhatsApp →
          </a>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        <div className="blog-sidebar-card">
          <h4>In This Guide</h4>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="toc-link">{item.label}</a>
          ))}
        </div>
        <div className="blog-sidebar-cta">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "16px", marginBottom: "8px" }}>
            Book School Group
          </p>
          <p>WhatsApp for instant group confirmation</p>
          <a href={WA_SCHOOL} target="_blank" rel="noopener noreferrer">
            WhatsApp Us Now
          </a>
        </div>
      </aside>
    </div>
  );
}
