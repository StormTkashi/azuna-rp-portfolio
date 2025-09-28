import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Smile, Zap, Crown, Gamepad2, Music } from "lucide-react";

interface PersonalityTrait {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
}

const personalityTraits: PersonalityTrait[] = [
  { icon: Heart, label: "Carinhosa", description: "Sempre disposta a ajudar e fazer amigos", color: "text-pink-400" },
  { icon: Smile, label: "Alegre", description: "Traz sorrisos por onde passa", color: "text-yellow-400" },
  { icon: Zap, label: "Energética", description: "Cheia de energia para aventuras", color: "text-blue-400" },
  { icon: Crown, label: "Criativa", description: "Adora inventar brincadeiras novas", color: "text-purple-400" },
  { icon: Gamepad2, label: "Gamer", description: "Ama jogos e competições divertidas", color: "text-green-400" },
  { icon: Music, label: "Musical", description: "Canta e dança com muita alegria", color: "text-pink-400" }
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Subtle background elements - respecting reduced motion */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            Conheça a Azuna
          </h2>
          <div className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-lg">
              <p className="text-center text-yellow-300 font-bold uppercase tracking-wider text-sm">OBSERVAÇÕES</p>
            </div>
            <p className="mb-6 text-lg leading-relaxed px-4 py-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              faço rp de cocuda vai faz 1 ano, sou apaixonada pelo rp q faço, entao faço tudo certinho e quero o mesmo da minha futura familia.
            </p>
            <p className="text-pink-300 font-bold text-lg px-4 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-400/30 backdrop-blur-lg">
              pretendo futuramente fazer conteudo para o tiktok, OU SEJA QUERO PAIS QUE SEJA IMERSIVOS E BRINCALHOES !.
            </p>
          </div>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {/* Story Section with organic design */}
          <div className="relative group" data-testid="card-story">
            {/* Organic flowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 via-blue-500/8 to-pink-500/10 opacity-60 group-hover:opacity-80 transition-all duration-1000" 
                 style={{
                   borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                   filter: 'blur(1px)'
                 }} />
            <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-bl from-pink-400/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tr from-purple-400/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
            
            <div className="p-10 relative z-10 backdrop-blur-sm" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.08) 100%)',
                   borderRadius: '40% 60% 30% 70% / 50% 60% 40% 50%',
                   border: '1px solid rgba(255,255,255,0.1)'
                 }}>
              <div className="relative">
                <h3 className="text-3xl font-display font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text mb-8 flex items-center gap-3 uppercase tracking-wide">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 backdrop-blur-sm">
                    <Heart className="w-7 h-7 text-pink-300" />
                  </div>
                  Sobre Mim!
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4 text-gray-200 leading-relaxed">
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-pink-950/30 to-pink-900/20 border-l-4 border-pink-400 backdrop-blur-sm hover:bg-pink-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                  <p className="text-gray-200 font-medium">meu rp é bom e animado, dou meu melhor no que faço.</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 to-purple-900/20 border-l-4 border-purple-400 backdrop-blur-sm hover:bg-purple-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <p className="text-gray-200 font-medium">meu modificador é suave.</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-yellow-950/30 to-yellow-900/20 border-l-4 border-yellow-400 backdrop-blur-sm hover:bg-yellow-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  <p className="text-gray-200 font-medium">sou meiga e tambem ligada nos 220v kk</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-blue-950/30 to-blue-900/20 border-l-4 border-blue-400 backdrop-blur-sm hover:bg-blue-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <p className="text-gray-200 font-medium">não abandono meus pais, e espero que minha futura familia tmb n.</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-green-950/30 to-green-900/20 border-l-4 border-green-400 backdrop-blur-sm hover:bg-green-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <p className="text-gray-200 font-medium">sou imersiva.</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-indigo-950/30 to-indigo-900/20 border-l-4 border-indigo-400 backdrop-blur-sm hover:bg-indigo-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <p className="text-gray-200 font-medium">tenho peds, caso tenha ja ped, otimo pode mostrar que veremos sobre</p>
                </div>
                
                <div className="group/item p-5 rounded-2xl bg-gradient-to-r from-red-950/30 to-red-900/20 border-l-4 border-red-400 backdrop-blur-sm hover:bg-red-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                  <p className="text-gray-200 font-medium">sobre por o ped na cidade, podemos falar sobre, mais geralmente deixo para os pais ver, como garantia que nao vao abandonar o rp cmg, e nem eu com eles, (POIS JA ACONTECEU DE EU POR, E ELES ABANDONAR, OU FAZER MANCADA)</p>
                </div>
                
                <div className="group/item p-5 rounded-2xl bg-gradient-to-r from-pink-950/30 to-pink-900/20 border-l-4 border-pink-400 backdrop-blur-sm hover:bg-pink-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                  <p className="text-gray-200 font-medium">como sou carinhosa, espero que caso eu tenha irmaos, minha irmã(o) n tenha ciumes possessivo dos papais cmg, e sim seremos unidos. (teremos ciumes as vezes mais é normal) kk</p>
                </div>
                
                <div className="group/item p-4 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-cyan-900/20 border-l-4 border-cyan-400 backdrop-blur-sm hover:bg-cyan-950/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <p className="text-gray-200 font-medium">meu horario na semana disponivel é pela noite, e final de semana me dedico a ficar mais presente ainda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fun Facts */}
        <Card className="mt-12 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-blue-600/30 border-2 border-pink-400/50 backdrop-blur-sm shadow-2xl shadow-pink-500/20 hover-elevate" data-testid="card-facts">
          <CardContent className="p-10">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
              <div className="relative">
                <div className="mb-4">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto animate-pulse" />
                </div>
                <p className="text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-2xl md:text-3xl font-bold italic font-display drop-shadow-lg">
                  "faço tudo certinho e quero o mesmo da minha futura familia"
                </p>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}