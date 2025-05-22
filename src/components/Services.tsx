
import { 
  Sun, 
  Home, 
  Building2, 
  FileText, 
  Settings,
  Wrench // Replacing Tool with Wrench which is available in lucide-react
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Residencial",
      description: "Sistemas fotovoltaicos personalizados para residências, adaptados às necessidades de consumo da sua família.",
      icon: <Home className="h-10 w-10 text-wl-yellow" />
    },
    {
      title: "Empresarial",
      description: "Soluções para empresas e indústrias que desejam reduzir custos operacionais e investir em sustentabilidade.",
      icon: <Building2 className="h-10 w-10 text-wl-yellow" />
    },
    {
      title: "Projetos",
      description: "Elaboração de projetos técnicos conforme as normas da concessionária local e análise de viabilidade.",
      icon: <FileText className="h-10 w-10 text-wl-yellow" />
    },
    {
      title: "Instalação",
      description: "Instalação completa do sistema fotovoltaico por equipe especializada e certificada.",
      icon: <Wrench className="h-10 w-10 text-wl-yellow" /> // Changed from Tool to Wrench
    },
    {
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para garantir a eficiência do seu sistema solar.",
      icon: <Settings className="h-10 w-10 text-wl-yellow" />
    },
    {
      title: "Consultoria",
      description: "Orientação sobre o funcionamento, benefícios, economia e retorno do investimento em energia solar.",
      icon: <Sun className="h-10 w-10 text-wl-yellow" />
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções completas em energia solar, desde o projeto até a instalação e manutenção
          </p>
          <div className="w-24 h-1 bg-wl-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-t-wl-yellow hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-wl-blue text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all text-lg px-8 py-6">
            <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
