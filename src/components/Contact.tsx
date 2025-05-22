
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a simulation of form submission
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Estamos à disposição para tirar suas dúvidas, fazer orçamentos e fornecer mais informações
          </p>
          <div className="w-24 h-1 bg-wl-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-wl-blue mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-wl-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <a 
                    href="tel:5599557123" 
                    className="text-gray-700 hover:text-wl-blue transition-colors"
                  >
                    (55) 99955-7123
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-wl-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <a 
                    href="mailto:wlenergiasolardion@gmail.com" 
                    className="text-gray-700 hover:text-wl-blue transition-colors"
                  >
                    wlenergiasolardion@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-wl-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-700">
                    Rua Tristão Pinto, 191<br />
                    São Gabriel - RS
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/share/18KLkJvx2Z/?mibextid=qi2Omg" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-wl-blue text-white p-2 rounded-full hover:bg-wl-yellow transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/wlenerfia.solar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-wl-blue text-white p-2 rounded-full hover:bg-wl-yellow transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-wl-blue mb-6">Envie-nos uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Nome</label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Seu nome"
                  className="w-full border-gray-300"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-1">E-mail</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="Seu e-mail"
                    className="w-full border-gray-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1">Telefone</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    required 
                    placeholder="Seu telefone"
                    className="w-full border-gray-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1">Assunto</label>
                <Input 
                  id="subject" 
                  name="subject" 
                  type="text" 
                  required 
                  placeholder="Assunto da mensagem"
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Mensagem</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Sua mensagem"
                  className="w-full min-h-[120px] border-gray-300"
                />
              </div>
              
              <Button type="submit" className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all w-full py-6">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
