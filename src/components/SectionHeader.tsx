interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

export default function SectionHeader({ title, subtitle, theme = 'light' }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`section-heading ${theme}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtext ${theme} mt-4`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
