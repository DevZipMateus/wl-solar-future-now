
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface HeroCarouselProps {
  backgroundImages: string[];
}

const HeroCarousel = ({ backgroundImages }: HeroCarouselProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(backgroundImages.length).fill(false));
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
  }, [backgroundImages]);

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
  );
};

export default HeroCarousel;
