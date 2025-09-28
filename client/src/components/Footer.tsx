import { Heart, Crown, Gamepad2, MessageCircle, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Sobre a Azuna", action: () => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }) },
  ];
  
  const handleLinkClick = (action: () => void, label: string) => {
    action();
    console.log(`Footer link clicked: ${label}`);
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 border-t border-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-pink-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl opacity-60" />
      </div>
      
      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60" />
    </footer>
  );
}