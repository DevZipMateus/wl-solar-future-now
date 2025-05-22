
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const Hero = () => {
  // Ensure exactly three images in the carousel
  const backgroundImages = [
    "/lovable-uploads/eaf01af4-8f95-4215-bdd2-1674d02f3159.png", 
    "/lovable-uploads/8e9e89f6-42b7-4da0-8544-725a86557f56.png", 
    "/lovable-uploads/1be4aba6-22f7-4e8c-8e73-e3eb18e59acd.png"
  ];
  
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all images before displaying carousel
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = backgroundImages.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
            resolve();
          };
        });
      });
      
      await Promise.all(loadPromises);
      setAllImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  // Setup carousel with improved events for smoother transitions
  useEffect(() => {
    if (!api || !allImagesLoaded) return;
    
    // Track the current slide index accurately
    const updateCurrentIndex = () => {
      if (api) {
        const index = api.selectedScrollSnap();
        console.log("Current slide index:", index);
        setCurrentIndex(index);
      }
    };

    // Initialize the index
    updateCurrentIndex();
    
    // Setup all necessary event handlers
    api.on("select", updateCurrentIndex);
    api.on("settle", () => {
      setIsTransitioning(false);
      updateCurrentIndex(); // Ensure index is correct after animation completes
    });
    api.on("reInit", updateCurrentIndex);
    api.on("pointerDown", () => {
      setIsTransitioning(true);
    });

    // Auto-rotation with improved timing
    const interval = setInterval(() => {
      if (!isTransitioning && api) {
        setIsTransitioning(true);
        api.scrollNext();
      }
    }, 6000); // 6 seconds between slides for better viewing
    
    return () => {
      clearInterval(interval);
      // Clean up all event listeners
      if (api) {
        api.off("select", updateCurrentIndex);
        api.off("settle", () => {});
        api.off("reInit", updateCurrentIndex);
        api.off("pointerDown", () => {});
      }
    };
  }, [api, allImagesLoaded, isTransitioning]);

  // Create indicator dots for navigation
  const renderIndicators = () => {
    return (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-wl-yellow scale-110" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => {
              if (api) {
                setIsTransitioning(true);
                api.scrollTo(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {allImagesLoaded ? (
          <Carousel 
            className="w-full h-full" 
            opts={{
              loop: true,
              duration: 800,
              skipSnaps: false,
              dragFree: false,
              align: "center"
            }} 
            setApi={setApi}
          >
            <CarouselContent className="h-full">
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className="h-full w-full p-0">
                  <div 
                    className="w-full h-full"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  >
                    <div 
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="h-32 w-32 rounded-full bg-gray-800"></div>
            </div>
          </div>
        )}
        
        {/* Navigation Indicators */}
        {allImagesLoaded && renderIndicators()}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <img src="/lovable-uploads/77acc533-a9ee-43f8-8178-e7c03f9429ec.png" alt="WL Energia Solar Logo" className="h-24 md:h-32 mb-8 animate-fade-in" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl p-6 md:p-10">
          <div className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              O Seu futuro começa agora
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in delay-100">
              A WL Energia Solar oferece soluções completas em energia solar para sua casa ou empresa em São Gabriel - RS e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
              <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all text-lg px-8 py-6">
                <a href="#servicos">Nossos Serviços</a>
              </Button>
              <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all text-lg px-8 py-6">
                <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
