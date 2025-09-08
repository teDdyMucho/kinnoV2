import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SectionBlend from './components/SectionBlend';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      {/* Blend Hero -> Features (use Hero's base #0d1324, stronger blur/overlap) */}
      <SectionBlend from="#0d1324" to="#000000" height={300} overlap={250} blurPx={38} opacity={0.2} backdropBlurPx={24} />
      <Features />
      {/* Blend Features -> Stats */}
      <SectionBlend from="#000000" to="#000000" height={220} overlap={110} blurPx={28} opacity={0.95} />
      <Stats />
      {/* Blend Stats -> Pricing (both sides carry a subtle blue tint; match to #0d1324 and increase blur) */}
      <SectionBlend from="#0d1324" to="#0d1324" height={20} overlap={100} blurPx={3} opacity={0.8} backdropBlurPx={62} />
      <Pricing />
      {/* Blend Pricing -> FAQ */}
      <SectionBlend from="#000000" to="#000000" height={220} overlap={110} blurPx={28} opacity={0.95} />
      <FAQ />
      {/* Blend FAQ -> Testimonials (neutralize slight blue via stronger blend into Testimonials) */}
      <SectionBlend from="#000000" to="#0d1324" height={240} overlap={120} blurPx={32} opacity={0.2} backdropBlurPx={20} />
      <Testimonials />
      {/* Blend Testimonials -> Footer (tuned: more height/overlap/blur to avoid any seam) */}
      <SectionBlend from="#0d1324" to="#101725" height={105} overlap={235} blurPx={2} opacity={0.95} backdropBlurPx={22} />
      <Footer />
    </div>
  );
}

export default App;