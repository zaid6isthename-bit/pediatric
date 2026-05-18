import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Anika Sharma',
    specialty: 'Pediatric Neonatologist',
    experience: '12 Years Experience',
    credentials: 'MBBS, MD – AIIMS Delhi',
    emoji: '👩‍⚕️',
    color: 'from-pink-100 to-pink-50',
  },
  {
    name: 'Dr. Rajan Mehta',
    specialty: 'Pediatric Cardiologist',
    experience: '15 Years Experience',
    credentials: 'MBBS, DM – PGI Chandigarh',
    emoji: '👨‍⚕️',
    color: 'from-sky-bloom to-blue-50',
  },
  {
    name: 'Dr. Preethi Nair',
    specialty: 'Adolescent Health Specialist',
    experience: '10 Years Experience',
    credentials: 'MBBS, MD – KEM Mumbai',
    emoji: '👩‍⚕️',
    color: 'from-violet-100 to-violet-50',
  },
];

export default function Doctors() {
  const ref = useScrollReveal();

  return (
    <section id="doctors" className="py-24 px-6 bg-white" aria-labelledby="doctors-heading">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="reveal pill-badge bg-sky-bloom text-sky-deep mb-4 mx-auto w-fit">
            Our Team
          </p>
          <h2 id="doctors-heading" className="reveal section-heading">
            Specialists You Can Trust
          </h2>
          <p className="reveal section-sub max-w-xl mx-auto">
            Our board-certified pediatricians bring decades of expertise and a genuine
            passion for child health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {doctors.map(({ name, specialty, experience, credentials, emoji, color }) => (
            <article
              key={name}
              className="reveal card text-center group"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 text-5xl shadow-soft group-hover:scale-105 transition-transform duration-300`}>
                {emoji}
              </div>

              {/* Info */}
              <h3 className="text-slate-primary font-bold text-xl mb-1">{name}</h3>
              <p className="text-coral font-semibold text-sm mb-3">{specialty}</p>

              {/* Credentials badge */}
              <span className="pill-badge bg-sky-bloom text-sky-deep text-xs mb-4 mx-auto">
                {credentials}
              </span>

              <p className="text-slate-secondary text-sm mb-5">{experience}</p>

              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sky-deep font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                aria-label={`View profile of ${name}`}
              >
                Book with Doctor <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
