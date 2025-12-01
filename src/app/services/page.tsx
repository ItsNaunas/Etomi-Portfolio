import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import DarkBannerCTA from "@/components/DarkBannerCTA";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Creative Services" 
            subtitle="Bringing depth, authenticity, and creative direction to every collaboration."
            theme="light"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              icon="🎭"
              heading="Modelling & Acting"
              body={[
                "Editorial & Fashion Photography",
                "Commercial & Brand Campaigns",
                "Film & Television Acting", 
                "On-Camera Presence Coaching",
                "Runway & Fashion Shows",
                "Brand Ambassador Work"
              ]}
              ctaLabel="Work With Me →"
              ctaHref="/#contact"
            />
            
            <InfoCard
              icon="📱"
              heading="Content Strategy & Digital Marketing"
              body={[
                "Brand Voice Development",
                "Social Media Strategy & Management",
                "Content Calendar Planning & Execution",
                "Influencer Partnership Development",
                "Campaign Concept & Creative Direction",
                "Performance Analytics & Optimization"
              ]}
              ctaLabel="Work With Me →"
              ctaHref="/#contact"
            />
            
            <InfoCard
              icon="✨"
              heading="Social Media Branding & Strategy"
              body={[
                "Personal Brand Development & Positioning",
                "Visual Identity Design & Guidelines",
                "Platform-Specific Content Strategies",
                "Engagement Optimization & Community Building",
                "Brand Partnership & Collaboration Strategy",
                "Crisis Management & Reputation Building"
              ]}
              ctaLabel="Work With Me →"
              ctaHref="/#contact"
            />
            
            <InfoCard
              icon="🎤"
              heading="Speaking & Consulting"
              body={[
                "Creative Direction Workshops & Masterclasses",
                "Brand Strategy Sessions & Planning",
                "Public Speaking Engagements & Keynotes",
                "One-on-One Mentoring & Coaching",
                "Team Training & Development Programs",
                "Strategic Advisory & Board Consulting"
              ]}
              ctaLabel="Work With Me →"
              ctaHref="/#contact"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DarkBannerCTA
        title="Serious about working together?"
        subtitle="Let's discuss your project, goals, and how we can create something that truly resonates with your audience and drives results."
        buttons={[
          { label: "Start a Conversation", href: "/#contact" }
        ]}
      />
    </main>
  );
}
