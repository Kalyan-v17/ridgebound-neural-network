import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9579234/pexels-photo-9579234.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Snow-capped mountain peak emerging from fog"
          className="h-full w-full object-cover photo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 topo opacity-60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
        <p className="fade-up font-mono text-xs uppercase tracking-widest2 text-amber mb-5">
          // Trek & Mountaineering · est. 2011
        </p>
        <h1 className="fade-up font-cond font-extrabold uppercase leading-[0.85] tracking-tightest text-bone text-[19vw] sm:text-[16vw] md:text-[13rem]">
          Go Higher.
        </h1>
        <div className="fade-up mt-7 max-w-xl">
          <p className="text-base sm:text-lg text-fog leading-relaxed">
            We lead small teams into the world's biggest mountains. No hand-holding,
            no shortcuts — just real summits, earned.
          </p>
        </div>
        <div className="fade-up mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#treks"
            className="inline-flex items-center bg-amber text-charcoal font-cond text-xl font-semibold uppercase tracking-wider2 px-7 py-3.5 hover:bg-amber-bright transition-colors"
          >
            Start the Climb
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-cond text-xl uppercase tracking-wider2 text-bone border-b border-bone/40 pb-1 hover:border-amber hover:text-amber transition-colors"
          >
            Why Ridgebound
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#stats"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-fog/70 hover:text-bone transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
