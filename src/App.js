import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import OurClient from "./components/ClientsSection";
import FooterSection from "./components/FooterSection";
import ImagBgShifter from "./components/ImagBgShifter";

import Navbar from "./components/Navbar";
import SliderTestimonial from "./components/OurExpertise";
import OurForteSection from "./components/OurForteSection";

import OurPortfolioSection from "./components/OurPortfolioSection";
import SquishyCard from "./components/SquishyCard";

import StatisticSection from "./components/StatisticSection";
// import OurExpertise from "./components/OurExpertise";
// import OurWork from "./components/OurWorks";

function App() {
  return (
    <div>
      <Navbar />
      <ImagBgShifter />
      <OurForteSection />
      {/* <SquishyCard /> */}

      <OurClient />
      <OurPortfolioSection />
      <AboutUsSection />
      {/* <OurWork /> */}
      <StatisticSection />
      <SliderTestimonial />
      <FooterSection />
    </div>
  );
}

export default App;
