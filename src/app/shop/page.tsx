import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import ProductCarousel from "@/components/ProductCarousel";

export default function Shop() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Shop" 
            subtitle="Courses, templates, journals, and resources to elevate your craft and brand."
            theme="light"
          />
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-brand-light text-lg">Discover our most popular courses, templates, and resources</p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Shop Categories */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              icon="🛍️"
              heading="Etsy Boutique"
              body="Curated digital products, templates, and creative resources for personal branding and content creation. From social media templates to brand guideline workbooks."
              ctaLabel="Visit Shop"
              ctaHref="#"
            />
            
            <InfoCard
              icon="📚"
              heading="Amazon Books"
              body="Published works on creative strategy, personal branding, and building authentic professional presence. Available in paperback, hardcover, and digital formats."
              ctaLabel="Browse Books"
              ctaHref="#"
            />
            
            <InfoCard
              icon="💻"
              heading="Digital E-Books"
              body="Exclusive guides, workbooks, and templates for creative professionals and entrepreneurs. Instant download access to premium content and resources."
              ctaLabel="Download Now"
              ctaHref="#"
            />
            
            <InfoCard
              icon="📄"
              heading="PDF Resources"
              body="Quick-reference guides, checklists, and templates for brand development, content planning, and creative project management."
              ctaLabel="View Resources"
              ctaHref="#"
            />
            
            <InfoCard
              icon="🎓"
              heading="Online Courses"
              body="Comprehensive video courses covering personal branding, creative strategy, and professional development. Self-paced learning with lifetime access."
              ctaLabel="Enroll Now"
              ctaHref="#"
            />
            
            <InfoCard
              icon="⭐"
              heading="Exclusive Content"
              body="Members-only content, early access to new resources, and premium templates. Join the creative community and get exclusive benefits."
              ctaLabel="Join Now"
              ctaHref="#"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
