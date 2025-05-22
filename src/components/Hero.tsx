import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
const Hero = () => {
  const backgroundImages = ["/lovable-uploads/eaf01af4-8f95-4215-bdd2-1674d02f3159.png", "/lovable-uploads/8e9e89f6-42b7-4da0-8544-725a86557f56.png", "/lovable-uploads/1be4aba6-22f7-4e8c-8e73-e3eb18e59acd.png"];
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);
  return <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center w-full">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <Carousel className="w-full h-full" opts={{
        loop: true,
        duration: 50
      }} setApi={setApi}>
          <CarouselContent className="h-full">
            {backgroundImages.map((image, index) => <CarouselItem key={index} className="h-full w-full p-0">
                <div className="w-full h-full bg-cover bg-center" style={{
              backgroundImage: `url(${image})`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
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
              <Button className="bg-wl-yellow text-wl-blue hover:bg-white hover:text-wl-blue transition-all text-lg px-8 py-6">
                <a href="#servicos">Nossos Serviços</a>
              </Button>
              <Button variant="outline" className="bg-wl-yellow text-wl-blue hover:bg-white hover:text-wl-blue transition-all text-lg px-8 py-6">
                <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;