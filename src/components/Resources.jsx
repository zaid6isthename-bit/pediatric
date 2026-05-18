import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const resources = [
  {
    category: 'Vaccination',
    categoryColor: 'bg-sky-bloom text-sky-deep',
    title: 'When Should My Baby Get Their First Vaccine?',
    excerpt:
      'A complete guide to the immunization schedule — what to expect and when, from birth to 12 months.',
    emoji: '💉',
  },
  {
    category: 'Health & Safety',
    categoryColor: 'bg-coral-light text-coral-dark',
    title: 'Signs of Normal vs Concerning Fever in Children',
    excerpt:
      'Learn how to tell when your child\'s fever is routine versus when it\'s time to call the doctor.',
    emoji: '🌡️',
  },
  {
    category: 'Nutrition',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: 'How to Build Healthy Eating Habits from Age 2',
    excerpt:
      'Practical, pediatrician-approved tips for establishing a joyful, nutritious relationship with food.',
    emoji: '🥦',
  },
];

export default function Resources() {
  const ref = useScrollReveal();

  return (
    <section
      id="resources"
      className="py-24 px-6 bg-cream-100"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="reveal pill-badge bg-sky-bloom text-sky-deep mb-4 mx-auto w-fit">
            For Parents
          </p>
          <h2 id="resources-heading" className="reveal section-heading">
            Helpful Resources for Parents
          </h2>
          <p className="reveal section-sub max-w-xl mx-auto">
            Trusted guidance from our pediatricians to help you navigate every stage of your
            child's growth with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {resources.map(({ category, categoryColor, title, excerpt, emoji }) => (
            <article
              key={title}
              className="reveal card group cursor-pointer"
              tabIndex={0}
              role="article"
            >
              {/* Emoji hero */}
              <div className="w-full h-36 bg-gradient-to-br from-cream-50 to-sky-bloom rounded-2xl flex items-center justify-center mb-5 text-5xl group-hover:scale-105 transition-transform duration-300">
                {emoji}
              </div>

              {/* Category pill */}
              <span className={`pill-badge ${categoryColor} text-xs mb-3`}>
                {category}
              </span>

              <h3 className="font-bold text-slate-primary text-base leading-snug mb-2">
                {title}
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed mb-5">{excerpt}</p>

              <span className="inline-flex items-center gap-1.5 text-coral font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
