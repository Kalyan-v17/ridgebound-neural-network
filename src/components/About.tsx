import { pillars } from '@/data';
import { Compass, Users, ShieldCheck } from 'lucide-react';

const icons = [Compass, Users, ShieldCheck];

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/10 bg-coal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fade-up max-w-3xl mb-14 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-3">
            // Why Ridgebound
          </p>
          <h2 className="font-cond text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-[0.9] text-bone">
            We don't sell views. We sell summits.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={p.title}
                className="fade-up bg-coal p-7 sm:p-9 flex flex-col"
              >
                <Icon className="h-8 w-8 text-amber mb-6" strokeWidth={1.75} />
                <h3 className="font-cond text-3xl font-bold uppercase tracking-tight text-bone leading-none">
                  {p.title}
                </h3>
                <p className="mt-4 text-fog leading-relaxed text-[15px]">
                  {p.body}
                </p>
                <span className="mt-8 font-mono text-xs text-muted">
                  0{i + 1} / 03
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
