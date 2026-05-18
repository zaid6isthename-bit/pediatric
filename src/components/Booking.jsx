import { useState } from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const doctors = [
  'Dr. Anika Sharma — Neonatologist',
  'Dr. Rajan Mehta — Cardiologist',
  'Dr. Preethi Nair — Adolescent Health',
];

export default function Booking() {
  const ref = useReveal();
  const [form, setForm] = useState({
    childName: '',
    phone: '',
    doctor: '',
    date: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.childName || !form.phone || !form.doctor || !form.date) return;
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="py-24 px-6"
      aria-labelledby="booking-heading"
    >
      <div
        ref={ref}
        className="reveal max-w-4xl mx-auto bg-gradient-to-br from-coral to-[#FB8B74] rounded-4xl px-4 py-10 sm:p-10 md:p-16 text-center shadow-coral relative overflow-hidden"
      >
        {/* Background decoration */}
        <div
          className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-white/10 blob pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-white/10 blob pointer-events-none"
          aria-hidden="true"
        />

        {!submitted ? (
          <>
            <p className="pill-badge bg-white/20 text-white mb-5 mx-auto w-fit text-sm">
              📅 Easy Booking
            </p>
            <h2
              id="booking-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              Ready to Give Your Child the Best Care?
            </h2>
            <p className="text-white/85 text-lg mb-10">
              Book an appointment today. Same-day slots available.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 text-left grid sm:grid-cols-2 gap-4"
              aria-label="Appointment booking form"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="childName" className="text-sm font-semibold text-slate-secondary">
                  Child's Name
                </label>
                <input
                  id="childName"
                  name="childName"
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={form.childName}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-divider rounded-xl px-4 py-3 text-slate-primary placeholder:text-slate-secondary/50 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-secondary">
                  Parent's Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-divider rounded-xl px-4 py-3 text-slate-primary placeholder:text-slate-secondary/50 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="doctor" className="text-sm font-semibold text-slate-secondary">
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-divider rounded-xl px-4 py-3 text-slate-primary focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition appearance-none bg-white"
                >
                  <option value="" disabled>Choose a specialist</option>
                  {doctors.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" className="text-sm font-semibold text-slate-secondary">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full border border-slate-divider rounded-xl px-4 py-3 text-slate-primary focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  id="booking-submit-btn"
                  className="w-full btn-coral py-4 text-base font-bold"
                >
                  Confirm Appointment →
                </button>
              </div>
            </form>

            <p className="mt-5 text-white/70 text-sm flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Your information is private and secure.
            </p>
          </>
        ) : (
          <div className="py-12">
            <CheckCircle2 className="w-20 h-20 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-3">Appointment Requested!</h3>
            <p className="text-white/85 text-lg">
              Thank you, we'll call {form.phone} to confirm your slot with{' '}
              {form.doctor.split(' — ')[0]} on {form.date}.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 bg-white text-coral font-bold px-8 py-3 rounded-pill hover:bg-cream-50 transition"
            >
              Book Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
