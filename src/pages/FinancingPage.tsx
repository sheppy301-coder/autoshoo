import { Link } from 'react-router-dom';
import { Banknote, TrendingUp, Building2, Calculator, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const financingServices = [
  { icon: Banknote, title: 'Capital Solutions', desc: 'Sophisticated liquidity solutions tailored for the acquisition of high-value automotive masterpieces.', points: ['Up to 144-month terms', 'Competitive rates', 'Flexible structures'] },
  { icon: TrendingUp, title: 'Portfolio Leasing', desc: 'High residual value lease structures designed for tax-advantageous ownership of heritage assets.', points: ['Tax advantages', 'Flexible end-of-term options', 'Fleet management'] },
  { icon: Building2, title: 'Private Banking Ties', desc: 'Access to exclusive lines of credit with global private banking institutions for qualified clients.', points: ['Dedicated relationship managers', 'Pre-arranged credit facilities', 'Global accessibility'] },
  { icon: Calculator, title: 'Payment Calculator', desc: 'Estimate your monthly payments with our transparent financing calculator. Terms up to 144 months for qualified heritage assets.', points: ['Real-time estimates', 'No commitment required', 'Custom configurations'] },
];

export function FinancingPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Financing & Capital</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl text-white">
            Capital <span className="italic text-gold">Solutions</span>
          </h1>
          <p className="text-white/50 mt-6 leading-relaxed">
            Sophisticated financing structures designed for the acquisition of exceptional vehicles. Terms reaching up to 144 months for qualified heritage assets.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {financingServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="glass-card p-8 lg:p-10 h-full card-3d group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-obsidian" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Calculator */}
        <Reveal className="mb-16">
          <div className="glass-card p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-5 h-5 text-gold" />
              <h2 className="display-heading text-2xl font-bold text-white">Payment Estimator</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Vehicle Price</label>
                    <span className="text-sm font-bold text-gold">$250,000</span>
                  </div>
                  <input type="range" min="50000" max="1000000" step="10000" defaultValue="250000" className="w-full accent-gold" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Down Payment</label>
                    <span className="text-sm font-bold text-gold">20%</span>
                  </div>
                  <input type="range" min="0" max="50" step="5" defaultValue="20" className="w-full accent-gold" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Term (Months)</label>
                    <span className="text-sm font-bold text-gold">60</span>
                  </div>
                  <input type="range" min="12" max="144" step="12" defaultValue="60" className="w-full accent-gold" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Interest Rate</label>
                    <span className="text-sm font-bold text-gold">5.99%</span>
                  </div>
                  <input type="range" min="3" max="12" step="0.5" defaultValue="5.99" className="w-full accent-gold" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Estimated Monthly Payment</p>
                <p className="font-display text-6xl lg:text-7xl font-black text-gold text-glow-gold mb-4">
                  $3,588
                </p>
                <p className="text-sm text-white/40 mb-6">
                  Estimate only. Final terms subject to credit approval and asset qualification.
                </p>
                <Link to="/collection" className="btn-gold">
                  Browse Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="glass-card p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="display-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Speak With a <span className="italic text-gold">Capital Specialist</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-8">
                Our financing team is available by appointment to discuss your acquisition strategy and tailor a solution to your portfolio.
              </p>
              <Link to="/sell" className="btn-gold">
                Start Application
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
