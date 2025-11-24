"use client";

import { useInView } from "@/lib/utils";
import Blur from "@/components/ui/blur";
import Light from "@/components/ui/light";

export default function About() {
  const { ref, isVisible } = useInView(0.5);

  return (
    <section id="About" ref={ref} className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 lg:px-32 py-8 flex flex-col items-center justify-center overflow-hidden">
      <Blur />
      <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-xs sm:text-sm tracking-widest text-purple-600 mb-3">
          Valores • Visão • Método
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Superfícies mínimas. Máxima presença.
        </h1>
        <p className="mt-6 leading-relaxed text-base sm:text-lg">
          Na Vortex, acreditamos que design é movimento — uma comunicação viva,
          precisa e emocional. Unimos direção criativa com engenharia de performance
          para construir experiências rápidas, acessíveis e profundamente interativas.
        </p>
      </div>
      <div
        className={`
          w-full max-w-6xl
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-6 mt-12
          transition-all duration-1000 delay-200
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="
          bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md
          hover:bg-white/10 transition group relative overflow-hidden
        ">
          <p className="text-sm tracking-wide text-purple-600 font-bold mb-2">
            Valores
          </p>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Precisão acima do ruído
          </h3>
          <p className="leading-relaxed">
            Refinamos cada detalhe, removemos fricções e deixamos a intenção guiar cada interação.
          </p>
        </div>
        <div className="
          bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md
          hover:bg-white/10 transition group relative overflow-hidden
        ">
          <p className="text-sm tracking-wide text-purple-600 font-bold mb-2">
            Visão
          </p>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Web fluida e cinematográfica
          </h3>
          <p className="leading-relaxed">
            Acreditamos em interfaces vivas — guiadas por movimento, contexto e expressão visual.
          </p>
        </div>
        <div className="
          bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md
          hover:bg-white/10 transition group relative overflow-hidden
        ">
          <p className="text-sm tracking-wide text-purple-600 font-bold mb-2">
            Método
          </p>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Aparência x Performance
          </h3>
          <p className="leading-relaxed">
            Do conceito à produção, afinamos performance enquanto moldamos uma estética única e memorável.
          </p>
        </div>
      </div>
      <Light />
    </section>
  );
}
