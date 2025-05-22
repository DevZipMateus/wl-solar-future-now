
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface HeroCarouselProps {
  backgroundImages: string[];
  disableSliding?: boolean;
}

const HeroCarousel = ({ backgroundImages, disableSliding = false }: HeroCarouselProps) => {
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
            console.log(`Image loaded successfully: ${src}`);
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
      console.log("All images loaded:", backgroundImages);
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
      console.log("Carousel settled at index:", api.selectedScrollSnap());
      updateCurrentIndex(); // Ensure index is correct after animation completes
    });
    api.on("reInit", updateCurrentIndex);
    api.on("pointerDown", () => {
      setIsTransitioning(true);
    });

    // Auto-rotation with improved timing - only if sliding is enabled
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (!disableSliding) {
      interval = setInterval(() => {
        if (!isTransitioning && api) {
          setIsTransitioning(true);
          api.scrollNext();
        }
      }, 6000); // 6 seconds between slides for better viewing
      console.log("Auto-rotation enabled with 6-second interval");
    } else {
      console.log("Auto-rotation disabled - static images only");
    }
    
    return () => {
      if (interval) clearInterval(interval);
      // Clean up all event listeners
      if (api) {
        api.off("select", updateCurrentIndex);
        api.off("settle", () => {});
        api.off("reInit", updateCurrentIndex);
        api.off("pointerDown", () => {});
      }
    };
  }, [api, allImagesLoaded, isTransitioning, disableSliding]);

  // Create indicator dots for navigation - only if sliding is not disabled and there are multiple images
  const renderIndicators = () => {
    if (disableSliding || backgroundImages.length <= 1) return null;
    
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
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full bg-gray-900">
      {allImagesLoaded ? (
        <Carousel 
          className="w-full h-full" 
          opts={{
            loop: !disableSliding,
            duration: 800,
            skipSnaps: false,
            dragFree: false,
            align: "center",
            // Completely disable both sliding and interaction when disableSliding is true
            watchDrag: !disableSliding
          }} 
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            {backgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full w-full p-0">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    position: 'absolute',
                    inset: 0
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
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
      
      {/* Navigation Indicators - only shown when sliding is enabled */}
      {allImagesLoaded && renderIndicators()}
    </div>
  );
};

export default HeroCarousel;
