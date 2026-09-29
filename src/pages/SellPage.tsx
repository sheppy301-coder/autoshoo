import { useState } from 'react';
import { Check, ChevronRight, Upload, Car as CarIcon, DollarSign, TrendingUp, Shield } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const benefits = [
  { icon: DollarSign, title: 'Instant Settlement', desc: 'Once inspected, we offer immediate wire transfers upon documentation completion.' },
  { icon: TrendingUp, title: 'Expert Appraisal', desc: 'Our specialists provide valuations based on real-time global auction data and condition excellence.' },
  { icon: Shield, title: 'Private Consignment', desc: 'For unique or heritage vehicles, we offer consignment with full marketing and curation support.' },
];

export function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', make: '', model: '', year: '', mileage: '', condition: '', details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Sell Your Vehicle</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl text-white">
            Turn Your Asset Into <span className="italic shimmer-text">Liquidity</span>
          </h1>
          <p className="text-white/50 mt-6 leading-relaxed">
            Tell us about your vehicle. Our acquisitions desk will contact you within 24 hours with a data-driven valuation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="glass-card p-8 h-full card-3d">
                <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5 text-obsidian" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-card p-6 sm:p-10 lg:p-12 max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <Check className="w-8 h-8 text-obsidian" />
                </div>
                <h2 className="display-heading text-3xl text-white mb-4">Request Received</h2>
                <p className="text-white/50 max-w-md mx-auto mb-6">
                  Your consultation profile has been secured. A specialist will be in touch shortly with your vehicle's valuation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', make: '', model: '', year: '', mileage: '', condition: '', details: '' }); }}
                  className="btn-outline"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <CarIcon className="w-5 h-5 text-gold" />
                  <h2 className="display-heading text-2xl font-bold text-white">Tell Us About Your Vehicle</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Full Name</label>
                      <input required name="name" value={form.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Email Address</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="john@email.com" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Phone Number</label>
                      <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="+1 (305) 555-0100" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Vehicle Make</label>
                      <input required name="make" value={form.make} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="e.g. Porsche" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Vehicle Model</label>
                      <input required name="model" value={form.model} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="e.g. 911 GT3 RS" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Year</label>
                      <input required type="number" name="year" value={form.year} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="2024" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Mileage</label>
                      <input required type="number" name="mileage" value={form.mileage} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors" placeholder="5,000" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Condition</label>
                      <select name="condition" value={form.condition} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white focus:border-gold outline-none transition-colors cursor-pointer">
                        <option value="" className="bg-charcoal">Select...</option>
                        <option value="excellent" className="bg-charcoal">Excellent</option>
                        <option value="very-good" className="bg-charcoal">Very Good</option>
                        <option value="good" className="bg-charcoal">Good</option>
                        <option value="fair" className="bg-charcoal">Fair</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Additional Details</label>
                    <textarea name="details" value={form.details} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold outline-none transition-colors resize-none" placeholder="Tell us more about the condition, modifications, and service history..." />
                  </div>

                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-gold/30 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-white/30 mx-auto mb-3" />
                    <p className="text-sm text-white/40">Upload photos (optional)</p>
                    <p className="text-xs text-white/20 mt-1">Drag & drop or click to browse</p>
                  </div>

                  <button type="submit" className="btn-gold w-full text-base">
                    Submit Appraisal Request
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
