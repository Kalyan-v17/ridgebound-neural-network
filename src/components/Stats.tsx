import { stats } from '@/data';

export default function Stats() {
  return (
    <section id="stats" className="relative border-y border-white/10 topo bg-charcoal">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`fade-up px-5 sm:px-8 py-10 sm:py-14 text-center md:text-left ${
              i !== 0 ? 'md:border-l border-white/10' : ''
            } ${i % 2 !== 0 ? 'border-l border-white/10 md:border-l' : ''} ${
              i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
            }`}
          >
            <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-bone tabular-nums">
              {s.value}
            </div>
            <div className="mt-2 font-cond text-base sm:text-lg uppercase tracking-wider2 text-fog">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
