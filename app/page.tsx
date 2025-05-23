"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/london_digital.png')`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Text Section */}
        <div className="flex-1 flex items-center">
          <div className="text-center w-full space-y-6 mt-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Evaluación de Madurez Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              Descubre el nivel de madurez digital de tu organización a través de nuestra evaluación integral
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex-1 flex items-center justify-center mb-20">
          <Button 
            size="lg"
            onClick={() => router.push('/dashboard')}
            className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90"
          >
            Iniciar Encuesta
          </Button>
        </div>
      </div>
    </div>
  );
}
