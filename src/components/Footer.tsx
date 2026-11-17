import { Mountain, Instagram, Twitter, Youtube } from 'lucide-react';

const cols = [
  {
    title: 'Explore',
    links: ['Treks', 'About', 'Gear', 'Itineraries'],
  },
  {
    title: 'Company',
    links: ['Guides', 'Safety', 'Partners', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Contact', 'FAQ', 'Insurance', 'Terms'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-white/10 topo">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <Mountain className="h-5 w-5 text-amber" strokeWidth={2.5} />
              <span className="font-cond text-2xl font-bold uppercase tracking-wider2 text-bone">
                Ridge<span className="text-amber">bound</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-fog leading-relaxed">
              Trek and mountaineering expeditions. Small teams, big mountains,
              no excuses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="border border-white/15 p-2.5 text-fog hover:text-amber hover:border-amber transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-cond text-base uppercase tracking-wider2 text-bone mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-fog hover:text-amber transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted uppercase tracking-wider2">
            © {new Date().getFullYear()} Ridgebound · All Rights Reserved
          </p>
          <p className="font-mono text-xs text-muted uppercase tracking-wider2">
            Built for the vertical life
          </p>
        </div>
      </div>
    </footer>
  );
}
