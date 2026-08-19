import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-pink-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-brand-text text-sm leading-relaxed flex-1">
        <span className="text-brand-primary text-3xl leading-none font-heading mr-1 -mt-1 inline-block">&ldquo;</span>
        {testimonial.quote}
        <span className="text-brand-primary text-3xl leading-none font-heading ml-1">&rdquo;</span>
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-2 border-t border-brand-cream">
        {/* Avatar initial */}
        <div
          className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-brand-primary font-heading font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-brand-dark text-sm">
            {testimonial.name}
          </p>
          <p className="text-brand-muted text-xs">
            {testimonial.eventType}
            {testimonial.location && ` · ${testimonial.location}`}
          </p>
        </div>
      </footer>
    </article>
  );
}
