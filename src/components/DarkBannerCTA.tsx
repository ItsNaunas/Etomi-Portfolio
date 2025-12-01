'use client';

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
            {buttons.map((button, index) => {
              // Handle anchor links with smooth scroll
              if (button.href.startsWith('#')) {
                return (
                  <a
                    key={index}
                    href={button.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(button.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-medium hover:brightness-90 transition-all"
                  >
                    {button.label}
                  </a>
                );
              }
              // Handle links with hash (like /#contact) - use Link and scroll after navigation
              if (button.href.includes('#')) {
                const [path, hash] = button.href.split('#');
                return (
                  <Link
                    key={index}
                    href={button.href}
                    onClick={(e) => {
                      // If we're already on the target page, prevent default and scroll
                      if (window.location.pathname === path || (path === '/' && window.location.pathname === '/')) {
                        e.preventDefault();
                        setTimeout(() => {
                          const target = document.querySelector(`#${hash}`);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }
                    }}
                    className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-medium hover:brightness-90 transition-all"
                  >
                    {button.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={index}
                  href={button.href}
                  className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-medium hover:brightness-90 transition-all"
                >
                  {button.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
