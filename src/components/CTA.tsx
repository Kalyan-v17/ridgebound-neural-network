export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27016269/pexels-photo-27016269.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Snow-covered mountain peak under moody skies"
          className="h-full w-full object-cover photo"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-0 topo opacity-50" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-36 text-center">
        <p className="fade-up font-mono text-xs uppercase tracking-widest2 text-amber mb-5">
          // The Pitch
        </p>
        <h2 className="fade-up font-cond font-extrabold uppercase leading-[0.82] tracking-tightest text-bone text-[14vw] sm:text-[10vw] md:text-8xl">
          Comfort is<br />Overrated.
        </h2>
        <p className="fade-up mt-7 max-w-xl mx-auto text-fog text-lg leading-relaxed">
          Tell us where you want to go. We'll tell you if you're ready — and how
          to get there if you're not.
        </p>
        <div className="fade-up mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#treks"
            className="inline-flex items-center bg-amber text-charcoal font-cond text-xl font-semibold uppercase tracking-wider2 px-8 py-4 hover:bg-amber-bright transition-colors"
          >
            Start the Climb
          </a>
          <a
            href="mailto:hello@ridgebound.example"
            className="inline-flex items-center text-bone font-cond text-xl uppercase tracking-wider2 border border-white/30 px-8 py-4 hover:border-amber hover:text-amber transition-colors"
          >
            Talk to a Guide
          </a>
        </div>
      </div>
    </section>
  );
}
