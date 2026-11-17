import { testimonials } from '@/data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative bg-coal py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fade-up mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-3">
            // From The Trail
          </p>
          <h2 className="font-cond text-5xl sm:text-6xl font-bold uppercase leading-none text-bone">
            They went. They talk.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {testimonials.map((t) => (
            <figure key={t.name} className="fade-up bg-coal p-7 sm:p-9 flex flex-col">
              <Quote className="h-6 w-6 text-amber mb-5" strokeWidth={1.75} />
              <blockquote className="text-bone text-lg leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-white/10">
                <div className="font-cond text-xl font-semibold uppercase tracking-wide text-bone">
                  {t.name}
                </div>
                <div className="mt-1 font-mono text-xs text-muted uppercase tracking-wider2">
                  {t.detail}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
