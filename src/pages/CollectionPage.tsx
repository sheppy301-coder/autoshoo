import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { cars, makes, bodyTypes } from '@/data/cars';
import { CarCard } from '@/components/CarCard';
import { Reveal } from '@/components/Reveal';

export function CollectionPage() {
  const [search, setSearch] = useState('');
  const [makeFilter, setMakeFilter] = useState('All');
  const [bodyFilter, setBodyFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = cars.filter((c) => {
      const matchesSearch =
        !search ||
        `${c.make} ${c.model} ${c.year}`.toLowerCase().includes(search.toLowerCase());
      const matchesMake = makeFilter === 'All' || c.make === makeFilter;
      const matchesBody = bodyFilter === 'All' || c.bodyType === bodyFilter;
      return matchesSearch && matchesMake && matchesBody;
    });

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === 'year-new') result = [...result].sort((a, b) => b.year - a.year);
    else if (sortBy === 'mileage-low') result = [...result].sort((a, b) => a.mileage - b.mileage);

    return result;
  }, [search, makeFilter, bodyFilter, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setMakeFilter('All');
    setBodyFilter('All');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">The Collection</span>
          </div>
          <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl text-white">
            Available <span className="italic text-gold">Assets</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-xl">
            Browse our complete inventory of certified luxury and performance vehicles.
          </p>
        </Reveal>

        <div className="glass-card p-4 sm:p-6 mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search make or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-none pl-11 pr-4 h-12 text-sm text-white placeholder:text-white/30 focus:border-gold transition-colors outline-none"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <select
              value={makeFilter}
              onChange={(e) => setMakeFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white focus:border-gold transition-colors outline-none cursor-pointer"
            >
              {makes.map((m) => (
                <option key={m} value={m} className="bg-charcoal">{m === 'All' ? 'All Makes' : m}</option>
              ))}
            </select>

            <select
              value={bodyFilter}
              onChange={(e) => setBodyFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white focus:border-gold transition-colors outline-none cursor-pointer"
            >
              {bodyTypes.map((b) => (
                <option key={b} value={b} className="bg-charcoal">{b === 'All' ? 'All Types' : b}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-none px-4 h-12 text-sm text-white focus:border-gold transition-colors outline-none cursor-pointer"
            >
              <option value="featured" className="bg-charcoal">Featured</option>
              <option value="price-low" className="bg-charcoal">Price: Low to High</option>
              <option value="price-high" className="bg-charcoal">Price: High to Low</option>
              <option value="year-new" className="bg-charcoal">Newest Year</option>
              <option value="mileage-low" className="bg-charcoal">Lowest Mileage</option>
            </select>

            {(search || makeFilter !== 'All' || bodyFilter !== 'All') && (
              <button onClick={resetFilters} className="inline-flex items-center gap-2 px-4 h-12 text-sm text-white/50 hover:text-gold transition-colors">
                <X className="w-4 h-4" />
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-white/40">
            {filtered.length} {filtered.length === 1 ? 'vehicle' : 'vehicles'} available
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg mb-4">No vehicles match your criteria.</p>
            <button onClick={resetFilters} className="btn-outline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
