import { Baby, Syringe, TrendingUp, Apple, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Baby,
    title: 'Newborn Care',
    desc: 'Comprehensive health monitoring and support for your baby\'s first days of life.',
    color: 'bg-pink-50 text-pink-500',
  },
  {
    icon: Syringe,
    title: 'Vaccinations & Immunizations',
    desc: 'Full immunization schedules following the latest pediatric health guidelines.',
    color: 'bg-sky-bloom text-sky-deep',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Development',
    desc: 'Milestone tracking and developmental assessments from infancy through adolescence.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Apple,
    title: 'Nutrition & Diet Counseling',
    desc: 'Personalized dietary guidance to fuel healthy growth and strong immunity.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Zap,
    title: 'Pediatric Emergency Care',
    desc: 'Rapid, expert response for urgent health concerns — day or night.',
    color: 'bg-red-50 text-red-500',
  },
  {
    icon: Users,
    title: 'Adolescent Health',
    desc: 'Sensitive, confidential care for teens navigating physical and emotional changes.',
    color: 'bg-violet-50 text-violet-500',
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 px-6 bg-cream-100" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="reveal pill-badge bg-sky-bloom text-sky-deep mb-4 mx-auto w-fit">
            Our Services
          </p>
          <h2 id="services-heading" className="reveal section-heading">
            Comprehensive Care for Every Stage
          </h2>
          <p className="reveal section-sub max-w-2xl mx-auto">
            From newborns to teenagers — we're with your child every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <article
              key={title}
              className="reveal card group border border-transparent hover:border-sky-mid cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-primary text-lg mb-2">{title}</h3>
              <p className="text-slate-secondary text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
