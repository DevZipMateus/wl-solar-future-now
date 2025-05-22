
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll listener to show button only after scrolling a bit
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Make button visible after a delay even if no scrolling happens
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/5599557123"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-green-600 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/whatsapp1.png" 
        alt="WhatsApp" 
        width="30" 
        height="30" 
        className="w-[30px] h-[30px]"
      />
    </a>
  );
};

export default WhatsAppButton;
