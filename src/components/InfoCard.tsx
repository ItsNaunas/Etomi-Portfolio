import Link from 'next/link';

interface InfoCardProps {
  icon: string;
  heading: string;
  body: string | string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function InfoCard({ icon, heading, body, ctaLabel, ctaHref }: InfoCardProps) {
  const bodyContent = Array.isArray(body) ? body : [body];
  
  return (
    <div className="bg-brand-dark/80 rounded-lg border border-brand-gold/30 shadow-card p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      
      <h3 className="heading-serif text-xl font-semibold text-brand-gold mb-4">
        {heading}
      </h3>
      
      <div className="body-sans text-brand-gold/90 mb-6">
        {bodyContent.map((paragraph, index) => (
          <p key={index} className="mb-2 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
      
      <Link 
        href={ctaHref}
        className="inline-block bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-medium hover:brightness-90 transition-all"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
