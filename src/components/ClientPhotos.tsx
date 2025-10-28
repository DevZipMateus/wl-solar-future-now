import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ClientPhotos = () => {
  const clientImages = [
    "/lovable-uploads/562456979955544.jpeg",
    "/lovable-uploads/2083876972145854.jpeg",
    "/lovable-uploads/1953609308818847.jpeg",
    "/lovable-uploads/592108736688993.jpeg",
    "/lovable-uploads/722986786778583.jpeg",
    "/lovable-uploads/553176547859616.jpeg",
    "/lovable-uploads/1423315542137942.jpeg",
    "/lovable-uploads/679597208287623.jpeg",
    "/lovable-uploads/683933470927873.jpeg",
    "/lovable-uploads/2420711141647004.jpeg",
    "/lovable-uploads/1415062846337063.jpeg",
    "/lovable-uploads/549978797991857.jpeg",
    "/lovable-uploads/1757225258204705.jpeg",
    "/lovable-uploads/whatsapp-client-gym.jpeg",
    "/lovable-uploads/whatsapp-client-outdoor.jpeg",
  ];

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? clientImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === clientImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-4">Nossos Clientes Satisfeitos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Veja alguns dos sistemas de energia solar que instalamos para nossos clientes em São Gabriel - RS e região
          </p>
          <div className="w-24 h-1 bg-wl-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clientImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Sistema de energia solar instalado - Cliente ${index + 1}`}
                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                  loadedImages.has(image) ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(image)}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Quer fazer parte desta galeria? Entre em contato conosco e solicite seu orçamento!
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/95">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <img
                src={clientImages[selectedImageIndex]}
                alt={`Sistema de energia solar instalado - Cliente ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImageIndex + 1} / {clientImages.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ClientPhotos;
