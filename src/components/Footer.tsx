import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/[0.06] pt-20 pb-10 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-radial opacity-30 pointer-events-none" />
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 gold-line" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-black tracking-tighter text-white">
                APEX
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Motors
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The world's most distinguished collection of certified pre-owned luxury and performance vehicles. Curated for the discerning collector.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Collection', path: '/collection' },
                { label: 'Sell Your Vehicle', path: '/sell' },
                { label: 'Financing', path: '/financing' },
                { label: 'Atelier', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Services</h4>
            <ul className="space-y-3">
              {[
                'Private Consignment',
                'Capital Solutions',
                'Portfolio Leasing',
                'White-Glove Transport',
                'Expert Appraisal',
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50 hover:text-white/70 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                <span>1200 Biscayne Boulevard, Suite 500<br />Miami, FL 33132</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-gold/60 shrink-0" />
                <span>+1 (305) 555-0188</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 text-gold/60 shrink-0" />
                <span>By Appointment Only<br />Mon — Sat: 10am — 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} APEX Motors International. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
