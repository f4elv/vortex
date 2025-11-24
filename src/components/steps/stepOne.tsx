"use client";

interface StepOneProps {
  onContinue: () => void;
}

import Button from "@/components/ui/button";

export default function StepOne({ onContinue }: StepOneProps) {
  return (
    <div className="
      w-full max-w-4xl
      bg-white/5 border border-white/10 backdrop-blur-xl
      rounded-3xl p-6 sm:p-10
      shadow-lg animate-fade-in
    ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
        Nos conte mais sobre o seu projeto
      </h2>
      <p className="text-center mb-6 text-sm sm:text-base">
        Isso nos ajuda a entender escopo, prazos e abordagem ideal para sua marca.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Seu Nome" />

        <input className="input" placeholder="Número de Trabalho" type="tel" />

        <input
          className="input sm:col-span-2"
          placeholder="Empresa / Projeto"
        />

        <textarea
          className="input sm:col-span-2"
          rows={4}
          placeholder="Descrição do Projeto"
        />

        <input className="input" placeholder="Prazo Ideal" />
        <input className="input" placeholder="Orçamento Estimado" />
      </div>

      <Button
        variant="primary"
        onClick={onContinue}
         className="w-full mt-6"
        >
        Continuar
      </Button>
    </div>
  );
}
