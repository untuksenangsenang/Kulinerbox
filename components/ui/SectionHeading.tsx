interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // untuk background gelap
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} mb-10 md:mb-14 ${className}`}
    >
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl leading-tight mb-3 ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/75" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-brand-primary ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
