import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    stars: 5,
    quote:
      "Dr. Sharma genuinely listened to our concerns and took her time with our newborn. We've never felt so reassured and cared for. Bloom Pediatrics is a blessing for our family.",
    name: 'Priya M.',
    child: 'Mother of 3-year-old',
    initials: 'PM',
    color: 'bg-coral-light text-coral',
  },
  {
    stars: 5,
    quote:
      "The clinic is beautiful, calm, and completely stress-free for kids. My son used to dread doctor visits — now he actually looks forward to coming here. That says everything.",
    name: 'Arjun T.',
    child: 'Father of 5-year-old',
    initials: 'AT',
    color: 'bg-sky-bloom text-sky-deep',
  },
  {
    stars: 5,
    quote:
      "Same-day appointments, digital records, transparent billing — this is healthcare done right. Dr. Mehta is exceptional. I recommend Bloom Pediatrics to every parent I know.",
    name: 'Sneha R.',
    child: 'Mother of twin 7-year-olds',
    initials: 'SR',
    color: 'bg-violet-100 text-violet-600',
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-sky-bloom"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="reveal pill-badge bg-white text-sky-deep mb-4 mx-auto w-fit shadow-soft">
            ❤️ Parent Stories
          </p>
          <h2 id="testimonials-heading" className="reveal section-heading">
            What Parents Are Saying
          </h2>
          <p className="reveal section-sub max-w-xl mx-auto">
            Real words from the families who trust us with their most precious ones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {testimonials.map(({ stars, quote, name, child, initials, color }) => (
            <article
              key={name}
              className="reveal bg-white rounded-3xl shadow-card p-7 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
                {[...Array(stars)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-secondary italic leading-relaxed text-sm flex-1">
                "{quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-divider">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center font-bold text-sm shrink-0`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-slate-primary font-bold text-sm">{name}</p>
                  <p className="text-slate-secondary text-xs">{child}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
