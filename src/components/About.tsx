import { CheckCircle } from "lucide-react";
const About = () => {
  const benefits = ["Economia de até 95% na conta de luz", "Valorização do seu imóvel", "Energia limpa e renovável", "Baixa manutenção", "Durabilidade de mais de 25 anos"];
  return <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">Sobre a WL Energia Solar</h2>
          <div className="w-24 h-1 bg-wl-yellow mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img alt="Equipe WL Energia Solar" className="rounded-lg shadow-lg w-full h-auto object-cover" src="public/lovable-uploads/671225a6-7205-4a30-a8ce-a37f0916de6b.jpg" />
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