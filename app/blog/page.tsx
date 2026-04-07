import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flora Fantasia Blog — Park Guides, Trip Tips & Attractions",
  description:
    "Read Flora Fantasia's official blog for travel guides, school trip planning tips, route directions, and park attraction highlights. Your complete resource for planning the perfect visit.",
  keywords: ["Flora Fantasia blog", "amusement park guide Kerala", "Flora Fantasia travel tips", "Malappuram family trip guide"],
  alternates: { canonical: "https://www.florafantasia.in/blog" },
};

const posts = [
  {
    slug: "best-amusement-park-malappuram",
    category: "Park Guide",
    title: "The Best Amusement Park in Malappuram — A Complete 2025 Guide",
    excerpt: "With over 40 rides, Fish Aquarium, and 13 years of family memories, Flora Fantasia stands as Malabar's premier amusement destination. Everything you need to know.",
    image: "/gallery-real/drone-overview.jpeg",
    alt: "Aerial view of Flora Fantasia amusement park Malappuram Kerala",
    readTime: "6 min read",
    date: "April 2025",
  },
  {
    slug: "flora-fantasia-school-trip-guide",
    category: "School Trips",
    title: "Flora Fantasia School Trip Guide 2025 — Everything Teachers Need to Know",
    excerpt: "Planning a school trip to Flora Fantasia? Complete guide covering group booking, safety rules, ride recommendations by age, sample day plan, and teacher tips.",
    image: "/gallery-real/family-slide-front.jpeg",
    alt: "School students enjoying water slides at Flora Fantasia Malappuram",
    readTime: "5 min read",
    date: "April 2025",
  },
  {
    slug: "best-route-to-flora-fantasia",
    category: "Travel Guide",
    title: "How to Reach Flora Fantasia — Routes from Kozhikode, Thrissur, Ernakulam & More",
    excerpt: "Complete directions to Flora Fantasia from all major Kerala cities. Routes by car, bus, and train from Kozhikode, Thrissur, Ernakulam, Manjeri, Tirur, and Perinthalmanna.",
    image: "/gallery-real/drone-overview.jpeg",
    alt: "Flora Fantasia amusement park Valancheri Malappuram Kerala",
    readTime: "4 min read",
    date: "April 2025",
  },
];

export default function BlogListPage() {
  return (
    <div className="blog-list-page">
      <div className="blog-list-inner">
        {/* Header */}
        <div style={{ marginBottom: "56px", maxWidth: "640px" }}>
          <span className="blog-eyebrow">Official Blog</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#0B1822",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Flora Fantasia Park Guides
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(11,24,34,0.6)",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.6,
            }}
          >
            Everything you need to plan the perfect visit.
          </p>
        </div>

        {/* Blog cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="blog-card-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
              <div className="blog-card-body">
                <span className="blog-card-cat">{post.category}</span>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <h2 className="blog-card-title">{post.title}</h2>
                </Link>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    Read Guide →
                  </Link>
                  <span className="blog-card-meta">{post.date} · {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
