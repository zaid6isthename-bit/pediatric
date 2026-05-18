import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  'Board-certified specialists with 10+ years experience',
  'Warm, child-friendly consultation rooms',
  'Digital health records & easy appointment booking',
  'Transparent pricing, no hidden fees',
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 px-6 bg-cream-100"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Left — Text */}
        <div>
          <p className="reveal pill-badge bg-sky-bloom text-sky-deep mb-4 w-fit">
            Why Choose Us
          </p>
          <h2
            id="whyus-heading"
            className="reveal section-heading mb-6"
          >
            Pediatric Care That Puts{' '}
            <span className="text-coral">Your Family</span> First
          </h2>
          <p className="reveal text-slate-secondary text-lg leading-relaxed mb-8">
            At Bloom Pediatrics, we believe every child deserves care that is as warm as it
            is expert. Our clinic was built around one simple promise — to always put your
            child's wellbeing at the center of everything we do.
          </p>
          <ul className="space-y-4 stagger" role="list">
            {features.map((f) => (
              <li key={f} className="reveal flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                <span className="text-slate-primary font-medium leading-snug">{f}</span>
              </li>
            ))}
          </ul>
          <button
            className="reveal btn-coral mt-10"
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            id="whyus-book-btn"
          >
            Book a Consultation
          </button>
        </div>

        {/* Right — Image placeholder */}
        <div className="reveal relative">
          <div className="w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-bloom to-white flex items-center justify-center rounded-3xl">
              <div className="text-center p-10">
                <div className="w-28 h-28 bg-coral-light rounded-full mx-auto mb-5 flex items-center justify-center">
                  <span className="text-5xl">🩺</span>
                </div>
                <p className="text-slate-secondary font-medium text-sm leading-relaxed">
                  Our warm, child-friendly<br />consultation rooms designed<br />to make every visit a joy
                </p>
              </div>
            </div>
          </div>
          {/* Accent blob */}
          <div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-coral-light opacity-50 blob -z-10"
            aria-hidden="true"
          />
          {/* Floating stat */}
          <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-card p-4 z-10">
            <p className="text-3xl font-bold text-coral">98%</p>
            <p className="text-slate-secondary text-xs font-medium">Parent Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
