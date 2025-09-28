import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideosSection from "@/components/VideosSection";
import FotosSection from "@/components/FotosSection";
import Hotbar from "@/components/Hotbar";
import FallingStrawberries from "@/components/FallingStrawberries";
import Footer from "@/components/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
          {/* Hotbar no topo */}
          <Hotbar />
          
          {/* Morangos caindo */}
          <FallingStrawberries />
          
          {/* Global background decorative elements */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-pink-500/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-purple-500/3 to-blue-500/3 rounded-full blur-3xl opacity-70" />
          </div>
          <main>
            <div id="home">
              <HeroSection />
            </div>
            <AboutSection />
            <VideosSection />
            <FotosSection />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
