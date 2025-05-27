
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram
} from "lucide-react";

const Contact = () => {
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-wl-blue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-wl-blue">Telefones</h4>
              <div className="space-y-1">
                <a 
                  href="tel:5596527090" 
                  className="block text-gray-700 hover:text-wl-blue transition-colors"
                >
                  (55) 9652-7090
                </a>
                <a 
                  href="tel:5599557123" 
                  className="block text-gray-700 hover:text-wl-blue transition-colors"
                >
                  (55) 9955-7123
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-wl-blue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-wl-blue">E-mail</h4>
              <a 
                href="mailto:wlenergiasolardion@gmail.com" 
                className="text-gray-700 hover:text-wl-blue transition-colors"
              >
                wlenergiasolardion@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-wl-blue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-wl-blue">Endereço</h4>
              <p className="text-gray-700">
                Rua Tristão Pinto, 191<br />
                São Gabriel - RS
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-wl-blue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Instagram size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-wl-blue">Redes Sociais</h4>
              <div className="flex justify-center space-x-4">
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
                  href="https://www.instagram.com/wlenergia.solar/" 
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
      </div>
    </section>
  );
};

export default Contact;
