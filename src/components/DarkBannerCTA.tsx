import Link from 'next/link';

interface DarkBannerCTAProps {
  title: string;
  subtitle: string;
  buttons?: Array<{
    label: string;
    href: string;
  }>;
}

export default function DarkBannerCTA({ title, subtitle, buttons = [] }: DarkBannerCTAProps) {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="section-heading dark text-4xl font-bold mb-6">
          {title}
        </h2>
        
        <p className="section-subtext dark text-lg mb-8">
          {subtitle}
        </p>
        
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-medium hover:brightness-90 transition-all"
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
