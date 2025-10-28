import { CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel/index";

const About = () => {
  const benefits = ["Economia de até 95% na conta de luz", "Valorização do seu imóvel", "Energia limpa e renovável", "Baixa manutenção", "Durabilidade de mais de 25 anos"];
  
  const carouselImages = [
    { src: "/lovable-uploads/evento-huawei.jpeg", alt: "Participação em evento Huawei FusionSolar" },
    { src: "/lovable-uploads/reuniao-equipe.jpeg", alt: "Reunião técnica da equipe WL Energia Solar" },
    { src: "/lovable-uploads/treinamento-greener.jpeg", alt: "Treinamento da equipe na Greener" },
    { src: "/lovable-uploads/equipe-stand.jpeg", alt: "Equipe WL Energia Solar em evento" },
    { src: "/lovable-uploads/evento-aldo-solar.jpeg", alt: "Participação em evento Aldo Solar" },
    { src: "/lovable-uploads/evento-goodwe.jpeg", alt: "Participação em evento Goodwe BloombergNEF" },
  ];
  return <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">Sobre a WL Energia Solar</h2>
          <div className="w-24 h-1 bg-wl-yellow mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Somos uma empresa especializada em projetos e instalação de sistemas de energia solar em São Gabriel - RS e região. 
              Nossa missão é proporcionar autonomia energética aos nossos clientes através de soluções sustentáveis 
              e economicamente viáveis.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Sob a liderança de Wagner Luciano Andrade Pinto, nossa equipe é formada por profissionais 
              qualificados e comprometidos com a excelência e satisfação dos nossos clientes.
            </p>

            <h3 className="text-xl font-semibold text-wl-blue mb-4">Benefícios da Energia Solar:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                  <CheckCircle className="text-wl-yellow mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default About;