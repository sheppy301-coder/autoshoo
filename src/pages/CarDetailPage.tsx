import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronRight, ArrowLeft, Gauge, Zap, Fuel, Cog, Calendar,
  Check, Phone, Mail, MapPin, Shield, Award,
} from 'lucide-react';
import { getCarById, cars } from '@/data/cars';
import { CarCard } from '@/components/CarCard';
import { Reveal } from '@/components/Reveal';

export function CarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const car = id ? getCarById(id) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [showInquiry, setShowInquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Vehicle Not Found</h1>
          <p className="text-white/50 mb-8">This vehicle may have been sold or moved.</p>
          <Link to="/collection" className="btn-gold">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedCars = cars.filter((c) => c.id !== car.id && c.make === car.make).slice(0, 3);
  const fallbackRelated = cars.filter((c) => c.id !== car.id).slice(0, 3);
  const related = relatedCars.length > 0 ? relatedCars : fallbackRelated;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 mb-8">
        <nav className="flex items-center gap-2 text-xs text-white/40">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/collection" className="hover:text-gold transition-colors">Collection</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/70">{car.make} {car.model}</span>
        </nav>
      </div>

      {/* Gallery + Info */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal aspect-[16/10] mb-4">
              <img
                src={car.gallery[activeImage]}
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full h-full object-cover transition-all duration-500"
                key={activeImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none" />
              {car.badge && (
                <div className="absolute top-4 left-4 gold-bg text-obsidian rounded px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                  {car.badge}
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {car.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-gold opacity-100' : 'border-white/10 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={150}>
            <div>
              <p className="section-label mb-2">{car.make}</p>
              <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
                {car.model}
              </h1>
              <p className="text-white/40 text-sm mb-6">{car.year} &middot; {car.mileage.toLocaleString()} miles &middot; {car.color}</p>

              <div className="gold-line mb-6" />

              <p className="text-white/60 leading-relaxed mb-8">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, label: 'Horsepower', value: `${car.horsepower} hp` },
                  { icon: Gauge, label: '0-60 mph', value: `${car.acceleration}s` },
                  { icon: Calendar, label: 'Year', value: `${car.year}` },
                  { icon: Fuel, label: 'Fuel', value: car.fuelType },
                  { icon: Cog, label: 'Transmission', value: car.transmission },
                  { icon: Shield, label: 'Drivetrain', value: car.drivetrain },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-4">
                    <item.icon className="w-4 h-4 text-gold mb-2" />
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Acquisition Price</p>
                  <p className="font-display text-3xl font-black text-gold text-glow-gold">
                    ${car.price.toLocaleString()}
                  </p>
                </div>
                <button onClick={() => setShowInquiry(!showInquiry)} className="btn-gold">
                  {car.status === 'sold' ? 'View Similar' : 'Inquire Now'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {showInquiry && (
                <div className="glass-card p-6 animate-fade-up">
                  {submitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
                        <Check className="w-6 h-6 text-obsidian" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">Inquiry Received</h3>
                      <p className="text-sm text-white/50">One of our specialists will contact you within 24 hours.</p>
                      <button onClick={() => { setShowInquiry(false); setSubmitted(false); }} className="text-sm text-gold hover:underline mt-4">
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h3 className="font-display text-lg font-bold text-white mb-2">Acquisition Inquiry</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <input required placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-none px-4 h-11 text-sm text-white placeholder:text-white/30 focus:border-gold outline-none" />
                        <input required type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-none px-4 h-11 text-sm text-white placeholder:text-white/30 focus:border-gold outline-none" />
                      </div>
                      <input required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-11 text-sm text-white placeholder:text-white/30 focus:border-gold outline-none" />
                      <textarea placeholder="Questions or comments..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold outline-none resize-none" />
                      <button type="submit" className="btn-gold w-full">
                        Submit Inquiry
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div className="flex items-center gap-6 mt-6 text-xs text-white/40">
                <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gold/60" /> +1 (305) 555-0188</span>
                <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold/60" /> acquisitions@apexmotors.co</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Specs Table */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Performance Details</span>
          </div>
          <h2 className="display-heading text-3xl sm:text-4xl text-white mb-8">
            Full <span className="italic text-gold">Specifications</span>
          </h2>
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <tbody>
                {car.specs.map((spec, i) => (
                  <tr key={spec.label} className={i !== car.specs.length - 1 ? 'border-b border-white/[0.06]' : ''}>
                    <td className="px-6 py-4 text-xs uppercase tracking-widest text-white/40 w-1/3">{spec.label}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Features */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Key Features</span>
          </div>
          <h2 className="display-heading text-3xl sm:text-4xl text-white mb-8">
            Notable <span className="italic text-gold">Equipment</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {car.features.map((feature, i) => (
              <div key={feature} className="glass-card p-4 flex items-center gap-3 card-3d" style={{ animation: `fadeUp 0.4s ease-out ${i * 0.05}s both` }}>
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-white/70">{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust Bar */}
        <Reveal className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: '200-Point Inspection', desc: 'Certified by master technicians' },
              { icon: Award, title: 'Provenance Verified', desc: 'Complete documentation & history' },
              { icon: MapPin, title: 'Nationwide Delivery', desc: 'Enclosed, fully insured transport' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 flex items-center gap-4">
                <item.icon className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Related */}
        <Reveal className="mb-16">
          <h2 className="display-heading text-3xl sm:text-4xl text-white mb-8">
            You May Also <span className="italic text-gold">Like</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {related.map((c, i) => (
              <CarCard key={c.id} car={c} index={i} />
            ))}
          </div>
        </Reveal>

        <div className="text-center pb-8">
          <Link to="/collection" className="btn-outline">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
