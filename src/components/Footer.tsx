
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wl-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/77acc533-a9ee-43f8-8178-e7c03f9429ec.png" 
              alt="WL Energia Solar Logo" 
              className="h-16 mb-4"
            />
            <p className="max-w-xs">
              Soluções completas em energia solar para sua residência ou empresa em São Gabriel - RS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-wl-yellow font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-wl-yellow transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-wl-yellow transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-wl-yellow transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-wl-yellow transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-wl-yellow font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#servicos" className="hover:text-wl-yellow transition-colors">Residencial</a></li>
                <li><a href="#servicos" className="hover:text-wl-yellow transition-colors">Empresarial</a></li>
                <li><a href="#servicos" className="hover:text-wl-yellow transition-colors">Projetos</a></li>
                <li><a href="#servicos" className="hover:text-wl-yellow transition-colors">Manutenção</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-wl-yellow font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>Rua Tristão Pinto, 191</li>
                <li>São Gabriel - RS</li>
                <li><a href="tel:5596527090" className="hover:text-wl-yellow transition-colors">(55) 9652-7090</a></li>
                <li><a href="tel:5599557123" className="hover:text-wl-yellow transition-colors">(55) 9955-7123</a></li>
                <li><a href="mailto:wlenergiasolardion@gmail.com" className="hover:text-wl-yellow transition-colors">wlenergiasolardion@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-6 text-center">
          <p className="text-sm text-white/70">
            &copy; {currentYear} WL Energia Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
