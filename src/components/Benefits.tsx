
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
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="rounded-lg overflow-hidden aspect-ratio-1">
              <img 
                src={`/lovable-uploads/671225a6-7205-4a30-a8ce-a37f0916de6b.jpg`} 
                alt={`Instalação de painéis solares ${num}`}
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
