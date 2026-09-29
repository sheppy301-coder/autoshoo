import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Shield, Truck, Banknote, Award,
  TrendingUp, Sparkles, Gauge, Zap, Eye, Phone,
} from 'lucide-react';
import { cars } from '@/data/cars';
import { CarCard } from '@/components/CarCard';
import { Reveal } from '@/components/Reveal';

const heroVideo = 'https://videos.pexels.com/video-files/7727415/7727415-hd_1920_1080_25fps.mp4';
const heroPoster = 'https://images.pexels.com/videos/7727415/lamborghini-7727415.jpeg?auto=compress&cs=tinysrgb&w=1920';
const ctaVideo = 'https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4';
const ctaPoster = 'https://images.pexels.com/videos/5309381/car-driving-car-enthusiast-car-photography-fast-car-5309381.jpeg?auto=compress&cs=tinysrgb&w=1920';
const showroomImage = 'https://images.pexels.com/photos/4756890/pexels-photo-4756890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const darkCarImage = 'https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const services = [
  { icon: Shield, title: 'Certified Assets', desc: '200-point inspection by master technicians on every vehicle.' },
  { icon: Banknote, title: 'Capital Solutions', desc: 'Tailored liquidity solutions for high-value acquisitions.' },
  { icon: Truck, title: 'White-Glove Transport', desc: 'Nationwide enclosed delivery, fully insured.' },
  { icon: TrendingUp, title: 'Portfolio Leasing', desc: 'Tax-advantageous lease structures for heritage assets.' },
];

const stats = [
  { value: '847', label: 'Vehicles Delivered' },
  { value: '24h', label: 'Acquisition Response' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '144mo', label: 'Max Finance Term' },
];

const process = [
  { step: '01', title: 'Curation', desc: 'Hand-selected based on provenance, condition, and significance.' },
  { step: '02', title: 'Verification', desc: '200-point inspection. Mechanical integrity and documentation.' },
  { step: '03', title: 'Acquisition', desc: 'Data-driven valuations from real-time global auction results.' },
  { step: '04', title: 'Handover', desc: 'White-glove delivery with full documentation, nationwide.' },
];

function VideoBackground({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => setLoaded(true);
    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('loadeddata', onCanPlay);
    return () => {
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('loadeddata', onCanPlay);
    };
  }, []);

  return (
    <>
      <img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: loaded ? 0 : 1 }}
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}

export function HomePage() {
  const featuredCars = cars.filter((c) => c.badge).slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero with video background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <VideoBackground src={heroVideo} poster={heroPoster} />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/30 to-obsidian/50" />
        </div>

        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-down" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Bespoke Luxury & Performance</span>
            </div>

            <h1 className="display-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-8 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <span className="block text-white text-glow-white">Drive the</span>
              <span className="block shimmer-text italic">Extraordinary</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="/collection" className="btn-gold">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/sell" className="btn-outline">
                Sell Your Vehicle
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/[0.06] bg-charcoal py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Ferrari', 'Lamborghini', 'Porsche', 'Rolls-Royce', 'Bentley', 'McLaren', 'Aston Martin', 'Mercedes-AMG', 'BMW M', 'Audi RS', 'Maserati', 'Jaguar'].map((brand) => (
                <span key={brand} className="font-display text-2xl font-bold text-white/15 hover:text-gold/40 transition-colors duration-500">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gold-radial opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Reveal className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-20 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold" />
                <span className="section-label">Featured Selection</span>
              </div>
              <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white">
                Curated <span className="italic text-gold">Masterpieces</span>
              </h2>
            </div>
            <Link to="/collection" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">
              View Full Collection
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative py-20 lg:py-28 bg-charcoal border-y border-white/[0.06] overflow-hidden">
        <img src={darkCarImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="text-center lg:text-left">
                <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gold text-glow-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">The Advantage</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white">
              What We Do <span className="italic text-gold">Differently</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <div className="glass-card p-8 lg:p-10 h-full card-3d group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-all duration-500" />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-obsidian" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-charcoal border-y border-white/[0.06]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Our Protocol</span>
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white">
              The APEX <span className="italic text-gold">Process</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="relative pl-6 lg:pl-0 lg:pt-16">
                  <div className="absolute top-0 left-0 lg:relative lg:mb-4">
                    <span className="font-display text-5xl lg:text-6xl font-black text-white/10">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-2 w-4 h-px bg-gold/20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Split */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img src={showroomImage} alt="APEX Motors showroom" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Certified</span>
                  </div>
                  <p className="text-sm text-white/50">200-point inspection on every vehicle</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="section-label">Visit Showroom</span>
                </div>
                <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                  Experience the <span className="italic text-gold">Collection</span>
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Eye, text: 'Private, one-on-one viewing sessions' },
                    { icon: Phone, text: 'Dedicated specialist consultation' },
                    { icon: Sparkles, text: 'Complimentary detail and delivery' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-white/70">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="btn-gold">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Performance Showcase */}
      <section className="relative py-24 lg:py-32 bg-charcoal border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 bg-gold-radial opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Performance Metrics</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white">
              Numbers That <span className="italic text-gold">Speak</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Zap, value: '2.5s', label: 'Fastest 0-60', sub: 'Ferrari SF90 Stradale' },
              { icon: Gauge, value: '211', label: 'Top Speed (mph)', sub: 'Ferrari SF90 Stradale' },
              { icon: TrendingUp, value: '986', label: 'Peak Horsepower', sub: 'Ferrari SF90 Stradale' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="glass-card p-8 lg:p-12 text-center card-3d relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <item.icon className="w-8 h-8 text-gold mx-auto mb-6 relative z-10" />
                  <p className="font-display text-5xl lg:text-6xl font-black text-white mb-2 relative z-10">{item.value}</p>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1 relative z-10">{item.label}</p>
                  <p className="text-xs text-white/40 relative z-10">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with video background */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <VideoBackground src={ctaVideo} poster={ctaPoster} />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <Reveal>
            <h2 className="display-heading text-4xl sm:text-6xl lg:text-7xl text-white mb-8">
              Your Next <span className="italic shimmer-text">Masterpiece</span> Awaits
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/collection" className="btn-gold">
                Browse Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/sell" className="btn-outline">
                Sell Your Vehicle
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
