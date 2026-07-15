import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Applications from '@/components/Applications';
import Manufacturing from '@/components/Manufacturing';
import WhyUs from '@/components/WhyUs';
import Marquee from '@/components/Marquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Products />
      <Marquee />
      <Applications />
      <Manufacturing />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
