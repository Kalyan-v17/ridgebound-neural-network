import { treks } from '@/data';
import type { Trek } from '@/data';
import { Clock, Mountain, Gauge } from 'lucide-react';

const diffColor: Record<Trek['difficulty'], string> = {
  Mod: 'text-fog border-fog/50',
  Hard: 'text-amber border-amber/60',
  Severe: 'text-amber-bright border-amber-bright/70',
};

function Card({ t }: { t: Trek }) {
  return (
    <article className="fade-up group relative overflow-hidden border border-white/10 bg-coal">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={t.image}
          alt={t.name}
          loading="lazy"
          className="h-full w-full object-cover photo transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <span
          className={`absolute top-4 left-4 font-cond text-sm font-semibold uppercase tracking-wider2 border px-2.5 py-1 bg-charcoal/70 backdrop-blur-sm ${
            diffColor[t.difficulty]
          }`}
        >
          {t.difficulty}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-amber/90 mb-1">
          {t.region}
        </p>
        <h3 className="font-cond text-3xl font-bold uppercase leading-none text-bone">
          {t.name}
        </h3>
        <div className="mt-4 flex items-center gap-4 font-mono text-xs text-fog">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {t.days}d
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mountain className="h-3.5 w-3.5" /> {t.elevation}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" /> {t.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Treks() {
  return (
    <section id="treks" className="relative topo bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fade-up flex items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-3">
              // Featured Expeditions
            </p>
            <h2 className="font-cond text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-none text-bone">
              Pick Your<br className="sm:hidden" /> Line
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex font-cond text-lg uppercase tracking-wider2 text-fog hover:text-amber transition-colors border-b border-white/20 hover:border-amber pb-1"
          >
            All Expeditions →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {treks.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
