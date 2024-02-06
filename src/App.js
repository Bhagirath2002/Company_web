import "./App.css";
import FooterSection from "./components/FooterSection";
import ImagBgShifter from "./components/ImagBgShifter";

import Navbar from "./components/Navbar";
import SliderTestimonial from "./components/OurExpertise";
import StatisticSection from "./components/StatisticSection";
// import OurExpertise from "./components/OurExpertise";

function App() {
  return (
    <div>
      <Navbar />
      <ImagBgShifter />
      {/* <OurExpertise /> */}
      <StatisticSection />
      <SliderTestimonial />
      <FooterSection />
    </div>
  );
}

export default App;
