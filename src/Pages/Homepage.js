import AboutUsSection from "../components/AboutUsSection";
import OurClient from "../components/ClientsSection";
import FooterSection from "../components/FooterSection";
import ImagBgShifter from "../components/ImagBgShifter";

import Navbar from "../components/Navbar";
import { ImagesSlider } from "../components/ImagBgShifter";
import { motion } from "framer-motion";
import SliderTestimonial from "../components/OurExpertise";
import OurForteSection from "../components/OurForteSection";

import OurPortfolioSection from "../components/OurPortfolioSection";
import SquishyCard from "../components/SquishyCard";

import StatisticSection from "../components/StatisticSection";
import OurProcess from "../components/OurProcess";
// import OurExpertise from "./components/OurExpertise";
// import OurWork from "./components/OurWorks";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Homepage() {
  return (
    <div>
      <Navbar />
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl text-dark md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 py-4">
            Laser-sharp Website that hit the bull's eye of your business
            objective <br />
          </motion.p>
          <p className="text-lg text-dark md:text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Understanding your needs quickly and thoroughly, D&Wtech fuses crisp
            content into cool designs to craft groowing business !


          </p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Learn More →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <OurForteSection />

      {/* <OurClient /> */}
      <OurPortfolioSection />
      <AboutUsSection />
      {/* <OurWork /> */}
      <StatisticSection />
      <OurProcess />
      {/* <SliderTestimonial /> */}
      <FooterSection />
    </div>
  );
}

export default Homepage;
