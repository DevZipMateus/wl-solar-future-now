
import { PiggyBank, Lightbulb, Hourglass, DollarSign } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-white" />,
      title: "Economize até 92%",
      description: "na sua conta de energia elétrica"
    },
    {
      icon: <Hourglass className="w-12 h-12 text-white" />,
      title: "Garanta, em média, 25 anos",
      description: "de produção de energia limpa"
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-white" />,
      title: "Incremente a sua aposentadoria",
      description: "com a economia gerada pela energia solar"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white" />,
      title: "Recupere seu investimento",
      description: "em poucos anos"
    }
  ];

  const images = [
    "/lovable-uploads/1610c51f-327c-42ab-a658-76ca5e4f29f4.png",
    "/lovable-uploads/475d8185-2496-42ef-93d1-b86da422edd7.png",
    "/lovable-uploads/f3550bfc-bf54-4241-bed0-cb0bcf51c3be.png",
    "/lovable-uploads/6ebb5d3b-a4fb-4799-8a66-a5a8f1348ae1.png",
    "/lovable-uploads/1610c51f-327c-42ab-a658-76ca5e4f29f4.png",
    "/lovable-uploads/475d8185-2496-42ef-93d1-b86da422edd7.png"
  ];

  return (
    <section className="py-16 bg-wl-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vamos transformar a <span className="text-wl-yellow">energia do sol</span> em economia para você e sua família?
          </h2>
          <div className="w-24 h-1 bg-wl-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 p-2 bg-wl-blue border-2 border-wl-yellow rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-wl-yellow">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden aspect-square">
              <img 
                src={image} 
                alt={`Instalação de painéis solares ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
