import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Collection', path: '/collection' },
  { label: 'Acquisition', path: '/sell' },
  { label: 'Financing', path: '/financing' },
  { label: 'Atelier', path: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/90 backdrop-blur-2xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2 sm:gap-3" onClick={() => navigate('/')}>
            <div className="relative">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-gold">
                APEX
              </span>
              <span className="absolute -top-1 -right-3 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              Motors
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    active ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/collection" className="hidden sm:inline-flex btn-gold !py-2.5 !px-6 !text-[10px]">
              View Collection
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center gap-2 animate-fade-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-display text-3xl font-bold text-white/80 hover:text-gold transition-colors duration-300 py-3"
                style={{ animation: `fadeUp 0.5s ease-out ${i * 0.1}s both` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/collection"
              className="btn-gold mt-6"
              style={{ animation: 'fadeUp 0.5s ease-out 0.5s both' }}
            >
              View Collection
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
