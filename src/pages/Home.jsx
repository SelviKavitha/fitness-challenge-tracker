import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <CTASection/>
      <Footer/>
    </>
  );
}

export default Home;