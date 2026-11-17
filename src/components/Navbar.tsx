import { useEffect, useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const links = [
  { label: 'Treks', href: '#treks' },
  { label: 'About', href: '#about' },
  { label: 'Gear', href: '#gear' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Wordmark */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <Mountain className="h-5 w-5 text-amber" strokeWidth={2.5} />
            <span className="font-cond text-2xl font-bold uppercase tracking-wider2 text-bone leading-none">
              Ridge<span className="text-amber">bound</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-cond text-lg uppercase tracking-wider2 text-fog hover:text-bone transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center bg-amber text-charcoal font-cond text-lg font-semibold uppercase tracking-wider2 px-5 py-2.5 hover:bg-amber-bright transition-colors"
            >
              Start the Climb
            </a>
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden text-bone p-1"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-white/10">
          <ul className="px-5 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-cond text-2xl uppercase tracking-wider2 text-bone py-3 border-b border-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center bg-amber text-charcoal font-cond text-xl font-semibold uppercase tracking-wider2 px-5 py-2.5"
              >
                Start the Climb
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
