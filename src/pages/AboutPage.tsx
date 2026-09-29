import { Link } from 'react-router-dom';
import { Award, Users, Globe, Shield, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const atelierImage = 'https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const teamImage = 'https://images.pexels.com/photos/35113538/pexels-photo-35113538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Every transaction is transparent, documented, and backed by our certification guarantee.' },
  { icon: Award, title: 'Excellence', desc: 'We accept nothing less than perfection in our vehicles, our service, and our standards.' },
  { icon: Globe, title: 'Global Reach', desc: 'Our network spans continents, sourcing the finest vehicles from collectors worldwide.' },
  { icon: Users, title: 'Client First', desc: 'Every relationship is personal. Your specialist is your dedicated advocate for life.' },
];

const testimonials = [
  { quote: 'APEX Motors handled the acquisition of my Ferrari with absolute professionalism. The process was seamless from start to finish.', author: 'Alexander Vance', title: 'Private Collector' },
  { quote: 'I\'ve purchased three vehicles from APEX. Each one arrived in immaculate condition, exactly as described. No one else comes close.', author: 'Dr. Marcus Wei', title: 'Portfolio Client' },
  { quote: 'Their consignment program got me 15% more than I expected. The marketing and presentation were world-class.', author: 'Sarah Jenkins', title: 'Heritage Collector' },
];

const team = [
  { name: 'James Holloway', role: 'Founder & CEO', desc: '20 years in luxury automotive curation.' },
  { name: 'Elena Rossi', role: 'Acquisitions Director', desc: 'Former Ferrari North America specialist.' },
  { name: 'David Chen', role: 'Master Technician', desc: 'ASE Master Certified, 15+ years experience.' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Hero */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Our Atelier</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            The APEX <span className="italic shimmer-text">Philosophy</span>
          </h1>
          <p className="text-white/50 leading-relaxed text-lg">
            We exist for the collector who views automobiles not as transportation, but as art, investment, and legacy. Every vehicle in our collection is a curated masterpiece, verified and certified for the discerning few.
          </p>
        </Reveal>

        {/* Image banner */}
        <Reveal className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[21/9]">
            <img src={atelierImage} alt="APEX Motors atelier" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <p className="font-display text-2xl sm:text-3xl font-bold text-white max-w-2xl">
                "We don't sell cars. We curate automotive art for those who understand the difference."
              </p>
              <p className="text-gold text-sm mt-3">— James Holloway, Founder</p>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img src={teamImage} alt="APEX Motors showroom" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold" />
                <span className="section-label">Our Story</span>
              </div>
              <h2 className="display-heading text-3xl sm:text-4xl text-white mb-6">
                Built on <span className="italic text-gold">Passion</span>
              </h2>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed">
                <p>
                  Founded in 2015, APEX Motors began as a private consultancy for a small circle of collectors seeking exceptional vehicles without the compromises of traditional dealerships.
                </p>
                <p>
                  Today, we operate a private atelier in Miami and have facilitated over 800 acquisitions, ranging from modern hypercars to pre-war classics. Our global network of specialists, auction houses, and private collectors gives us access to vehicles that never reach the open market.
                </p>
                <p>
                  Every member of our team shares a singular obsession: finding and delivering the finest automobiles on earth to clients who appreciate them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Core Values</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl text-white">
              What We <span className="italic text-gold">Stand For</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="glass-card p-8 text-center h-full card-3d">
                <div className="w-14 h-14 rounded-2xl gold-bg flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-obsidian" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials */}
        <Reveal className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Client Voices</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl text-white">
              Trusted by <span className="italic text-gold">Collectors</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <div className="glass-card p-8 h-full card-3d">
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <p className="text-sm text-white/60 leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-gold">{t.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Team */}
        <Reveal className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Our People</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl text-white">
              Meet the <span className="italic text-gold">Team</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="glass-card p-8 text-center h-full card-3d">
                <div className="w-20 h-20 rounded-full gold-bg flex items-center justify-center mx-auto mb-5 font-display text-2xl font-black text-obsidian">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gold mb-2">{member.role}</p>
                <p className="text-xs text-white/40">{member.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="glass-card p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="display-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Visit Our <span className="italic text-gold">Atelier</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-8">
                Schedule a private appointment at our Miami showroom. Experience the collection firsthand with a dedicated specialist.
              </p>
              <Link to="/collection" className="btn-gold">
                View Collection
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
