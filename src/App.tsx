import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Treks from '@/components/Treks';
import About from '@/components/About';
import Itinerary from '@/components/Itinerary';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-charcoal text-bone antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Treks />
        <About />
        <Itinerary />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
