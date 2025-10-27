import SectionHeader from "@/components/SectionHeader";
import MasonryGallery from "@/components/MasonryGallery";
import Link from "next/link";

const portfolioCategories = [
  { slug: "editorial", name: "Editorial Shoots", icon: "📸" },
  { slug: "acting", name: "Acting / Film", icon: "🎬" },
  { slug: "fashion", name: "Fashion Campaigns", icon: "👗" },
  { slug: "architecture", name: "Architecture & Concept", icon: "🏛️" },
  { slug: "bts", name: "Behind the Scenes", icon: "🎭" },
  { slug: "concepts", name: "Creative Concepts", icon: "💡" }
];

export default function Portfolio() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Portfolio" 
            subtitle="A curated collection of editorial work, campaigns, and creative projects."
            theme="light"
          />
        </div>
      </section>

      {/* Portfolio Categories Grid */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="group bg-white rounded-lg border border-border-card shadow-card p-8 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="heading-serif text-xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="heading-serif text-2xl font-semibold text-brand-gold mb-4">
              Featured Work
            </h3>
            <p className="body-sans text-brand-gold/90">
              Full-screen parallax and masonry gallery will render on category pages
            </p>
          </div>
          <MasonryGallery />
        </div>
      </section>
    </main>
  );
}
