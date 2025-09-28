import { useState, useEffect } from "react";
import { Crown } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Navigating to: ${sectionId}`);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-3xl border-b border-gradient-to-r from-pink-400/30 via-purple-400/30 to-blue-400/30 shadow-2xl shadow-pink-500/20' : 'bg-gradient-to-r from-transparent via-black/10 to-transparent backdrop-blur-sm'} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover-elevate p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 group"
            onClick={() => scrollToSection('home')}
            data-testid="nav-logo"
          >
            <div className="relative">
              <Crown className="w-10 h-10 text-pink-400 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/50 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-lg opacity-30" />
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}