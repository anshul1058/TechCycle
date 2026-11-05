import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import FeaturedKits from "./components/FeaturedKits";
import ImpactStats from "./components/ImpactStats";
import WhyTechCycle from "./components/WhyTechCycle";
import Retailers from "./components/Retailers";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <FeaturedKits />
        <ImpactStats />
        <WhyTechCycle />
        <Retailers />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
