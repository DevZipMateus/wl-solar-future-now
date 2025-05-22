
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/77acc533-a9ee-43f8-8178-e7c03f9429ec.png" alt="WL Energia Solar Logo" className="h-12 md:h-16" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-wl-blue font-medium hover:text-wl-yellow transition-colors">Início</a>
            <a href="#sobre" className="text-wl-blue font-medium hover:text-wl-yellow transition-colors">Sobre Nós</a>
            <a href="#servicos" className="text-wl-blue font-medium hover:text-wl-yellow transition-colors">Serviços</a>
            <a href="#contato" className="text-wl-blue font-medium hover:text-wl-yellow transition-colors">Contato</a>
            <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all">
              <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>

          <button className="md:hidden text-wl-blue" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-wl-blue font-medium hover:text-wl-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                className="text-wl-blue font-medium hover:text-wl-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="#servicos" 
                className="text-wl-blue font-medium hover:text-wl-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="text-wl-blue font-medium hover:text-wl-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-wl-blue text-white hover:bg-wl-yellow hover:text-wl-blue transition-all w-full">
                <a href="https://wa.me/5599557123" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
