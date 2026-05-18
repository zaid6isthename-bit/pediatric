import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const trustItems = [
  { icon: Award, label: 'MBBS Certified' },
  { icon: Shield, label: 'Child Safe Environment' },
  { icon: Clock, label: 'Same-Day Appointments' },
];

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cream-100 flex items-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-transparent to-transparent" />
      </div>

      {/* Decorative Blur Blobs */}
      <div
        className="absolute top-[-80px] right-[-120px] w-[560px] h-[560px] bg-sky-bloom opacity-40 blob pointer-events-none z-10"
        aria-hidden="true"
      />


      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Pill badge */}
          <div className="reveal pill-badge bg-trust text-emerald-700 mb-6 w-fit">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Trusted by 2,000+ Families in Mumbai
          </div>

          <h1 className="reveal section-heading text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6">
            Where Little Ones{' '}
            <span className="text-coral relative">
              Grow Healthy
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-coral-light rounded-full -z-10 opacity-60" />
            </span>{' '}
            &amp; Strong
          </h1>

          <p className="reveal text-slate-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Expert pediatric care delivered with warmth, precision, and genuine love for your child.
            From newborns to teenagers — we're your family's partner in health.
          </p>

          <div className="reveal flex flex-wrap gap-4 mb-10">
            <button
              id="hero-book-btn"
              onClick={() => scrollTo('#booking')}
              className="btn-coral flex items-center gap-2 text-base px-8 py-3.5"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-doctors-btn"
              onClick={() => scrollTo('#doctors')}
              className="btn-outline flex items-center gap-2 text-base px-8 py-3.5"
            >
              Meet Our Doctors
            </button>
          </div>

          {/* Trust row */}
          <div className="reveal flex flex-wrap gap-5">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm text-slate-secondary font-medium"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-bloom flex items-center justify-center">
                  <Icon className="w-4 h-4 text-sky-deep" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo placeholder + floating cards */}
        <div className="relative flex justify-center">
          {/* Main feature image */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-slate-divider/50 z-10">
            <img
              src="/hero-feature.png"
              alt="Candid moment of care between pediatrician and a happy child at Bloom Pediatrics"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Floating review card */}
          <div className="absolute -bottom-4 -left-4 md:-left-10 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 z-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-lg">★</span>
              ))}
            </div>
            <div>
              <p className="text-slate-primary font-bold text-sm">4.9 Rating</p>
              <p className="text-slate-secondary text-xs">500+ Reviews</p>
            </div>
          </div>

          {/* Floating est card */}
          <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-card px-4 py-3 z-10 flex items-center gap-2">
            <span className="text-2xl">🏥</span>
            <div>
              <p className="text-slate-primary font-bold text-sm">Est. 2010</p>
              <p className="text-slate-secondary text-xs">15 years of care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
