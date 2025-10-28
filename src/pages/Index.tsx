
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import ClientPhotos from "@/components/ClientPhotos";
import FeaturedVideos from "@/components/FeaturedVideos";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <ClientPhotos />
      <FeaturedVideos />
      <HowItWorks />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
