
import { Button } from "@/components/ui/button";
import { Instagram, Camera } from "lucide-react";

const HeroContent = () => {
  return (
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
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all text-lg px-8 py-6 flex items-center gap-2">
              <Instagram size={20} />
              <a href="https://www.instagram.com/wlenergia.solar/" target="_blank" rel="noopener noreferrer">
                Ver Projetos
              </a>
            </Button>
            <Button className="bg-green-600 text-white hover:bg-green-700 transition-all text-lg px-8 py-6 flex items-center gap-2">
              <Camera size={20} />
              <a href="#galeria">Ver Galeria</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
