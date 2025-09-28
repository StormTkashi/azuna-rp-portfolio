import { Heart, Star } from "lucide-react";
import characterImage from "@assets/CORPO_1759023095980.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with character image and enhanced gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] ease-in-out"
        style={{
          backgroundImage: `url(${characterImage})`,
          filter: 'brightness(0.6) contrast(1.1) saturate(1.2)'
        }}
      />
      
      {/* Multiple layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-pink-900/70 to-blue-900/85" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-purple-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 via-transparent to-purple-500/15" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '3s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      </div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-2xl opacity-60" />
      <div className="absolute bottom-32 right-24 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-pink-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-16 w-24 h-24 bg-gradient-to-bl from-purple-400/15 to-blue-500/15 rounded-full blur-2xl opacity-70" />
      
      {/* Enhanced hero content with better spacing and effects */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center text-white">
        <div className="space-y-8 animate-fadeInUp">
          {/* Main title with enhanced styling */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-black bg-gradient-to-r from-pink-200 via-purple-200 via-pink-300 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-none">
              Azuna
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-3xl -z-10 scale-110" />
          </div>
          
          {/* Enhanced subtitle section */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="relative">
              <p className="uppercase font-black text-lg md:text-xl xl:text-2xl mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wider">
                A PROCURA DE PAPAIS PARA RP
              </p>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-50 blur-sm" />
            </div>
            
            <div className="relative p-4 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <p className="text-sm md:text-base xl:text-lg text-gray-100 font-medium leading-relaxed">
ola futura mamãe e papai me chamo Azuna, procuro papais pra fazer um rp de familia!
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-3xl" />
            </div>
          </div>
          
          
          {/* Enhanced personality tags */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4 text-base md:text-lg">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-pink-300/30">
              <Heart className="w-5 h-5 text-pink-300" />
              <span className="text-gray-200 font-medium">Personalidade carinhosa</span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60" />
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-purple-300/30">
              <Star className="w-5 h-5 text-purple-300" />
              <span className="text-gray-200 font-medium">Ama aventuras</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating decorative elements */}
      <div className="absolute top-24 left-24 w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-40 shadow-2xl shadow-pink-400/50 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-48 right-36 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-50 shadow-2xl shadow-blue-400/50 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-36 left-20 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-45 shadow-2xl shadow-purple-400/50 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
      <div className="absolute top-36 left-1/2 w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-60 shadow-lg shadow-pink-300/50 animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-48 right-20 w-5 h-5 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-35 shadow-xl shadow-purple-300/50 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
    </section>
  );
}