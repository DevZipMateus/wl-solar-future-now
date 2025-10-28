import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturedVideos = () => {
  const videos = [
    {
      src: "/lovable-uploads/projeto-01.mp4",
      title: "Instalação Residencial Completa",
      description: "Sistema fotovoltaico residencial de alta eficiência"
    },
    {
      src: "/lovable-uploads/projeto-02.mp4",
      title: "Projeto Comercial de Grande Porte",
      description: "Solução energética para empresas e indústrias"
    },
    {
      src: "/lovable-uploads/projeto-03.mp4",
      title: "Sistema em Zona Rural",
      description: "Energia sustentável para áreas remotas"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="videos-projetos">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-wl-blue mb-2">
              Projetos em Destaque
            </h2>
            <div className="h-1 w-24 bg-wl-yellow mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos finalizados e veja a qualidade do nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in bg-gray-50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <video
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover rounded-t-lg"
                  poster={video.src + "#t=0.1"}
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute top-4 left-4 bg-wl-blue/90 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                  <Play className="w-4 h-4" />
                  Vídeo
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wl-blue mb-2 group-hover:text-wl-yellow transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
