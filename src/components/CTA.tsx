
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-wl-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wl-yellow opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wl-yellow opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a economizar hoje mesmo com energia solar!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transforme a forma como você consome energia. Invista em um sistema solar fotovoltaico e garanta economia, sustentabilidade e valorização do seu imóvel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-wl-blue hover:bg-wl-yellow hover:text-wl-blue transition-all text-lg px-8 py-6">
              <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-wl-blue transition-all text-lg px-8 py-6">
              <a href="#contato">
                Entre em Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
