import { itinerary } from '@/data';

export default function Itinerary() {
  return (
    <section id="gear" className="relative topo bg-charcoal py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-5">
            <div className="fade-up lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-3">
                // Sample Itinerary
              </p>
              <h2 className="font-cond text-5xl sm:text-6xl font-bold uppercase leading-[0.9] text-bone">
                Everest Base Camp
              </h2>
              <p className="mt-5 font-mono text-sm text-fog">
                16 days · 5,364m · Hard
              </p>
              <p className="mt-6 text-fog leading-relaxed">
                The classic. Eight days up through Sherpa villages, acclimatizing
                hard, until you stand on the glacier at the foot of the world's
                tallest. Then eight days down, faster, lighter, different people.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex font-cond text-lg uppercase tracking-wider2 text-amber border-b border-amber/50 hover:border-amber pb-1 transition-colors"
              >
                Request Full Brief →
              </a>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-7">
            <ol className="relative border-l border-white/15 ml-2">
              {itinerary.map((step, i) => (
                <li key={step.day} className="fade-up relative pl-7 sm:pl-10 pb-9 last:pb-0">
                  {/* Node */}
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 border border-amber bg-charcoal" />
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest2 text-amber">
                      {step.day}
                    </span>
                    {i === itinerary.length - 1 && (
                      <span className="font-cond text-xs uppercase tracking-wider2 text-amber border border-amber/60 px-1.5 py-0.5">
                        Goal
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-cond text-2xl sm:text-3xl font-bold uppercase tracking-tight text-bone leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-fog text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
