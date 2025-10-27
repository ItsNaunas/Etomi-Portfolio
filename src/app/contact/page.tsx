import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Let's Create Together" 
            subtitle="Brand work, on-camera presence, campaigns, media, events, strategy."
            theme="light"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-brand-dark/80 rounded-lg border border-brand-gold/30 shadow-card p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-brand-gold/50 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent body-sans bg-brand-dark/50 text-brand-gold placeholder-brand-gold/60"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-brand-gold/50 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent body-sans bg-brand-dark/50 text-brand-gold placeholder-brand-gold/60"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block body-sans text-sm font-medium text-brand-gold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-brand-gold/50 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent body-sans bg-brand-dark/50 text-brand-gold placeholder-brand-gold/60"
                  placeholder="Tell me about your project, goals, and how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:brightness-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="heading-serif text-xl font-semibold text-brand-gold mb-2">
                Response Time
              </h3>
              <p className="body-sans text-brand-gold/90">
                I typically respond within 24-48 hours
              </p>
            </div>
            
            <div>
              <h3 className="heading-serif text-xl font-semibold text-brand-gold mb-2">
                Project Types
              </h3>
              <p className="body-sans text-brand-gold/90">
                Brand campaigns, content strategy, speaking engagements, and consulting
              </p>
            </div>
            
            <div>
              <h3 className="heading-serif text-xl font-semibold text-brand-gold mb-2">
                Availability
              </h3>
              <p className="body-sans text-brand-gold/90">
                Currently booking projects for Q1 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
