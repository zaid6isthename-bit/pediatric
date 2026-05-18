import { Heart, Camera, Globe, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'For Parents', href: '#resources' },
];

const serviceLinks = [
  'Newborn Care',
  'Vaccinations',
  'Growth Tracking',
  'Nutrition Counseling',
  'Emergency Care',
  'Adolescent Health',
];

const contact = [
  { icon: MapPin, text: '12, Bloom Tower, Bandra West, Mumbai — 400050' },
  { icon: Phone, text: '+91 98765 43210' },
  { icon: Mail, text: 'hello@bloompedscare.com' },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
  { day: 'Emergency', time: '24 / 7', highlight: true },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-cream-100 border-t border-slate-divider"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-coral rounded-2xl flex items-center justify-center shadow-coral">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-slate-primary">
              Bloom <span className="text-coral">Pediatrics</span>
            </span>
          </div>
          <p className="text-slate-secondary text-sm leading-relaxed mb-6">
            Expert pediatric care delivered with warmth, precision, and genuine love for
            your child. Trusted by 2,000+ families across Mumbai.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Camera, label: 'Instagram', href: '#' },
              { Icon: Globe, label: 'Facebook', href: '#' },
              { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-slate-secondary hover:text-coral hover:shadow-card transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-slate-primary mb-5">Quick Links</h3>
          <ul className="space-y-3" role="list">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-slate-secondary text-sm hover:text-coral transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-slate-primary mb-5">Services</h3>
          <ul className="space-y-3" role="list">
            {serviceLinks.map((s) => (
              <li key={s}>
                <span className="text-slate-secondary text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="font-bold text-slate-primary mb-5">Contact Info</h3>
          <ul className="space-y-3 mb-8" role="list">
            {contact.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5">
                <Icon className="w-4 h-4 text-coral mt-0.5 shrink-0" />
                <span className="text-slate-secondary text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-slate-primary mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-coral" /> Working Hours
          </h3>
          <ul className="space-y-2" role="list">
            {hours.map(({ day, time, highlight }) => (
              <li key={day} className="flex justify-between items-center text-sm">
                <span className="text-slate-secondary">{day}</span>
                <span
                  className={`font-semibold ${
                    highlight ? 'text-coral' : 'text-slate-primary'
                  }`}
                >
                  {time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-divider py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-secondary">
          <p>© 2025 Bloom Pediatrics. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
