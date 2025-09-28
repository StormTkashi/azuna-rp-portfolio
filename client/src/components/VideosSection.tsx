import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Video, Clock } from "lucide-react";
import video1 from "@assets/85ZkKeUZw7zEfNmaVLV9-g_1759046779937.mp4";
import video2 from "@assets/vPUJYy4nLC3L-i4ZB_W1QA_1759046779937.mp4";
import video3 from "@assets/kpp-D4P5SYFhoudGeIDWsA_1759046779937.mp4";
import video4 from "@assets/CGlIqs3KoO8FvK6k8JQ2mg_1759046779938.mp4";
import video5 from "@assets/R4jWb7GUPKysv7heAWI5gg_1759048938552.mp4";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  duration?: string;
  videoUrl: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "RP Família - Momento 1",
    description: "Um dos meus momentos favoritos no RP de família!",
    videoUrl: video1
  },
  {
    id: "2",
    title: "RP Família - Momento 2",
    description: "Diversão e carinho durante o RP!",
    videoUrl: video2
  },
  {
    id: "3",
    title: "RP Família - Momento 3",
    description: "Mais um momento especial da família!",
    videoUrl: video3
  },
  {
    id: "4",
    title: "RP Família - Momento 4",
    description: "Brincadeiras e momentos únicos!",
    videoUrl: video4
  },
  {
    id: "5",
    title: "RP Família - Momento 5",
    description: "Mais um momento especial do RP!",
    videoUrl: video5
  }
];

export default function VideosSection() {
  return (
    <section id="videos" className="relative py-20 bg-gradient-to-b from-blue-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            Vídeos dos RPs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aqui você pode ver alguns dos melhores momentos dos meus RPs de família!
          </p>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {videos.length === 0 ? (
            // Estado vazio - quando não há vídeos ainda
            <div className="text-center py-20" data-testid="videos-empty-state">
              <div className="relative mx-auto w-32 h-32 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
                <div className="relative w-32 h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center border border-blue-400/30 backdrop-blur-sm">
                  <Video className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-4" data-testid="videos-empty-title">
                Em breve!
              </h3>
              <p className="text-gray-400 text-lg" data-testid="videos-empty-description">
                Os vídeos dos RPs serão adicionados aqui em breve. Fique ligado!
              </p>
            </div>
          ) : (
            // Grid de vídeos quando houver conteúdo
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover-elevate group cursor-pointer" data-testid={`video-${video.id}`}>
                  <CardContent className="p-0">
                    {/* Video player */}
                    <div className="relative aspect-video rounded-t-lg overflow-hidden">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        data-testid={`video-player-${video.id}`}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                    
                    {/* Conteúdo do card */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mt-4">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30" variant="outline">
                          Momentos no rp
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}