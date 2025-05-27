"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, BarChart2, Brain, Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const handleStartSurvey = () => {
    setTheme('light');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/london_digital.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full py-6 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <Image
              src="/londonlogodark.png"
              alt="London Consulting Group"
              width={120}
              height={48}
              className="block"
            />
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Evaluación de<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Madurez Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Descubre el nivel de madurez digital de tu organización a través de nuestra evaluación integral
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <BarChart2 className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Análisis Detallado</h3>
                <p className="text-sm text-white/80">Evaluación profunda de tus capacidades digitales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <Brain className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Resultados Inmediatos</h3>
                <p className="text-sm text-white/80">Análisis impulsado por IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <Lightbulb className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Recomendaciones</h3>
                <p className="text-sm text-white/80">Insights accionables para tu transformación</p>
          </div>
        </div>

            {/* CTA Button */}
            <div className="mt-12">
          <Button 
            size="lg"
                onClick={handleStartSurvey}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white group"
          >
                Iniciar Evaluación
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 px-4 md:px-6">
          <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
            © {new Date().getFullYear()} London Consulting Group. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}
