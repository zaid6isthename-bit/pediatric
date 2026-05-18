import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 8, suffix: '', label: 'Specialist Doctors' },
  { value: 2000, suffix: '+', label: 'Happy Families' },
  { value: 98, suffix: '%', label: 'Patient Satisfaction' },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-sky-bloom py-14 px-6"
      aria-label="Clinic statistics"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <p className="text-4xl md:text-5xl font-bold text-coral">
              <CountUp target={value} suffix={suffix} active={active} />
            </p>
            <p className="text-slate-secondary font-medium text-sm md:text-base">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
