
import { Sun, Zap, Router, BarChart3, Power } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const HowItWorks = () => {
  const steps = [
    {
      title: "Painéis Solares",
      description: "Captam a energia do sol e a convertem em energia elétrica DC (corrente contínua).",
      icon: <Sun className="h-12 w-12 text-wl-yellow" />
    },
    {
      title: "Inversores",
      description: "Convertem a energia DC dos painéis em AC (corrente alternada) para uso doméstico.",
      icon: <Zap className="h-12 w-12 text-wl-yellow" />
    },
    {
      title: "Quadro de Distribuição",
      description: "Distribui a energia gerada para os equipamentos da casa.",
      icon: <Router className="h-12 w-12 text-wl-yellow" />
    },
    {
      title: "Medidor Bidirecional",
      description: "Mede a energia consumida da rede e a energia excedente enviada para a rede.",
      icon: <BarChart3 className="h-12 w-12 text-wl-yellow" />
    },
    {
      title: "Rede Elétrica",
      description: "Recebe o excedente de energia durante o dia e fornece energia durante a noite.",
      icon: <Power className="h-12 w-12 text-wl-yellow" />
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">
            Como Funciona o Sistema de Energia Solar
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entenda o funcionamento do sistema fotovoltaico em sua residência
          </p>
          <div className="w-24 h-1 bg-wl-yellow mx-auto mt-4"></div>
        </div>

        <div className="relative mt-16">
          {/* Sistema solar ilustração */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-wl-blue opacity-30 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10">
                <div className="bg-white rounded-full p-4 shadow-lg mb-4 hover:shadow-xl transition-shadow border-2 border-wl-blue">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-wl-blue mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform rotate-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wl-blue">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-wl-blue mb-4">Sistema On-Grid Conectado à Rede</h3>
              <p className="text-gray-700 mb-4">
                Este é o sistema mais comum no Brasil. Durante o dia, os painéis solares geram energia que 
                é utilizada pela residência. O excedente é enviado para a rede elétrica, gerando créditos. 
                À noite, quando não há geração solar, a residência utiliza energia da rede elétrica.
              </p>
              <p className="text-gray-700">
                Com esse sistema, você economiza na conta de luz e contribui para a sustentabilidade do planeta!
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src="/lovable-uploads/e88033a2-35ce-4e84-ae91-eadaf211c7ca.png" 
                alt="Sistema de energia solar residencial" 
                className="w-full md:w-[120%] h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
