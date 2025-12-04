"use client";

import { formData, formatPhoneBR } from "@/lib/utils";
import { StepOneSchema } from "@/lib/formSchema";
import { useState } from "react";

interface StepOneProps {
  onContinue: () => void;
  updateField: (field: string, value: any) => void;
  data: formData
}

import Button from "@/components/ui/button";

export default function StepOne({ onContinue, updateField, data }: StepOneProps, ) {
  const [error, setErrors] = useState<any>()


  function handleNext() {
    const result = StepOneSchema.safeParse(data);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    onContinue();
  }
  
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
      <p className="text-center mb-12 text-sm sm:text-base">
        Isso nos ajuda a entender escopo, prazos e abordagem ideal para sua marca.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col sm:col-span-1">
          {error?.name && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">{error.name[0]}</p>
          )}
          <input 
            className="input" 
            placeholder="Seu Nome"
            value={data.name || ""}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:col-span-1">
          {error?.phone && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">{error.phone[0]}</p>
          )}
          <input 
            className="input" 
            placeholder="(99) 99999-9999"
            value={data.phone || ""}
            onChange={(e) => {
              const newValue = formatPhoneBR(e.target.value);
              updateField("phone", newValue)
            }}
          />
        </div>

        <div className="flex flex-col sm:col-span-2">
          {error?.company && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">{error.company[0]}</p>
          )}
          <input
            className="input"
            placeholder="Empresa / Projeto"
            value={data.company || ""}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:col-span-2">
          {error?.projectDescription && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">
              {error.projectDescription[0]}
            </p>
          )}
          <textarea
            className="input"
            rows={4}
            placeholder="Descrição do Projeto"
            value={data.projectDescription || ""}
            onChange={(e) =>
              updateField("projectDescription", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col sm:col-span-1">
          {error?.deadline && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">{error.deadline[0]}</p>
          )}
          <input 
            className="input" 
            placeholder="Prazo Ideal"
            value={data.deadline || ""}
            onChange={(e) => updateField("deadline", e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:col-span-1">
          {error?.budget && (
            <p className="text-red-500 text-sm mb-1 animate-fade-in">{error.budget[0]}</p>
          )}
          <input 
            className="input" 
            placeholder="Orçamento Estimado"
            value={data.budget || ""}
            onChange={(e) => updateField("budget", e.target.value)} 
          />
        </div>
      </div>


      <Button
        variant="primary"
        onClick={handleNext}
        className="w-full mt-6"
        >
        Continuar
      </Button>
    </div>
  );
}
