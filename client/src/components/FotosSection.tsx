import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Camera } from "lucide-react";
import corpoPed from "@assets/CORPO_1759046050966.png";

export default function FotosSection() {
  return (
    <section id="fotos" className="relative py-20 bg-gradient-to-b from-slate-900 via-green-950 to-blue-950 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            Foto do ped
          </h2>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {/* Grid de fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover-elevate group cursor-pointer md:col-span-2" data-testid="foto-corpo-ped">
              <CardContent className="p-0">
                {/* Imagem do ped */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={corpoPed} 
                    alt="Foto do ped" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Conteúdo do card */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Foto do meu ped
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Aqui está uma das fotos do meu ped para você conhecer melhor como ele é!
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30" variant="outline">
                      Ped
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </section>
  );
}