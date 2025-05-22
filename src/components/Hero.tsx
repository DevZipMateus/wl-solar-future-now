import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="inicio" className="relative bg-gradient-to-b from-white to-gray-100 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wl-blue mb-4">
              O Seu futuro começa agora
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              A WL Energia Solar oferece soluções completas em energia solar para sua casa ou empresa em São Gabriel - RS e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all text-lg px-8 py-6">
                <a href="#servicos">Nossos Serviços</a>
              </Button>
              <Button variant="outline" className="border-wl-blue text-wl-blue hover:bg-wl-blue hover:text-white transition-all text-lg px-8 py-6">
                <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-wl-yellow/20 blur-xl animate-pulse"></div>
              <img alt="Painéis solares instalados" className="rounded-2xl shadow-xl relative z-10 animate-float w-full max-w-md" src="/lovable-uploads/671225a6-7205-4a30-a8ce-a37f0916de6b.jpg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;