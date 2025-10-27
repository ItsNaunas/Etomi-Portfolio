import SectionHeader from "@/components/SectionHeader";
import MasonryGallery from "@/components/MasonryGallery";

interface PortfolioCategoryPageProps {
  params: {
    category: string;
  };
}

const categoryNames: Record<string, string> = {
  editorial: "Editorial Shoots",
  acting: "Acting & Film",
  fashion: "Fashion Campaigns", 
  architecture: "Architecture & Concept",
  bts: "Behind the Scenes",
  concepts: "Creative Concepts"
};

export default function PortfolioCategoryPage({ params }: PortfolioCategoryPageProps) {
  const categoryName = categoryNames[params.category] || params.category;
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title={categoryName}
            subtitle="High-resolution visuals, campaign stills, and behind-the-scenes moments."
            theme="light"
          />
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <MasonryGallery />
        </div>
      </section>
    </main>
  );
}
