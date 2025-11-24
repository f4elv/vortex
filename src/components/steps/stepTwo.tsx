"use client";

import { useState } from "react";
import Button from "../ui/button";

interface StepTwoProps {
  onSubmit: () => void;
  onBack: () => void;
}


export default function StepTwo({ onSubmit, onBack }: StepTwoProps) {
  const [type, setType] = useState("");

  return (
    <div className="
      w-full max-w-4xl
      bg-white/5 border border-white/10 backdrop-blur-xl
      rounded-3xl p-6 sm:p-10
      shadow-lg animate-fade-in
    ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        O que você está buscando criar?
      </h2>

      <p className="text-center mb-10 text-sm sm:text-base">
        Escolha uma direção. O escopo final será ajustado na call.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {["Landing", "Dashboard", "Outro serviço"].map((item) => (
          <button
            key={item}
            onClick={() => setType(item)}
            className={`
              py-3 rounded-xl border transition text-sm sm:text-base
              ${type === item ? "bg-purple-600 border-purple-400" : "bg-black/20 border-white/10"}
            `}
          >
            {item}
          </button>
        ))}
      </div>
      
      <textarea
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition mb-8"
        placeholder="Detalhes adicionais (opcional)"
      />

      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 sm:gap-6">
        <Button
          onClick={onBack} 
          variant="secondary"
           className="w-full"
        >
          Voltar
        </Button>
        <Button 
          onClick={onSubmit} 
          variant="primary"
          className="w-full"
        >
          Confirmar solicitação
        </Button>
      </div>
    </div>
  );
}
