
import HeroCarousel from "./HeroCarousel";
import HeroContent from "./HeroContent";

const Hero = () => {
  // Using only one image in the carousel
  const backgroundImages = [
    "/lovable-uploads/eaf01af4-8f95-4215-bdd2-1674d02f3159.png"
  ];
  
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center w-full overflow-hidden bg-gray-900">
      {/* Background Image Carousel with a single image */}
      <HeroCarousel backgroundImages={backgroundImages} disableSliding={true} slideInterval={2000} />

      {/* Content */}
      <HeroContent />
      
      {/* Changed from white to dark gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
