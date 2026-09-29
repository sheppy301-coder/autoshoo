import { Link } from 'react-router-dom';
import { Gauge, Fuel, Cog, Calendar, ChevronRight } from 'lucide-react';
import type { Car } from '@/data/cars';

export function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  return (
    <Link
      to={`/collection/${car.id}`}
      className="group block"
      style={{ animation: `fadeUp 0.6s ease-out ${index * 0.08}s both` }}
    >
      <article className="card-3d glass-card overflow-hidden relative">
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80" />

          {car.badge && (
            <div className="absolute top-4 left-4 gold-bg text-obsidian rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
              {car.badge}
            </div>
          )}

          {car.status === 'reserved' && (
            <div className="absolute top-4 right-4 bg-amber-500 text-obsidian rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
              Reserved
            </div>
          )}
          {car.status === 'sold' && (
            <div className="absolute top-4 right-4 bg-white/80 text-obsidian rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
              Sold
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-1">
                {car.make}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                {car.model}
              </h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {car.year}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-white/50">
              <Gauge className="w-3.5 h-3.5 text-gold/60" />
              <span>{car.horsepower} hp</span>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <Calendar className="w-3.5 h-3.5 text-gold/60" />
              <span>{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <Fuel className="w-3.5 h-3.5 text-gold/60" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <Cog className="w-3.5 h-3.5 text-gold/60" />
              <span>{car.bodyType}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Price</p>
              <p className="font-display text-lg font-bold text-white">
                ${car.price.toLocaleString()}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gold group-hover:gap-2 transition-all">
              View Details
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
