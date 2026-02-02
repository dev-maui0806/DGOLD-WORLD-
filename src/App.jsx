import Header from './components/Header';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import LegendSection from './components/LegendSection';
import TokenomicsSection from './components/TokenomicsSection';
import HowToBuySection from './components/HowToBuySection';
import RoadmapSection from './components/RoadmapSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <Banner />
      <LegendSection />
      <TokenomicsSection />
      <HowToBuySection />
      <RoadmapSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
