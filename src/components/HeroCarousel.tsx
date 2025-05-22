import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface HeroCarouselProps {
  backgroundImages: string[];
  disableSliding?: boolean;
  slideInterval?: number; // Added slideInterval prop
}

const HeroCarousel = ({ backgroundImages, disableSliding = false, slideInterval = 6000 }: HeroCarouselProps) => {
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

  // Setup carousel with improved auto-rotation
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

    // Auto-rotation implementation for the carousel
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (!disableSliding) {
      // Clear any existing interval first to avoid multiple intervals
      if (interval) clearInterval(interval);
      
      interval = setInterval(() => {
        if (!isTransitioning && api) {
          console.log("Auto-advancing carousel to next slide");
          setIsTransitioning(true);
          api.scrollNext();
        }
      }, slideInterval);
      console.log(`Auto-rotation enabled with ${slideInterval}ms interval`);
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
  }, [api, allImagesLoaded, disableSliding, slideInterval]);

  // Create indicator dots for navigation - only if sliding is not disabled and there are multiple images
  const renderIndicators = () => {
    // Only show indicators if we have more than one image AND sliding is enabled
    if (disableSliding || backgroundImages.length <= 1) return null;
    
    // For our specific case, we only want to show one indicator dot
    return (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        <button
          className="w-3 h-3 rounded-full transition-all duration-300 bg-wl-yellow scale-110"
          aria-label="Current slide"
        />
      </div>
    );
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full bg-gray-900">
      {allImagesLoaded ? (
        <Carousel 
          className="w-full h-full" 
          opts={{
            loop: true, // Always enable loop for smooth rotation
            duration: 800,
            skipSnaps: false,
            dragFree: false,
            align: "center",
            watchDrag: !disableSliding,
            inViewThreshold: 1, // Ensures full visibility threshold
            containScroll: "trimSnaps" // Helps with smooth transitions
          }} 
          setApi={setApi}
        >
          <CarouselContent className="h-full -mx-0">
            {backgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full w-full p-0">
                <div 
                  className="w-full h-full bg-cover bg-center transition-opacity duration-500"
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
      
      {/* Navigation Indicators - modified to show only one dot */}
      {allImagesLoaded && renderIndicators()}
    </div>
  );
};

export default HeroCarousel;
