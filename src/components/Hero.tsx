
import HeroCarousel from "./HeroCarousel";
import HeroContent from "./HeroContent";

const Hero = () => {
  // Added the new image to the carousel
  const backgroundImages = [
    "/lovable-uploads/eaf01af4-8f95-4215-bdd2-1674d02f3159.png",
    "/lovable-uploads/8e9e89f6-42b7-4da0-8544-725a86557f56.png",
    "/lovable-uploads/1be4aba6-22f7-4e8c-8e73-e3eb18e59acd.png"
  ];
  
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center w-full overflow-hidden bg-gray-900">
      {/* Background Image Carousel with enabled sliding and 2 second interval */}
      <HeroCarousel backgroundImages={backgroundImages} disableSliding={false} slideInterval={2000} />

      {/* Content */}
      <HeroContent />
      
      {/* Changed from white to dark gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
